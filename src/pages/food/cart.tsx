import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ArrowLeftIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { groupBy } from "lodash";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Currency from "react-currency-formatter";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/eats/CartItem";
import {
  clearBasket,
  selectItems,
  selectTotal
} from "../../slices/basketSlice";
const stripePromise = loadStripe(process.env.stripe_public_key!);

interface CartProps {
  user?: {
    name?: string;
    picture?: string;
    email?: string;
  };
}
const Cart: React.FC<CartProps> = ({ user }) => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  const createCheckOutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: user?.email,
      name: user?.name,
    });

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
  };

  const groupedItems = Object.values(groupBy(items, "id"));

  function emptyBasket() {
    dispatch(clearBasket());
    toast.error("Emptied basket", {
      style: {
        borderRadius: "100px",
      },
    });
  }

  return (
    <div className="absolute right-0 z-10 flex flex-col w-full h-full bg-white bg-opacity-50 rounded-br-none md:w-2/6 backdrop-filter backdrop-blur-sm rounded-3xl ring-1 ring-white">
      <NextSeo title="Your cart" />
      <div className="h-full">
        <div className="flex items-center p-8 bg-white bg-opacity-60 rounded-l-3xl ring-1 ring-white">
          <Link href="/food" passHref>
            <ArrowLeftIcon className="w-12 h-12 p-3 m-2 bg-white rounded-full cursor-pointer backdrop-filter backdrop-blur-2xl bg-opacity-80" />
          </Link>
          {user?.picture && (
            <Image
              width={64}
              height={64}
              objectFit="contain"
              src={user?.picture}
              className="object-contain w-16 h-16 rounded-full"
              alt="avatar"
            />
          )}
          <h1 className="ml-20 text-xl font-semibold text-left">
            {user?.name}
          </h1>
        </div>
        <div className="flex items-center justify-between pb-2 m-4 mt-3 mb-0 border-b-4 border-white">
          <h2 className="text-2xl font-semibold">My order</h2>
          <h2
            className="text-xl font-semibold cursor-pointer"
            onClick={emptyBasket}
          >
            Empty cart
          </h2>
        </div>
        <div className="overflow-scroll h-80 hidescrollbar">
          <h2
            className={
              items.length === 0 ? "m-4 mt-0 text-2xl font-semibold" : "hidden"
            }
          >
            Your Basket is empty
          </h2>
          {groupedItems.map((group, i) => (
            <div key={group[0].id}>
              <CartItem
                id={group[0].id}
                name={group[0].name}
                price={group[0].price}
                image={group[0].image}
                quantity={group.length}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pb-3 m-10 mb-2">
          <h2 className="text-2xl font-semibold">Total</h2>
          <h2 className="text-xl font-semibold">
            <Currency currency="INR" quantity={total} />
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-5 mt-auto mb-1 border-t-2 border-white">
        <h2 className="text-2xl font-semibold">Address</h2>
        <h2 className="text-xl font-semibold">Edit</h2>
      </div>
      <div className="flex m-10 mt-2 mb-2">
        <LocationMarkerIcon className="text-[#F24A51] mt-2 h-8 w-8" />
        <div className="flex flex-col ml-4 text-lg font-semibold">
          <p>Po Box 2192</p>
          <p>West New York, New</p>
          <p>Jersey(NJ), 07093</p>
        </div>
      </div>
      <button
        role="link"
        onClick={createCheckOutSession}
        className="w-10/12 py-2 mb-5 ml-10 text-white rounded-full cursor-pointer green-gradient"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;

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
