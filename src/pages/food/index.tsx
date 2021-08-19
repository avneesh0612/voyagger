import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0/";
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import { db } from "../../../firebase";
import Cart from "../../components/Cart";
import Main from "../../components/eats/Main";
import Header from "../../components/Header";
import { Category, Salad } from "../../types/itemTypes";
import { user } from "../../types/userType";

interface HomeProps {
  salads: [Salad];
  categories: [Category];
  user: user;
  dbuser: user;
  category: string;
}

const Home: React.FC<HomeProps> = ({
  salads,
  categories,
  user,
  dbuser,
  category,
}) => {

  useEffect(() => {
    if (user?.email) {
      db.collection("users").doc(user?.email).set(
        {
          email: user?.email,
          name: user?.name,
          photoURL: user?.picture,
        },
        { merge: true }
      );
    }
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen md:flex-row min-w-screen">
      <NextSeo title="Order tasty food | Voyager" />
      <div>
        <Header />
        <Main
          salads={salads}
          categories={categories}
          categoryRoute={category}
        />
      </div>
      <Cart ssruser={user} dbuser={dbuser} />
    </div>
  );
};

export default Home;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context: any) {
    let category = context.query.category;

    if (!category) {
      category = "pizza";
    }

    const session = getSession(context.req, context.res);

    const userref = db.collection("users").doc(session?.user.email);

    const userRes = await userref.get();

    const dbuser = {
      id: userRes.id,
      ...userRes.data(),
    };

    const allsalads = await db
      .collection("products")
      .doc("food")
      .collection(category)
      .orderBy("active", "desc")
      .get();

    const salads = allsalads.docs.map((salad) => ({
      id: salad.id,
      ...salad.data(),
    }));

    const allcategories = await db
      .collection("products")
      .doc("food")
      .collection("categories")
      .get();

    const categories = allcategories.docs.map((salad) => ({
      id: salad.id,
      ...salad.data(),
    }));

    return {
      props: {
        salads,
        categories,
        category,
        dbuser,
      },
    };
  },
});
