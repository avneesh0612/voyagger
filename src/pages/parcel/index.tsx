import { withPageAuthRequired } from "@auth0/nextjs-auth0/";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../../../firebase";
import Header from "../../components/Header";
import { user } from "../../types/userType";
import { collection, addDoc } from "firebase/firestore";

interface parcelProps {
  user: user;
}

const Index: React.FC<parcelProps> = ({ user }) => {
  const [pickupaddress, setpickupaddress] = useState("");
  const [recipientsaddress, setrecipientsaddress] = useState("");
  const [recipientphone, setrecipientphone] = useState("");
  const [zip, setzip] = useState("");
  const [weight, setWeight] = useState("Under 1/2 kg");
  const router = useRouter();

  const pattern = new RegExp(/^[0-9\b]+$/);

  const addParcel = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!pickupaddress) return toast.error("Please add your pickup address");

    if (!recipientsaddress)
      return toast.error("Please add your recipeinet address");

    if (!zip) return toast.error("Please add the zip code");

    if (!recipientphone)
      return toast.error("Please add recipient's phone number");
    if (!recipientphone)
      return toast.error("Please add recipient's phone number");

    if (!pattern.test(recipientphone)) {
      return toast.error("Please enter a valid phone number");
    } else if (recipientphone.length != 10) {
      return toast.error("Please enter a valid phone number");
    }

    await addDoc(collection(db, "parcels"), {
      usermail: user.email,
      username: user.name,
      pickupaddress: pickupaddress,
      recipientsaddress: recipientsaddress,
      zip: zip,
      recipientphone: recipientphone,
      weight: weight,
    });

    setpickupaddress("");
    setrecipientsaddress("");
    setWeight("");
    setrecipientphone("");
    toast.success("parcel added successfully");
    router.push("/parcel/orders");
  };

  return (
    <div>
      <Header />
      <form className="flex flex-col items-center space-y-5 justify-center  md:w-1/4 w-80 mx-auto">
        <div className="flex flex-col justify-center w-full">
          <label className="text-left font-medium text-xl ">Your address</label>
          <input
            type="text"
            value={pickupaddress}
            onChange={(e) => setpickupaddress(e.target.value)}
            className="w-full rounded-lg bg-white/50 focus:outline-none pl-3 h-10 "
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <label className="text-left font-medium text-xl ">
            recipient’s address
          </label>
          <input
            type="text"
            value={recipientsaddress}
            onChange={(e) => setrecipientsaddress(e.target.value)}
            className="w-full rounded-lg bg-white/50 focus:outline-none pl-3 h-10 "
          />
        </div>

        <div className="flex flex-col justify-center w-full">
          <label className="text-left font-medium text-xl ">Zip code</label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setzip(e.target.value)}
            className="w-full rounded-lg bg-white/50 focus:outline-none pl-3 h-10 "
          />
        </div>

        <div className="flex flex-col justify-center w-full">
          <label className="text-left font-medium text-xl ">
            Recipient&apos;s phone
          </label>
          <input
            type="phone"
            value={recipientphone}
            onChange={(e) => setrecipientphone(e.target.value)}
            className="w-full rounded-lg bg-white/50 focus:outline-none pl-3 h-10 "
          />
        </div>

        <div className="flex flex-col justify-center w-full">
          <label className="text-left font-medium text-xl ">
            Package weight
          </label>
          <select
            className="w-full rounded-lg bg-white/50 focus:outline-none pl-3 h-10 "
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          >
            <option>Under 1/2 kg</option>
            <option>Under 1kg</option>
            <option>Under 5kg</option>
            <option>Under 10kg</option>
          </select>
        </div>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={addParcel}
          className="px-8 text-center py-3 font-medium text-lg ml-auto rounded-full bg-peachmedium focus:outline-none"
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default Index;

export const getServerSideProps = withPageAuthRequired();
