import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import { clearBasket } from "../../slices/basketSlice";

function success() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearBasket(null));
  }, []);

  return (
    <div className="bg-[#10acd3] dark:bg-gray-800 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="relative z-30 flex flex-col p-10 m-5 bg-white bg-opacity-25 shadow-xl backdrop-filter backdrop-blur-2xl dark:text-white dark:bg-opacity-10 dark:shadow-none rounded-xl cursor-ponter">
          <div className="flex items-center mb-5 space-x-2">
            <CheckCircleIcon className="h-10 text-green-500" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once item
            has shipped, if you would like to check the status of your order(s)
            please press the link below.
          </p>
          <button onClick={() => router.push("/food/orders")} className="mt-8 btn">
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;
