import { useRouter } from "next/dist/client/router";
import Image from "next/image";

interface FoodItemProps {
  image: string;
  name: string;
}

const FoodItem: React.FC<FoodItemProps> = ({ image, name }) => {
  const router = useRouter();
  return (
    <div
      className="
       backdrop-filter flex bg-white flex-col bg-opacity-40 ring-1 cursor-pointer ml-1 mt-1 ring-white items-center justify-center min-w-[10rem] h-40 backdrop-blur-2xl bg-gradient-to-br p-3 rounded-full"
      onClick={() => router.push(`/food/?category=${name.toLowerCase()}`)}
    >
      <Image
        objectFit="contain"
        width={112}
        height={112}
        src={image}
        className="w-28 h-28"
      />
      <h2 className="mb-2 capitalize">{name}</h2>
    </div>
  );
};

export default FoodItem;
