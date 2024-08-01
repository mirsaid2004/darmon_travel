import Link from "next/link";
import { useTranslation } from "../i18n";
import Hero from "@/src/components/Hero";
import Tours from "@/src/components/Tours";

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
      </div>
    </>
  );
}
