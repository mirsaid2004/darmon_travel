import React from "react";

type TourType = {
  params: { lng: string; tourId: string };
};
export default function Tour({ params }: TourType) {
  return (
    <div>
      <h2>{params.lng}</h2>
      <h2>{params.tourId}</h2>
    </div>
  );
}
