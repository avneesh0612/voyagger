import { useUser } from "@auth0/nextjs-auth0";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { groupBy } from "lodash";
import Image from "next/image";
import Currency from "react-currency-formatter";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  clearBasket,
  selectItems,
  selectTotal,
} from "../../slices/basketSlice";
import CartItem from "./CartItem";
import React, { useState } from 'react';
const stripePromise = loadStripe(process.env.stripe_public_key!);

interface CartProps {
  ssruser?: {
    name?: string;
    picture?: string;
  };
}

const Cart: React.FC<CartProps> = ({ ssruser }) => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const user = useUser();

  const createCheckOutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: user.user?.email,
      name: user.user?.name,
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
    <div className="absolute right-0 z-10 flex-col hidden w-2/6  bg-white bg-opacity-50  md:flex backdrop-filter backdrop-blur-sm  ring-white">
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
          <h1 className="ml-20 text-xl font-semibold text-left">
            {ssruser?.name}
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
        <div className="overflow-scroll h-72 hidescrollbar">
          <h2
            className={
              items.length === 0 ? "m-4 ml-[29%] text-2xl  font-semibold" : "hidden"
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
        <div className="flex items-center justify-between pb-3 m-10 mt-21 mb-1">
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
        <div className="flex flex-col ml-4 text-md font-semibold">
          <p>Dumb Apartment</p>
          <p>Navi Mumbai, Maharashtra</p>
          <p>India, 400706</p>
        </div>
      </div>
      <button
        role="link"
        onClick={createCheckOutSession}
        className="w-10/12 py-2 mb-5 ml-10 text-white rounded-md  focus:outline-none hover:bg-green-400 focus:ring-2 focus:ring-green-900  cursor-pointer green-gradient"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
