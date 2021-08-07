import { PlusIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";
import toast from "react-hot-toast";
import Currency from "react-currency-formatter";

interface FoodItemProps {
  image: string;
  name: string;
  price: number;
  active?: boolean;
  id: string;
}

const OfferProduct: React.FC<FoodItemProps> = ({
  name,
  price,
  image,
  active,
  id,
}) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      name,
      price,
      image,
      active,
      id,
    };

    dispatch(addToBasket(product));
    toast.success("Added item to basket", {
      style: {
        borderRadius: "100px",
      },
    });
  };

  return (
    <div className="flex flex-col items-center -mt-2 w-60">
      <div className="z-20 bg-white rounded-full drop-shadow-xl">
        <Image
          height={160}
          width={160}
          objectFit="contain"
          src={image}
          alt="salad"
          className="z-10 object-contain w-40 h-40 rounded-full"
        />
      </div>
      <div
        className={`w-52 p-5 ${
          active ? "bg-gradient-radial text-white" : "bg-white"
        }  pt-20 -mt-16 rounded-3xl`}
      >
        <h3 className="text-lg font-semibold text-center">{name}</h3>
        <div className="flex justify-between">
          <Currency quantity={price} currency="INR" />
          <PlusIcon
            onClick={addItemToBasket}
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
