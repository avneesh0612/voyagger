import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0/";
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import { db } from "../../../firebase";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import Main from "../../components/meds/Main";
import { Medicines } from "../../types/itemTypes";
import { user } from "../../types/userType";
import {
  doc,
  updateDoc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

interface HomeProps {
  user: user;
  dbuser: user;
  medicines: [Medicines];
}

const Home: React.FC<HomeProps> = ({ user, dbuser, medicines }) => {
  useEffect(() => {
    if (user?.email) {
      const updateUsers = async () => {
        const userRef = doc(db, `users/${user?.email}`);

        await updateDoc(userRef, {
          email: user?.email,
          name: user?.name,
          photoURL: user?.picture,
        });
      };

      updateUsers();
    }
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen md:flex-row min-w-screen">
      <NextSeo title="Order Medicines | Voyagger" />
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

    const userref = doc(db, `users/${session?.user.email}`);

    const userRes = await getDoc(userref);

    const dbuser = {
      id: userRes.id,
      ...userRes.data(),
    };

    const medicinesRef = collection(db, `products/medicine/medicine`);

    const allmedicines = await getDocs(medicinesRef);

    const medicines = allmedicines.docs.map((medicine) => ({
      id: medicine.id,
      ...medicine.data(),
    }));

    return { props: { dbuser, medicines } };
  },
});
