import { db } from "../../firebase";
import Header from "../../components/Header";
import Order from "../../components/eats/Order";
import moment from "moment";
import { useRouter } from "next/router";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/";
import { useEffect, useState } from "react";

interface OrdersProps {
  user: any;
}

const Orders: React.FC<OrdersProps> = ({ user }) => {
  const router = useRouter();
  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    db.collection("users")
      .doc(user.email)
      .collection("orders")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setOrders(
          snapshot.docs.map((order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
          }))
        )
      );
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-screen-lg p-10 mx-auto">
        <div className="pb-1 pl-4 mb-2 text-3xl bg-white bg-opacity-25 rounded-lg shadow-xl backdrop-filter backdrop-blur-2xl ">
          <h1 className="pb-4 border-b-2 border-gray-700">Your orders</h1>

          {user ? (
            <h2 className="text-xl">
              {orders?.length > 0 ? (
                <>
                  {orders?.length} Order{orders.length > 1 && "s"}
                </>
              ) : (
                <>
                  You don't have any order yet. Go visit the{" "}
                  <button
                    onClick={() => router.push("/")}
                    className="underline link hover:no-underline"
                  >
                    Homepage Store
                  </button>{" "}
                  to purchase some items.
                </>
              )}
            </h2>
          ) : (
            <h2>Please sign in to see your orders.</h2>
          )}
        </div>

        <div className="pt-2 pb-1 pl-0 mb-2 text-3xl bg-white bg-opacity-25 rounded-lg shadow-xl backdrop-filter backdrop-blur-2xl ">
          {orders?.map((order: any) => (
            <Order
              key={order.id}
              id={order.id}
              amount={order.amount}
              amountShipping={order.amountShipping}
              images={order.images}
              timestamp={order.timestamp}
              items={order.items}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Orders;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: any) {
    const user = ctx?.session;
    return {
      props: {
        user,
      },
    };
  },
});
