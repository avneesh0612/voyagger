import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ArrowLeftIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { motion } from "framer-motion";
import { groupBy } from "lodash";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase";
import CartItem from "../components/CartItem";
import { clearBasket, selectItems, selectTotal } from "../slices/basketSlice";
import { user } from "../types/userType";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const stripePromise = loadStripe(process.env.stripe_public_key!);

interface CartProps {
  user?: user;
  dbuser: user;
}

const Cart: React.FC<CartProps> = ({ user, dbuser }) => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [editShow, seteditShow] = useState<Boolean>(false);

  useEffect(() => {
    {
      dbuser?.address && setAddress(dbuser?.address);
    }
  }, [dbuser?.address]);

  const editAddress = async (e: React.FormEvent) => {
    e.preventDefault();

    if (user?.name && address) {
      const userRef = doc(db, `users/${dbuser.email}`);

      await updateDoc(userRef, {
        address: address,
      });
    }
    seteditShow(!editShow);
    toast.success("Address updated!");
  };

  const createCheckOutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: user?.email,
      name: user?.name,
      id: "",
    });

    await stripe?.redirectToCheckout({
      sessionId: checkoutSession?.data?.id,
    });
  };

  const groupedItems = Object.values(groupBy(items, "id"));

  const emptyFoodbasket = () => {
    dispatch(clearBasket());
    toast.error("Emptied basket", {
      style: {
        borderRadius: "100px",
      },
    });
  };

  return (
    <div className="absolute right-0 z-10 flex-col w-full bg-white bg-opacity-50 md:w-2/6 md:flex backdrop-filter backdrop-blur-sm ring-white">
      <NextSeo title="Your cart" />
      <div>
        <div className="flex items-center p-8 bg-white bg-opacity-60 rounded-b-3xl ring-1 ring-white">
          <Link href="/food">
            <a>
              <ArrowLeftIcon className="w-12 h-12 p-3 m-2 bg-white rounded-full cursor-pointer backdrop-filter backdrop-blur-2xl bg-opacity-80" />
            </a>
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
            onClick={emptyFoodbasket}
          >
            Empty cart
          </h2>
        </div>
        <div className="overflow-scroll h-80 hidescrollbar">
          <h2
            className={!items ? "m-4 mt-0 text-2xl font-semibold" : "hidden "}
          >
            Your basket is empty
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
        <div className="flex items-center justify-between pb-3 m-10 mb-1 mt-21">
          <h2 className="text-2xl font-Poppins">Total</h2>
          <h2 className="text-xl font-semibold">
            <Currency currency="INR" quantity={total} />
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-5 mt-auto mb-1 border-t-2 border-white">
        <h2 className="text-2xl font-Poppins">Address</h2>
        <h2
          className="text-xl cursor-pointer font-Poppins"
          onClick={() => seteditShow(!editShow)}
        >
          Edit
        </h2>
      </div>
      <div className="flex items-center m-10 mt-2 mb-2">
        <LocationMarkerIcon className="w-8 h-8 mt-2 text-redmarker" />
        <div className="flex flex-col ml-4 font-semibold text-md">
          {editShow ? (
            <form action="" onSubmit={editAddress}>
              <input
                className="flex flex-col ml-4 font-semibold text-black placeholder-gray-600 text-md focus:outline-none"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Please enter your Address"
              />
            </form>
          ) : (
            <div className="flex flex-col ml-4 font-semibold text-md">
              {dbuser.address ? address : "Please add your address"}
            </div>
          )}
        </div>
      </div>
      <motion.button
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        role="link"
        onClick={createCheckOutSession}
        className="w-10/12 py-2 mb-5 ml-10 text-white rounded-full cursor-pointer green-gradient focus:outline-none"
      >
        Checkout
      </motion.button>
    </div>
  );
};

export default Cart;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context: any) {
    const session = getSession(context.req, context.res);

    const userRef = doc(db, `users/${session?.user.email}`);

    const userRes = await getDoc(userRef);

    const dbuser = {
      id: userRes.id,
      ...userRes.data(),
    };

    return {
      props: {
        dbuser,
      },
    };
  },
});
