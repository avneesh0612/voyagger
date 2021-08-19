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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchStarCount();
  }, []);

  return (
    <div className="w-full py-1 text-lg my-5 px-5 flex items-center justify-center space-x-10">
      <h1>
        Made By
        <Link href="https://avneesh-links.vercel.app/">
          <a target="_blank" className="ml-1 font-bold underline">Avneesh Agarwal</a>
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
