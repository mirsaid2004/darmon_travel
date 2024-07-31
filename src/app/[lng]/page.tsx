import Link from "next/link";
import { useTranslation } from "../i18n";
import Hero from "@/src/components/Hero";

export default async function Page({
  params: { lng },
}: {
  params: { lng: supportedLangs };
}) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <div className="h-full w-full">
        <Hero />
        <Link href={"/tour/1"}>Tour 1</Link>
      </div>
    </>
  );
}
