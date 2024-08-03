import React from "react";
import Image from "next/image";
import AboutUsImg from "@/public/assets/about_us.png";
import { useTranslation } from "@/src/app/i18n";
import { Span } from "next/dist/trace";

type AboutType = {
  lng: supportedLangs;
};
export default async function About({ lng }: AboutType) {
  const { t } = await useTranslation(lng, ["navbar", "page"]);
  return (
    <div className="pb-12 pt-24" id="about">
      <h3 className="text-center text-4xl text-primary font-semibold">
        {t("navbar:about")}
      </h3>
      <div className="w-full max-w-[1350px] m-auto p-4 relative">
        <Image
          src={AboutUsImg}
          alt="about"
          className="lg:block hidden lg:absolute top-0 lg:top-12 xl:m-0 xl:w-[800px] bottom-0 m-auto w-[600px] h-auto"
          style={{ right: "0%" }}
        />
        <p className="text-primary text-lg mt-2 about_text">
          {JSON.parse(t("page:about_sec_1")).map(
            (about: string, index: number) => (
              <>
                <span key={index}>{about}</span>
                <br />
              </>
            )
          )}
        </p>
        <br />
        <p className="text-primary text-lg about_text">
          {JSON.parse(t("page:about_sec_2")).map(
            (about: string, index: number) => (
              <>
                <span key={index}>{about}</span>
                <br />
              </>
            )
          )}
        </p>
        <br />
        <p className="text-primary text-lg about_text">
          {JSON.parse(t("page:about_sec_3")).map(
            (about: string, index: number) => (
              <>
                <span key={index}>{about}</span>
                <br />
              </>
            )
          )}
        </p>
        <Image
          src={AboutUsImg}
          alt="about"
          className="lg:hidden relative left-3 w-[600px] h-auto m-auto"
          style={{ right: "0%" }}
        />
      </div>
    </div>
  );
}
