import { MinusSmIcon, PlusIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}

const CartItem: React.FC<CartItemProps> = ({
  price,
  quantity,
  name,
  image,
  id,
}) => {
  const dispatch = useDispatch();
  const removeItemFromFoodbasket = () => {
    dispatch(removeFromBasket({ id }));
    toast.error("Removed item from basket", {
      style: {
        borderRadius: "100px",
      },
    });
  };
  const addItemToFoodbasket = () => {
    const product = {
      name,
      price,
      image,
      id,
    };

    dispatch(addToBasket(product));
    toast.success("Increased item", {
      style: {
        borderRadius: "100px",
      },
    });
  };

  const total = price * quantity;

  return (
    <div className="flex justify-between sm:px-2 px-1 sm:my-2 my-1 text-sm sm:text-base font-semibold text-gray-600">
      <div className="flex items-center space-x-1 sm:space-x-2">
        <div className="relative sm:w-16 sm:h-16 w-12 h-12">
          <Image
            layout="fill"
            objectFit="contain"
            src={image}
            alt="salad"
            className="z-10 object-contain w-40 h-40 bg-white rounded-full"
          />
        </div>
        <h2 className="sm:w-40 break-words w-20">{name}</h2>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={removeItemFromFoodbasket}>
          <MinusSmIcon className="h-5 text-prussianblue" />
        </button>
        <p className="text-prussianblue">
          {" "}
          {quantity} × <Currency quantity={price} currency="INR" /> = {"  "}
        </p>
        <span className="sm:font-bold ml-1 text-prussianblue">
          <Currency quantity={total} currency="INR" />
        </span>
      </div>
      <button onClick={addItemToFoodbasket}>
        <PlusIcon className="h-5 text-prussianblue" />
      </button>
    </div>
  );
};

export default CartItem;
