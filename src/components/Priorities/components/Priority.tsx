import React from "react";
import type { priority } from "../assets/prioritiesList";
import Image from "next/image";

type PriorityType = {
  priority: priority;
};
export default function Priority({ priority }: PriorityType) {
  return (
    <div className="relative sm:h-full h-56 sm:mt-0 mt-2">
      <div
        className="h-full relative ml-2 mb-2 flex flex-col sm:w-64 w-36 gap-3 items-center justify-center p-2 py-8 rounded-3xl bg-white z-10 priority-card"
        style={{ zIndex: 2 }}
      >
        <Image
          src={priority.logo}
          alt={priority.title}
          className="m-auto sm:w-28 h-auto w-14"
        />
        <h3 className="text-primary sm:text-2xl text-base font-semibold text-center">
          {priority.title}
        </h3>
      </div>
      <div className="absolute bg-primary rounded-tl-3xl rounded-br-xl sm:w-14 w-10 h-auto aspect-square sm:-bottom-4 sm:-left-4 -bottom-2 -left-2"></div>
    </div>
  );
}
