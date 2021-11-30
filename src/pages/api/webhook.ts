import * as admin from "firebase-admin";
import { IncomingMessage } from "http";
import { buffer } from "micro";
import stripelib from "stripe";

const serviceAccount = require("../../../permissions");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

// @ts-ignore: ENV vars would be present
const stripe = new stripelib.Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
  typescript: true,
});
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;
const fulfillOrder = async (session: any) => {
  const images = JSON.parse(session.metadata.images).map((image: any) =>
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

const handler = async (
  req: IncomingMessage,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      send: { (arg0: string): any; new (): any };
      json: { (arg0: { ok: boolean }): any; new (): any };
    };
    json: (arg0: { ok: boolean }) => void;
  }
) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      // @ts-ignore
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err: any) {
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      return fulfillOrder(session)
        .then(() => res.status(200).json({ ok: true }))
        .catch(err => res.status(400).send(`Webhook Error: ${err.message}`));
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
