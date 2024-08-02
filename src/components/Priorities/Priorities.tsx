import React from "react";
import { prioritiesList } from "./assets/prioritiesList";
import Priority from "./components/Priority";

type PrioritiesType = {
  lng: supportedLangs;
};
export default function Priorities({ lng }: PrioritiesType) {
  return (
    <div className="pb-12 pt-24 bg-tours" id="focus">
      <h3 className="text-center text-4xl text-primary font-semibold">
        Biz Afzalliklarimiz
      </h3>
      <div className="w-full max-w-[1350px] m-auto flex flex-wrap items-center justify-center sm:gap-10 gap-2 p-4">
        {prioritiesList.map((priority) => (
          <Priority priority={priority} key={priority.id} />
        ))}
      </div>
    </div>
  );
}
