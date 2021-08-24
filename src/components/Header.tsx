import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0";
import { selectItems } from "../slices/basketSlice";
import { ShoppingBagIcon } from "@heroicons/react/solid";

function Header() {
  const user = useUser();
  const items = useSelector(selectItems);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="flex items-center my-2 justify-between px-10 text-text">
        <Link href="/">
          <a className="hidden sm:inline-flex">
            <Image
              width={100}
              height={100}
              objectFit="contain"
              src="/Voyagger.svg"
              className="cursor-pointer"
              alt="Voyagger"
            />
          </a>
        </Link>
        <div className="hidden sm:flex items-center space-x-4">
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
            className="space-x-6 text-xl font-medium hover:underline"
          >
            <Link href="/parcel/orders">
              <a>Parcel tracking</a>
            </Link>
          </motion.div>
        </div>
        <div className="items-center hidden sm:flex">
          <div className="flex items-center mt-2 ml-4 space-x-8 justify-evenly">
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
          </div>
        </div>
      </header>

      <div className="flex justify-evenly items-center">
        <div className="sm:hidden">
          <Link href="/">
            <a>
              <Image
                width={100}
                height={100}
                objectFit="contain"
                src="/Voyagger.svg"
                className="cursor-pointer"
                alt="Voyagger"
              />
            </a>
          </Link>
        </div>

        <Link href="/cart" passHref>
          <div className="sm:hidden relative inline-flex ">
            <ShoppingBagIcon className="w-12 h-12 p-3 mr-3 bg-white rounded-full sm:hidden backdrop-filter backdrop-blur-2xl bg-opacity-40" />
            <h2 className="backdrop-filter shadow-xl absolute right-0 top-0 -mt-1 bg-white bg-opacity-75 mr-2 text- font-semibold cursor-pointer sm:hidden inline-flex rounded-full  px-[8px]">
              {items.length}
            </h2>
          </div>
        </Link>
        {isNavOpen ? (
          <ChevronUpIcon
            className="cursor-pointer sm:hidden"
            width={20}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        ) : (
          <ChevronDownIcon
            className="cursor-pointer sm:hidden"
            width={20}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        )}
      </div>

      <motion.nav
        initial={{ height: 0, visibility: "hidden" }}
        animate={
          isNavOpen
            ? { height: "auto", visibility: "visible" }
            : { height: 0, visibility: "hidden" }
        }
        className="px-4 text-center sm:hidden  mb-4"
      >
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
      </motion.nav>
    </motion.header>
  );
}

export default Header;
