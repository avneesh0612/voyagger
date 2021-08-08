import Image from "next/image";
import { addToBasket, removeFromBasket } from "../../slices/basketSlice";
import { useDispatch } from "react-redux";
import Currency from "react-currency-formatter";
import { MinusSmIcon, PlusIcon } from "@heroicons/react/solid";
import toast from "react-hot-toast";

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
  function removeItemFromBasket() {
    dispatch(removeFromBasket({ id }));
    toast.error("Removed item from basket", {
      style: {
        borderRadius: "100px",
      },
    });
  }
  function addItemToBasket() {
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
  }

  const total = price * quantity;

  return (
    <div className="flex justify-between px-2 my-2 font-semibold text-gray-600">
      <div className="flex items-center space-x-2">
        <Image
          height={64}
          width={64}
          objectFit="contain"
          src={image}
          alt="salad"
          className="z-10 object-contain w-40 h-40 bg-white rounded-full"
        />
        <h2>{name}</h2>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={removeItemFromBasket}>
          <MinusSmIcon className="h-5 text-[#023047]" />
        </button>
        <p className="text-[#023047]">
          {" "}
          {quantity} × <Currency quantity={price} currency="INR" /> = {"  "}
        </p>
        <span className="font-bold ml-1 text-[#023047]">
          <Currency quantity={total} currency="INR" />
        </span>
      </div>
      <button onClick={addItemToBasket}>
        <PlusIcon className="h-5 text-[#023047]" />
      </button>
    </div>
  );
};

export default CartItem;
