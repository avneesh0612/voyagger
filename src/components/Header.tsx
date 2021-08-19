import { useUser } from "@auth0/nextjs-auth0";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const user = useUser();
  const items = useSelector(selectItems);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-10 text-text"
    >
      <Link href="/">
        <a>
          <Image
            width={100}
            height={100}
            objectFit="contain"
            src="/voyager.svg"
            className="cursor-pointer"
            alt="voyager"
          />
        </a>
      </Link>
      <div className="space-x-4 flex">
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          className="space-x-6 text-xl font-medium hover:underline"
        >
          <Link href="/orders">
            <a>My orders</a>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          className="space-x-6 text-xl  font-medium hover:underline"
        >
          <Link href="/parcel/orders">
            <a>Parcel tracking</a>
          </Link>
        </motion.div>
      </div>
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        className="text-xl font-medium hover:underline mr-4"
      >
        {user.user && <Link href="/api/auth/logout">Sign out</Link>}

        {!user?.user && <Link href="/api/auth/login">Sign in</Link>}
      </motion.div>
      <Link href="/cart" passHref>
        <div className="md:hidden inline-flex absolute top-3 right-0">
          <ShoppingBagIcon className="w-12 h-12 p-3 mr-3 bg-white rounded-full md:hidden backdrop-filter backdrop-blur-2xl bg-opacity-40" />
          <h2 className="backdrop-filter shadow-xl  bg-white bg-opacity-75 mr-2 text- font-semibold cursor-pointer md:hidden inline-flex absolute top-1 right-1 rounded-full  px-[8px]">
            {items.length}
          </h2>
        </div>
      </Link>
    </motion.header>
  );
};

export default Header;
