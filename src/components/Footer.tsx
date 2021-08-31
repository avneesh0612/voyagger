import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex z-40 w-screen justify-between items-center text-lg my-5 ">
      <Link href="https://avneesh0612.hashnode.dev/introducing-voyagger-connecting-people-changing-lives">
        <a
          target="_blank"
          className="font-bold  hover:underline cursor-pointer min-w-[200px]  text-center"
        >
          About Project
        </a>
      </Link>

      <h3 className="flex items-center justify-center w-full px-5 space-x-10">
        Made with 🤎 by
        <Link href="https://avneesh-links.vercel.app/">
          <a
            target="_blank"
            rel="noreferrer"
            className="ml-1 font-bold underline"
          >
            Avneesh Agarwal
          </a>
        </Link>
      </h3>

      <Link passHref href="https://github.com/avneesh0612/voyagger">
        <a target="_blank" className="mr-24">
          <Image
            className="cursor-pointer"
            width={70}
            height={70}
            src="/github.svg"
            alt="GitHub logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default Footer;
