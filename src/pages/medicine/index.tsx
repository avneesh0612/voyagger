import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0/";
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import { db } from "../../../firebase";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import Main from "../../components/meds/Main";
import { Medicines } from "../../types/itemTypes";
import { user } from "../../types/userType";

interface HomeProps {
  user: user;
  dbuser: user;
  medicines: [Medicines];
}

const Home: React.FC<HomeProps> = ({ user, dbuser, medicines }) => {
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
      <NextSeo title="Order Medicines | Voyager" />
      <div>
        <Header />
        <Main medicines={medicines} />
      </div>
      <Cart ssruser={user} dbuser={dbuser} />
    </div>
  );
};

export default Home;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context: any) {
    const session = getSession(context.req, context.res);

    const userref = db.collection("users").doc(session?.user.email);

    const userRes = await userref.get();

    const dbuser = {
      id: userRes.id,
      ...userRes.data(),
    };

    const allmedicines = await db
      .collection("products")
      .doc("medicine")
      .collection("medicine")
      .get();

    const medicines = allmedicines.docs.map((salad) => ({
      id: salad.id,
      ...salad.data(),
    }));

    return { props: { dbuser, medicines } };
  },
});
