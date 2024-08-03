import React from "react";
import discountImg from "@/public/assets/discount.png";
import Image from "next/image";
import { useTranslation } from "@/src/app/i18n";

type DiscountCardType = {
  lng: supportedLangs;
};

export default async function DiscountCard({ lng }: DiscountCardType) {
  const { t } = await useTranslation(lng, "page");
  return (
    <div className="w-full p-4">
      <div className="relative flex justify-between gap-3 rounded-2xl bg-primary p-4 sm:pr-20 overflow-hidden">
        <div className="flex flex-col justify-center gap-1">
          <h3 className="font-semibold md:text-xl sm:text-lg text-sm text-white">
            <span className="text-fancyblue">{t("discount_date")}</span>{" "}
            {t("discount_starter_text")}
          </h3>
          <h3 className="font-semibold md:text-xl sm:text-lg text-sm text-white">
            <span className="text-fancyblue md:text-4xl sm:text-2xl text-lg">
              15%
            </span>{" "}
            {t("discount_end_text")}
          </h3>
        </div>
        <div className="sm:m-0 m-auto sm:w-auto w-[450px] relative">
          <Image
            src={discountImg}
            alt="discount img"
            className="md:max-w-[300px] sm:max-w-[200px] sm:relative absolute right-0 top-0 bottom-0 sm:m-0 m-auto w-[450px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
