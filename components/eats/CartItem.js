import Image from "next/image";

function CartItem({ price, quant, name, image }) {
  return (
    <div className="flex justify-between font-semibold text-gray-600 px-2">
      <div className="flex items-center space-x-2">
        <Image
          width={64}
          height={75}
          objectFit="contain"
          src={image}
          className="drop-shadow-lg rounded-full"
        />
        <h2>{name}</h2>
      </div>
      <div className="flex items-center space-x-2">
        <h2>{quant}</h2>
        <h2>${price}</h2>
      </div>
    </div>
  );
}

export default CartItem;
