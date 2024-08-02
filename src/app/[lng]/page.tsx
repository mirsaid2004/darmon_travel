import Link from "next/link";
import { useTranslation } from "../i18n";
import Hero from "@/src/components/Hero";
import Tours from "@/src/components/Tours";
import About from "@/src/components/About";
import Priorities from "@/src/components/Priorities";

export default async function Page({
  params: { lng },
}: {
  params: { lng: supportedLangs };
}) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <div className="h-full w-full">
        <Hero lng={lng} />
        <Tours lng={lng} />
        <About lng={lng} />
        <Priorities lng={lng} />
      </div>
    </>
  );
}
