import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0/";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { db } from "../../../firebase";
import Header from "../../components/Header";
import Order from "../../components/parcel/Order";
import { collection, where, getDocs, query } from "firebase/firestore";
import ParcelType from "../../types/ParcelType";

interface Props {
  orders: [ParcelType];
}

const Orders: React.FC<Props> = ({ orders }) => {
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
          <h1 className="pb-4 border-b-2 border-gray-700 text-text font-Poppins">
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

        {orders?.map((order: ParcelType) => (
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
  async getServerSideProps(context) {
    const user = getSession(context.req, context.res);

    const parcelOrdersQuery = query(
      collection(db, "parcels"),
      where("usermail", "==", "user?.user.email")
    );

    const ParcelOrders = await getDocs(parcelOrdersQuery);

    const orders = await Promise.all(
      ParcelOrders.docs.map(async (order) => ({
        id: order.id,
        pickupaddress: order.data().pickupaddress,
        recipientphone: order.data().recipientphone,
        recipientsaddress: order.data().recipientsaddress,
        usermail: order.data().usermail,
        username: order.data().username,
        weight: order.data().weight,
        zip: order.data().zip,
      }))
    );

    return {
      props: {
        orders,
        user,
      },
    };
  },
});
