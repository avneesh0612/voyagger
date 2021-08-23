import { withPageAuthRequired } from "@auth0/nextjs-auth0/";
import { db } from "../../../firebase";
import Order from "../../components/parcel/Order";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { user } from "../../types/userType";

interface OrderType {
  user: user;
}

interface order {
  pickupaddress: string;
  recipientphone: string;
  recipientsaddress: string;
  zip: string;
  usermail: string;
  username: string;
  weight: string;
  id: string;
}

const Orders: React.FC<OrderType> = ({ user }) => {
  const router = useRouter();

  const [orders, setorders] = useState([]);

  useEffect(() => {
    db.collection("parcels")
      .where("usermail", "==", user?.email)
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
    <div>
      <Header />
      <main className="p-10 mx-auto">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="pb-1 pl-4 mb-2 text-3xl bg-white bg-opacity-25 rounded-lg shadow-xl backdrop-filter backdrop-blur-2xl "
        >
          <h1 className="pb-4 border-b-2 border-gray-700 text-text font-anton">
            Your Parcels
          </h1>

          <h2 className="text-xl">
            {orders?.length > 0 ? (
              <>
                {orders?.length} Order{orders.length > 1 && "s"}
              </>
            ) : (
              <>
                You don&#39;t have any parcels yet. Go visit the{" "}
                <button
                  onClick={() => router.push("/parcel")}
                  className="underline link hover:no-underline"
                >
                  Parcel Page
                </button>{" "}
                to send some parcels.
              </>
            )}
          </h2>
        </motion.div>

        {orders.map((order: order) => (
          <div key={order.id}>
            <Order {...order} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Orders;

export const getServerSideProps = withPageAuthRequired({});
