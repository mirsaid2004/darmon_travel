import React from "react";
import SwiperContainer from "./components/SwiperContainer";
import DiscountCard from "./components/DiscountCard";
import { useTranslation } from "@/src/app/i18n";
type ToursType = {
  lng: supportedLangs;
};
export default async function Tours({ lng }: ToursType) {
  const { t } = await useTranslation(lng, ["navbar"]);
  return (
    <div className="w-full bg-tours pb-12 pt-24" id="tours">
      <h3 className="text-primary text-center text-4xl font-semibold">
        {t("tours")}
      </h3>
      <div className="w-full max-w-[1350px] mx-auto">
        <SwiperContainer lng={lng} />
        <DiscountCard lng={lng} />
      </div>
    </div>
  );
}
