import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0/";
import { db } from "../../../firebase";
import Order from "../../components/parcel/Order";
import Header from "../../components/Header";

interface OrderType {
  orders: [order];
}

interface order {
  pickupaddress: string;
  recipeintphone: string;
  recipeintsaddress: string;
  zip: string;
  usermail: string;
  username: string;
  weight: string;
  id: string;
}

const orders: React.FC<OrderType> = ({ orders }) => {
  return (
    <div>
      <Header />
      {orders.map((order: order) => (
        <div key={order.id}>
          <Order {...order} />
        </div>
      ))}
    </div>
  );
};

export default orders;

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
        recipeintphone: order.data().recipeintphone,
        usermail: order.data().usermail,
        username: order.data().username,
        weight: order.data().weight,
        recipeintsaddress: order.data().recipeintsaddress,
      }))
    );

    return {
      props: {
        orders,
      },
    };
  },
});
