import Image from "next/image";

function FoodItem({ image, name, active }) {
  return (
    <div
      className={`${
        active
          ? "bg-white bg-opacity-60"
          : "from-glasswhite via-glasswhite  to-lightorange"
      } backdrop-filter flex flex-col ring-1 ml-1 mt-1 ring-white items-center justify-center min-w-[10rem] h-40 backdrop-blur-2xl bg-gradient-to-br  p-3 rounded-full`}
    >
      <Image
        objectFit="contain"
        width={112}
        height={112}
        src={image}
        className="w-28 h-28 object-contain"
      />
      <h2 className="mb-2 ">{name}</h2>
    </div>
  );
}

export default FoodItem;
