import { buffer } from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("../../../permissions");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;
const fulfillOrder = async (session) => {
  const images = JSON.parse(session.metadata.images).map((image) =>
    JSON.stringify(image)
  );

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: images,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      return fulfillOrder(session)
        .then(() => res.status(200).json({ ok: true }))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
    res.json({ ok: true });
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default handler;
