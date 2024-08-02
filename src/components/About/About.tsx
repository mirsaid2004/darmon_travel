import React from "react";
import Image from "next/image";
import AboutUsImg from "@/public/assets/about_us.png";

type AboutType = {
  lng: supportedLangs;
};
export default function About({ lng }: AboutType) {
  return (
    <div className="pb-12 pt-24" id="about">
      <h3 className="text-center text-4xl text-primary font-semibold">
        Biz Haqimizda
      </h3>
      <div className="w-full max-w-[1350px] m-auto p-4 relative">
        <Image
          src={AboutUsImg}
          alt="about"
          className="lg:block hidden lg:absolute top-0 lg:top-12 xl:m-0 xl:w-[800px] bottom-0 m-auto w-[600px] h-auto"
          style={{ right: "0%" }}
        />
        <p className="text-primary text-lg mt-2 about_text">
          Bizning kompaniyamiz 2024 yilda Toshkentda tashkil etilgan
          bo&apos;lib, jadal <br />
          rivojlanib, dunyo bo&apos;ylab noyob turlar va sayohatlar taklif
          etmoqda. <br />
          Biz unutilmas taassurotlar yaratish va mijozlarimizga yangi <br />
          madaniyatlar, tarixlar va tabiat go&apos;zalliklarini kashf etish{" "}
          <br />
          imkoniyatini berishdan faxrlanamiz. <br />
        </p>
        <br />
        <p className="text-primary text-lg about_text">
          Biz - o&apos;z ishiga bag&apos;ishlangan, yosh va dinamik <br />
          mutaxassislar jamoasimiz. Gidlarimiz va <br />
          tashkilotchilarimiz har bir sayohatni <br />
          mijozlarning barcha istaklari va <br />
          afzalliklarini hisobga olgan holda diqqat <br />
          bilan rejalashtiradilar. Har bir <br />
        </p>
        <br />
        <p className="text-primary text-lg about_text">
          sayohat haqiqiy sarguzashtga aylanishi uchun <br />
          eng yaxshi yo&apos;nalishlarni taklif qilishga intilamiz. <br />
          Tashkil etilganimizdan beri biz yuqori sifatli xizmat va har <br />
          bir sayohatchiga individual yondashuv tufayli <br />
          mijozlarimizning ishonchini qozondik. Yevropaga tarixiy <br />
          ekskursiyalar, Tailandda plyaj dam olish yoki Afrikada hayajonli{" "}
          <br />
          safari bo&apos;ladimi, biz har doim eng qiziqarli va unutilmas <br />
          yo&apos;nalishlarni taklif qilishga tayyormiz. Bizga qo&apos;shiling
          va dunyoni <br />
          yangi nuqtai nazardan kashf eting! Sizning sarguzashtingiz bu yerda{" "}
          <br />
          boshlanadi. <br />
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
