import { PlusIcon } from "@heroicons/react/solid";
import Image from "next/image";

function OfferProduct({ name, price, image, active }) {
  return (
    <div className="w-60 flex flex-col items-center -mt-2">
      <Image
        height={180}
        width={160}
        objectFit="contain"
        src={image}
        alt="salad"
        className="rounded-full object-contain  drop-shadow-xl h-40 w-40 z-10"
      />
      <div
        className={`w-52 p-5 ${
          active ? "bg-gradient-radial text-white" : "bg-white"
        }  pt-20 -mt-10 rounded-3xl`}
      >
        <h3 className="text-center text-lg font-semibold">{name}</h3>
        <div className="flex justify-between">
          <h2>${price}</h2>
          <PlusIcon
            className={`h-8 w-8 rounded-full cursor-pointer ${
              active ? "bg-white text-black" : "green-gradient text-white"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default OfferProduct;
