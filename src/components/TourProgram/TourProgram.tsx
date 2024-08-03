import { useTranslation } from "@/src/app/i18n";
import { Tour } from "@/src/assets/tourList";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type TourProgramType = {
  lng: supportedLangs;
  tour: Tour;
};
export default async function TourProgram({ lng, tour }: TourProgramType) {
  const { t } = await useTranslation(lng, "tour");
  return (
    <div className="w-full">
      <div className="w-full flex flex-wrap justify-center gap-5">
        {tour.programs.map((program) => (
          <div
            key={program.name}
            className="rounded-2xl bg-tours p-4 min-h-[420px] w-96"
          >
            <h5 className="text-primary">{t(program.title)}</h5>
            <h2 className="text-primary text-xl underline pb-1 font-semibold">
              {t(program.name)}
            </h2>
            <ul className="flex flex-col text-lg text-primary list-none gap-1">
              {JSON.parse(t(program.priorities)).map(
                (priority: string, index: number) => (
                  <li key={index} className="inline-flex">
                    <span
                      style={{ width: "25px", marginRight: "3px" }}
                      className="text-2xl"
                    >
                      <Icon icon="ph:seal-check-fill" color="#2DA0F9" />
                    </span>
                    {priority}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
