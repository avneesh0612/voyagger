import Image from "next/image";

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  quant: number;
}

const CartItem: React.FC<CartItemProps> = ({ price, quant, name, image }) => {
  return (
    <div className="flex justify-between px-2 font-semibold text-gray-600">
      <div className="flex items-center space-x-2">
        <Image
          width={64}
          height={75}
          objectFit="contain"
          src={image}
          className="rounded-full drop-shadow-lg"
        />
        <h2>{name}</h2>
      </div>
      <div className="flex items-center space-x-2">
        <h2>{quant}</h2>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default CartItem;
