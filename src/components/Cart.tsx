import { useUser } from "@auth0/nextjs-auth0";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { motion } from "framer-motion";
import { groupBy } from "lodash";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase";
import { clearBasket, selectItems, selectTotal } from "../slices/basketSlice";
import { user } from "../types/userType";
import CartItem from "./CartItem";
import { doc, updateDoc } from "firebase/firestore";

const stripePromise = loadStripe(process.env.stripe_public_key!);

interface CartProps {
  ssruser?: user;
  dbuser: user;
}

const Cart: React.FC<CartProps> = ({ ssruser, dbuser }) => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const user = useUser();
  const [address, setAddress] = useState("");
  const [editShow, seteditShow] = useState<Boolean>(false);

  useEffect(() => {
    {
      dbuser?.address && setAddress(dbuser?.address);
    }
  }, [dbuser?.address]);

  const editAddress = async (e: React.FormEvent) => {
    e.preventDefault();

    if (user.user && address) {
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
      email: user.user?.email,
      name: user.user?.name,
      id: "",
    });

    await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data?.id,
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
    <div className="absolute right-0 z-10 flex-col hidden w-2/6 h-screen bg-white bg-opacity-50 md:flex backdrop-filter backdrop-blur-sm ring-white">
      <div>
        <div className="flex items-center p-8 bg-white bg-opacity-60 rounded-b-3xl ring-1 ring-white">
          {ssruser?.picture && (
            <Image
              width={64}
              height={64}
              objectFit="contain"
              src={ssruser.picture}
              className="object-contain w-16 h-16 rounded-full"
              alt="avatar"
            />
          )}
          <h1 className="ml-20 text-xl font-semibold text-left text-text">
            {ssruser?.name}
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
        <div className="overflow-scroll h-72 hidescrollbar">
          <h2
            className={
              !items ? "m-4 ml-[29%] text-2xl  font-semibold " : "hidden "
            }
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
        <div className="flex items-center justify-between m-10 mt-20 mb-2">
          <h2 className="text-2xl font-Poppins">Total</h2>
          <h2 className="text-xl font-semibold">
            <Currency currency="INR" quantity={total} />
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-10 mt-auto mb-1 border-t-2 border-white">
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
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Please enter your Address"
              />
            </form>
          ) : (
            <div className="flex flex-col ml-4 font-semibold text-md">
              {address ? address : "Please add your address"}
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
        className="w-10/12 py-2 mb-5 ml-10 text-white rounded-md cursor-pointer focus:outline-none hover:bg-green-400 green-gradient"
      >
        Checkout
      </motion.button>
    </div>
  );
};

export default Cart;
