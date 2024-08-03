import React from "react";
import TourBg from "@/src/components/TourBg/TourBg";
import TourInfo from "@/src/components/TourInfo";
import TourProgram from "@/src/components/TourProgram";
import { tourList } from "@/src/assets/tourList";
import TourContact from "@/src/components/TourContact";

type TourType = {
  params: { lng: supportedLangs; tourId: string };
};
export default function Tour({ params }: TourType) {
  const tour = tourList.find((tour) => tour.id === params.tourId.trim());
  if (!tour) {
  } else {
    return (
      <div className="w-full pt-24">
        <div className="w-full max-w-[1350px] p-4 mx-auto">
          <TourBg
            img={tour.mainImg!}
            className="w-full h-auto min-h-[100px] object-left object-cover rounded-xl"
          />
          <TourInfo lng={params.lng} tour={tour} />
          <TourProgram lng={params.lng} tour={tour} />
          {tour.children ? (
            <>
              <TourInfo
                lng={params.lng}
                tour={tour.children}
                className="md:flex-row-reverse"
              />
              <TourProgram lng={params.lng} tour={tour.children} />
            </>
          ) : null}
          <TourContact lng={params.lng} />
        </div>
      </div>
    );
  }
}
