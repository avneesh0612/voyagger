import { groupBy } from "lodash";
import path from "path";
import stripelib from "stripe";

// @ts-ignore: ENV vars would be present
const stripe = new stripelib.Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
  typescript: true,
});

const handler = async (
  req: { body: { items: any; email: string; name: string } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { id: any }): void; new (): any };
    };
  }
) => {
  const { items, email, name } = req.body;

  const groupedItems = Object.values(groupBy(items, "id"));

  const transformedItems = groupedItems.map(group => ({
    description: group[0].description,
    quantity: group.length,
    price_data: {
      currency: "inr",
      unit_amount: group[0].price * 100,
      product_data: {
        name: group[0].name,
        images: [group[0].image],
      },
    },
  }));

  const groupedImages = Object.values(
    groupBy(items.map((item: { image: string }) => path.basename(item.image)))
  ).map(group => [group.length, group[0]]);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: [
      // @ts-ignore: ENV vars would be present
      process.env.HOST === "http://localhost:3000"
        ? process.env.STRIPE_SHIPPING_RATE
        : "shr_1JLoNhSFCeAarzuF943bcl3G",
    ],
    shipping_address_collection: {
      allowed_countries: [
        "GB",
        "AF",
        "QA",
        "RU",
        "AO",
        "US",
        "FR",
        "IN",
        "PL",
        "RS",
        "SG",
        "RO",
        "PT",
        "PH",
        "PK",
        "NP",
        "MN",
        "MX",
        "LK",
        "KR",
        "JP",
        "IL",
        "ID",
        "GR",
        "IT",
        "ES",
        "EG",
        "DE",
        "CN",
        "BR",
        "BD",
        "AU",
        "AE",
      ],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/cart`,
    metadata: {
      email,
      name,
      images: JSON.stringify(groupedImages),
    },
  });

  res.status(200).json({ id: session.id });
};

export default handler;
