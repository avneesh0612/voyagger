import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute w-full sm:h-[90px] h-10 bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div className="relative w-screen sm:h-[240px] md:h-[362px] h-[90px]">
          <Image
            layout="fill"
            objectFit="contain"
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1629049821/1_uwfm4c.png"
            alt="banner"
          />
        </div>
        <div className="relative w-screen sm:h-[240px] md:h-[362px] h-[90px]">
          <Image
            layout="fill"
            objectFit="contain"
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1629049823/2_jxlckp.png"
            alt="banner"
          />
        </div>
        <div className="relative w-screen sm:h-[240px] md:h-[362px] h-[90px]">
          <Image
            layout="fill"
            objectFit="contain"
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1629049821/3_xdqlkp.png"
            alt="banner"
          />
        </div>
        <div className="relative w-screen sm:h-[240px] md:h-[362px] h-[90px]">
          <Image
            layout="fill"
            objectFit="contain"
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1629049823/4_m984e3.png"
            alt="banner"
          />
        </div>
        <div className="relative w-screen sm:h-[240px] md:h-[362px] h-[90px]">
          <Image
            layout="fill"
            objectFit="contain"
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1629049821/5_n4wyj9.png"
            alt="banner"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
