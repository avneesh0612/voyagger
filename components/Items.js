import { motion } from "framer-motion";
import Link from "next/link";

function Items({ image, text, repeat, href }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{
          scale: [1, 1.1, 1.05],
          zIndex: 1,
          transition: {
            duration: 1,
          },
        }}
        className="bg-[#ffb1a3] !rounded-t-lg w-96 h-52 my-5"
      >
        <div
          style={{ background: `url(${image})` }}
          className={`h-48 !rounded-t-lg justify-items-end !bg-contain flex text-center w-96 !bg-top orange-shadow cursor-pointer hover:underline ${
            !repeat && "!bg-no-repeat"
          }`}
        ></div>
        <h1 className="text-base text-center bg-[#fec5bb] !mt-auto font-medium w-full rounded-b-lg pl-2 font-poppins py-1">
          {text}
        </h1>
      </motion.div>
    </Link>
  );
}

export default Items;
