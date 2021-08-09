import * as admin from "firebase-admin";
import { buffer } from "micro";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.send_grid_api);
const serviceAccount = require("../../../permissions");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;
const fulfillOrder = async (session) => {
  console.log(session);

  const msg = {
    to: session.metadata.email,
    from: "avneeshagarwal0612@gmail.com",
    subject: "Voyager order Reciept",
    text: "Voyager order Reciept",
    html: `<p> Adress: ${
      (session.shipping.address.country,
      session.shipping.address.state,
      city,
      "ZIP:",
      session.shipping.address.postal_code)
    }
    </p>
    Name:${session.shipping.name}
    <img src=${session.metadata.images[0]}/>
    amount: ${session.amount_total / 100},
    amount_shipping: ${session.total_details.amount_shipping / 100}
    `,
  };

  return sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    })
    .then(
      app
        .firestore()
        .collection("users")
        .doc(session.metadata.email)
        .collection("orders")
        .doc(session.id)
        .set({
          amount: session.amount_total / 100,
          amount_shipping: session.total_details.amount_shipping / 100,
          images: JSON.parse(session.metadata.images),
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        })
    );
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
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default handler;
