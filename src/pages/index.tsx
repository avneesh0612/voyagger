import { useUser } from "@auth0/nextjs-auth0";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { db } from "../../firebase";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Items from "../components/Items";
import Image from "next/image";

const Home: React.FC = () => {
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (user?.email) {
      db.collection("users").doc(user?.email).set(
        {
          email: user?.email,
          name: user?.name,
          photoURL: user?.picture,
        },
        { merge: true }
      );
    }
  });

  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <motion.div initial={{ x: -500 }} animate={{ x: 0 }}>
            <Image
              width={200}
              height={200}
              objectFit="contain"
              src="/voyager.svg"
              className="cursor-pointer"
              alt="voyager"
            />
          </motion.div>
        </div>
      ) : (
        <div>
          <div className="top-[60%] left-[0%] hidden md:absolute md:left-[20%] md:w-96 md:h-96 w-20 h-20 md:flex bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob"></div>
          <div className="absolute top-[70%] left-[50%] hidden md:flex md:absolute md:w-96 md:h-96 w-20 h-20 bg-red-400 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-2000"></div>
          <div className="absolute hidden md:absolute top-[75%] md:top-[60%] left-[10%] md:left-[30%] md:w-96 md:flex md:h-96 w-20 h-20 bg-indigo-400 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-4000"></div>
          <NextSeo
            title="Voyager"
            description="A short description goes here."
          />
          <Header />
          <Banner />
          <main className="flex flex-col justify-center w-screen mt-5 md:justify-evenly">
            <motion.h1
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5 }}
              className="mx-auto text-4xl font-bold text-center font-anton text-text"
            >
              What do you want to do?
            </motion.h1>
            <div className="flex flex-wrap justify-center w-3/5 mx-auto md:justify-evenly">
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
            <div className="flex flex-wrap justify-center w-3/5 mx-auto md:justify-evenly">
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
      )}
    </>
  );
};

export default Home;
