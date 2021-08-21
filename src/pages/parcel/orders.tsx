import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0/";
import { db } from "../../../firebase";
import Order from "../../components/parcel/Order";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface OrderType {
  orders: [order];
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

const Orders: React.FC<OrderType> = ({ orders }) => {
  const router = useRouter();

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

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context: any) {
    const session = getSession(context.req, context.res);

    const allorders = await db
      .collection("parcels")
      .where("usermail", "==", session?.user.email)
      .get();

    const orders = await Promise.all(
      allorders.docs.map(async (order) => ({
        id: order.id,
        pickupaddress: order.data().pickupaddress,
        zip: order.data().zip,
        recipientphone: order.data().recipientphone,
        usermail: order.data().usermail,
        username: order.data().username,
        weight: order.data().weight,
        recipientsaddress: order.data().recipientsaddress,
      }))
    );

    return {
      props: {
        orders,
      },
    };
  },
});
