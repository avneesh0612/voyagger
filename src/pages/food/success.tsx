import { CheckCircleIcon } from "@heroicons/react/solid";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import { clearBasket } from "../../slices/basketSlice";

const Success: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearBasket());
  }, [dispatch]);

  return (
    <div className="h-screen">
      <Header />
      <NextSeo title="Your order has been confirmed" />
      <main className="max-w-screen-lg mx-auto">
        <div className="relative z-30 flex flex-col p-10 m-5 bg-white bg-opacity-25 shadow-xl backdrop-filter backdrop-blur-2xl rounded-xl cursor-ponter">
          <div className="flex items-center mb-5 space-x-2">
            <CheckCircleIcon className="h-10 text-green-500" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We&apos;ll send a confirmation once
            item has shipped, if you would like to check the status of your
            order(s) please press the link below.
          </p>
          <button
            onClick={() => router.push("/food/orders")}
            className="mt-8 shadow-xl text-[#023047] bg-white bg-opacity-25 w-60 text-center mx-auto rounded-lg p-2 font-semibold  backdrop-filter backdrop-blur-xl focus:outline-none"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
};

export default Success;
