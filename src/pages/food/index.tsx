import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0/";
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import { db } from "../../../firebase";
import Cart from "../../components/Cart";
import Main from "../../components/eats/Main";
import Header from "../../components/Header";
import { Category, Salad } from "../../types/itemTypes";
import { user } from "../../types/userType";
import {
  collection,
  query,
  getDoc,
  getDocs,
  updateDoc,
  doc,
  orderBy,
} from "firebase/firestore";

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
      <NextSeo title="Order tasty food | Voyagger" />
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

    const userref = doc(db, `users/${session?.user.email}`);

    const userRes = await getDoc(userref);

    const dbuser = {
      id: userRes.id,
      ...userRes.data(),
    };

    const saladsRef = collection(db, `products/food/${category}`);

    const saladsQuery = query(saladsRef, orderBy("active", "desc"));

    const allsalads = await getDocs(saladsQuery);

    const salads = allsalads.docs.map((salad) => ({
      id: salad.id,
      ...salad.data(),
    }));

    const categoriesRef = collection(db, `products/food/categories`);

    const allcategories = await getDocs(categoriesRef);

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
