import React from "react";
import Image, { StaticImageData } from "next/image";

type TourBgType = {
  img: StaticImageData;
  className: string;
};

export default function TourBg({ img, className }: TourBgType) {
  return <Image src={img} alt="img" className={className} />;
}
