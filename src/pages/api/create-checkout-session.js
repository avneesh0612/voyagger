import { groupBy } from "lodash";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
  const { items, email, name } = req.body;

  const groupedItems = Object.values(groupBy(items, "id"));

  const transformedItems = groupedItems.map((group) => ({
    description: "description",
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

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1JLoNhSFCeAarzuF943bcl3G"],
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/food/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      name,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};

export default handler;
