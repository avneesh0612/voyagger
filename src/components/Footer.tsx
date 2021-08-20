import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const [starCount, setStarCount] = useState(0);

  const fetchStarCount = () => {
    axios
      .get("https://api.github.com/repos/avneesh0612/voyager")
      .then((response) => {
        setStarCount(response.data.stargazers_count);
      });
  };

  useEffect(() => {
    fetchStarCount();
  }, []);

  return (
    <div className="flex items-center justify-center w-full px-5 py-1 my-5 space-x-10 text-lg">
      <h1>
        Made By
        <Link href="https://avneesh-links.vercel.app/">
          <a target="_blank" className="ml-1 font-bold underline">
            Avneesh Agarwal
          </a>
        </Link>
      </h1>
      <Link passHref href="https://github.com/avneesh0612/voyager">
        <div className="flex items-center">
          <Image
            width={25}
            height={25}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            alt="github"
          />
          <Link href="https://github.com/avneesh0612/voyager">
            <a className="ml-1 font-bold capitalize">{starCount} Stars</a>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
