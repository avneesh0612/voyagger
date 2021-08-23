import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0/";
import moment from "moment";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { db } from "../../firebase";
import Order from "../components/Order";
import Header from "../components/Header";
import { user } from "../types/userType";
import { orderType } from "../types/orderTypes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface OrdersProps {
  user: user;
  orders: [orderType];
}

const Orders: React.FC<OrdersProps> = ({ user }) => {
  const router = useRouter();

  const [orders, setorders] = useState([]);

  useEffect(() => {
    db.collection("users")
      .doc(user.email)
      .collection("orders")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setorders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [user?.email]);

  return (
    <div className="min-h-screen">
      <Header />
      <NextSeo title="Your orders | Voyager" />
      <main className="max-w-screen-lg p-10 mx-auto">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="pb-1 pl-4 mb-2 text-3xl bg-white bg-opacity-25 rounded-lg shadow-xl backdrop-filter backdrop-blur-2xl "
        >
          <h1 className="pb-4 border-b-2 border-gray-700 text-text font-anton">
            Your orders
          </h1>

          {user ? (
            <h2 className="text-xl">
              {orders?.length > 0 ? (
                <>
                  {orders?.length} Order{orders.length > 1 && "s"}
                </>
              ) : (
                <>
                  You don&#39;t have any order yet. Go visit the{" "}
                  <button
                    onClick={() => router.push("/food")}
                    className="underline link hover:no-underline"
                  >
                    Store
                  </button>{" "}
                  to purchase some items.
                </>
              )}
            </h2>
          ) : (
            <h2>Please sign in to see your orders.</h2>
          )}
        </motion.div>

        <div className="pt-2 pb-1 pl-0 mb-2 text-3xl ">
          {orders?.map((order: orderType) => (
            <Order
              key={order.id}
              id={order.id}
              amount={order.amount}
              amountShipping={order.amountShipping}
              images={order.images}
              timestamp={order.timestamp}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Orders;

export const getServerSideProps = withPageAuthRequired({});
