import { useUser } from "@auth0/nextjs-auth0";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { db } from "../../firebase";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Items from "../components/Items";

const Home: React.FC = () => {
  const user = useUser();

  useEffect(() => {
    if (user.user?.email) {
      db.collection("users").doc(user.user?.email).set(
        {
          email: user.user?.email,
          name: user.user?.name,
          photoURL: user.user?.picture,
        },
        { merge: true }
      );
    }
  }, [user.user]);

  return (
    <div>
      <div className="absolute top-[60%] left-[0%] md:left-[20%] md:w-96 md:h-96 w-20 h-20 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob"></div>
      <div className="absolute top-[70%] left-[50%] md:w-96 md:h-96 w-20 h-20 bg-red-400 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[75%] md:top-[60%] left-[10%] md:left-[30%] md:w-96 md:h-96 w-20 h-20 bg-indigo-400 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-4000"></div>
      <NextSeo title="Voyager" description="A short description goes here." />
      <Header />
      <Banner />
      <main className="flex flex-col w-screen mt-5 md:justify-evenly justify-center">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className="font-bold text-4xl font-anton text-text mx-auto text-center"
        >
          What do you want to do?
        </motion.h1>
        <div className="flex flex-wrap w-3/5 mx-auto md:justify-evenly justify-center">
          <motion.div
            initial={{ x: -50, y: -50 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Items
              image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1629081937/ezgif.com-gif-maker_2_f7nqyb.gif"
              text="Order food"
              href="food"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, y: -50 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Items
              image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1629081792/ezgif.com-gif-maker_1_vlnfml.gif"
              text="Send a package"
              href="parcel"
            />
          </motion.div>
        </div>
        <div className="flex flex-wrap w-3/5 mx-auto md:justify-evenly justify-center">
          <motion.div
            initial={{ x: -50, y: 50 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Items
              image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1629081611/ezgif.com-gif-maker_fdr0kr.gif"
              text="Books"
              href="books"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, y: 50 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Items
              image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1627986581/https-3A-2F-2Fbucketeer-e05bbc-unscreen_bcuzxf.gif"
              text="Get medicines"
              href="medicine"
              repeat
            />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
