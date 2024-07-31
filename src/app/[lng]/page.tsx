import { useTranslation } from "../i18n";

export default async function Page({
  params: { lng },
}: {
  params: { lng: supportedLangs };
}) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <div className="h-full w-full">
        <h1 className="text-center">Hello World</h1>
      </div>
    </>
  );
}
