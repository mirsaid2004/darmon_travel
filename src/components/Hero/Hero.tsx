import Image from "next/image";
import React from "react";
import globe from "@/public/assets/globe.png";
import heroImg from "@/public/assets/heroImg.png";
import BookBtn from "./components/BookBtn";

type HeroType = {
  lng: supportedLangs;
};
export default function Hero({ lng }: HeroType) {
  return (
    <div className="w-full h-full md:h-screen pt-20 sm:mb-0 mb-20">
      <div className="relative flex w-full max-w-[1350px] md:h-full md:min-h-[564px] sm:min-h-[430px] min-h-96 m-auto sm:pt-6 pt-16 p-4 overflow-hidden">
        <div className="md:my-auto bottom-[15%] relative z-10">
          <h1 className="text-primary xl:text-[100px] md:text-7xl lm:text-5xl text-4xl font-bold uppercase lm:mb-10 mb-5 leading-none animate-in slide-in-from-left fade-in-0 ease-in-out duration-500">
            Dunyo Sizni <br /> Kutmoqda
          </h1>
          <BookBtn />
        </div>
        <Image
          src={globe}
          alt="globe"
          className="absolute lg:right-[5%] my-auto top-0 bottom-0 lg:w-3/4 w-full h-auto animate-in zoom-in fade-in-0 ease-in-out duration-1000"
        />
        <Image
          src={heroImg}
          alt="hero img"
          className="absolute md:right-[1%] -right-[4%] my-auto md:top-0 bottom-0 lg:w-[65%] sm:w-5/6 w-full h-auto animate-in slide-in-from-right fade-in-0 ease-in-out duration-700"
        />
      </div>
    </div>
  );
}
