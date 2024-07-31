import Image from "next/image";
import React from "react";
import globe from "@/public/assets/globe.png";
import heroImg from "@/public/assets/heroImg.png";
export default function Hero() {
  return (
    <div className="w-full h-screen pt-20">
      <div className="w-full m-auto h-full relative max-w-[1350px]">
        <Image
          src={globe}
          alt="globe"
          className="absolute right-2 bottom-0 w-3/4 h-auto"
        />
        <Image
          src={heroImg}
          alt="hero img"
          className="absolute right-0 bottom-0 h-auto w-3/5 "
        />
      </div>
    </div>
  );
}
