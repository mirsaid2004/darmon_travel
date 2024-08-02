import React from "react";
import SwiperContainer from "./components/SwiperContainer";
import DiscountCard from "./components/DiscountCard";

type ToursType = {
  lng: supportedLangs;
};
export default function Tours({ lng }: ToursType) {
  return (
    <div className="w-full bg-tours pb-12 pt-24" id="tours">
      <h3 className="text-primary text-center text-4xl font-semibold">
        Turlar
      </h3>
      <div className="w-full max-w-[1350px] mx-auto">
        <SwiperContainer lng={lng} />
        <DiscountCard lng={lng} />
      </div>
    </div>
  );
}
