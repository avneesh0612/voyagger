import { PlusIcon } from "@heroicons/react/solid";
import Image from "next/image";

interface FoodItemProps {
  image: string;
  name: string;
  price: number;
  active?: boolean;
}

const OfferProduct: React.FC<FoodItemProps> = ({
  name,
  price,
  image,
  active,
}) => {
  return (
    <div className="flex flex-col items-center -mt-2 w-60">
      <Image
        height={180}
        width={160}
        objectFit="contain"
        src={image}
        alt="salad"
        className="z-10 object-contain w-40 h-40 rounded-full drop-shadow-xl"
      />
      <div
        className={`w-52 p-5 ${
          active ? "bg-gradient-radial text-white" : "bg-white"
        }  pt-20 -mt-10 rounded-3xl`}
      >
        <h3 className="text-lg font-semibold text-center">{name}</h3>
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
};

export default OfferProduct;
