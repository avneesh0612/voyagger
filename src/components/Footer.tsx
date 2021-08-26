import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full px-5 py-1 my-5 space-x-10 text-lg">
      <h1>
        Made with 🤎 by
        <Link href="https://avneesh-links.vercel.app/">
          <a target="_blank" rel="noreferrer" className="ml-1 font-bold underline">
            Avneesh Agarwal
          </a>
        </Link>
      </h1>
    </div>
  );
};

export default Footer;
