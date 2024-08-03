import { Tour, tourList } from "@/src/assets/tourList";
import { redirect } from "next/navigation";
import React from "react";
import TourInfoImgs from "./components/TourInfoImgs";
import clsx from "clsx";

type TourInfoType = {
  lng: supportedLangs;
  tour: Tour;
  className?: string;
};

export default async function TourInfo({ lng, tour, className }: TourInfoType) {
  return (
    <div className="mt-5">
      <div
        className={clsx(
          "flex flex-col gap-10 mb-10 md:gap-22 md:flex-row",
          className
        )}
      >
        <div className="text-primary md:w-1/2 md:flex md:flex-col md:justify-center">
          <h2 className="lg:text-xl text-lg font-semibold mb-3">
            {tour.title}
          </h2>
          {tour.tourInfo.map((info, index) => (
            <div key={index} className="lg:text-lg">
              {" "}
              <p>{info}</p>
              <br />{" "}
            </div>
          ))}
        </div>
        <div className="md:w-1/2 md:pl-6 m-auto">
          <TourInfoImgs imgs={tour.tourImgs} />
        </div>
      </div>
    </div>
  );
}
