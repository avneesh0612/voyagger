import { motion } from "framer-motion";
import Link from "next/link";

interface FoodItemProps {
  image: string;
  text: string;
  href: string;
  repeat?: boolean;
}

const Items: React.FC<FoodItemProps> = ({ image, text, repeat, href }) => {
  return (
    <Link href={href}>
      <a>
        <motion.div
          whileHover={{
            scale: [1, 1.1, 1.05],
            zIndex: 1,
            transition: {
              duration: 1,
            },
          }}
          className="bg-peachdark/75 opacity-80 !rounded-t-lg md:w-96 h-52 my-5 w-[90vw] mr-auto hover:underline"
        >
          <div
            style={{ background: `url(${image})` }}
            className={`h-48 !rounded-t-lg justify-items-end !bg-contain flex text-center w-[90vw]  md:w-96 !bg-top orange-shadow cursor-pointer hover:underline ${
              !repeat && "!bg-no-repeat"
            }`}
          ></div>
          <p className="text-base font-extrabold cursor-pointer text-text text-center bg-peachmedium !mt-auto w-full rounded-b-lg pl-2 py-1">
            {text}
          </p>
        </motion.div>
      </a>
    </Link>
  );
};

export default Items;
