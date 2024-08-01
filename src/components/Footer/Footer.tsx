import React from "react";
import Image from "next/image";
import footerBg from "@/public/assets/footerBg.png";
import CallMeComponent from "./components/CallMeComponent";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, IconButton } from "@mui/material";

type FooterType = {
  lng: supportedLangs;
};
export default function Footer({ lng }: FooterType) {
  return (
    <footer className="w-full bg-primary">
      <div className="w-full max-w-[1350px] m-auto px-4">
        <div className="w-full relative rounded-2xl min-h-52 overflow-hidden p-5">
          <Image
            src={footerBg}
            alt="footer bg img"
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
          <div className="relative z-10 text-white max-w-[600px]">
            <p className="text-2xl">
              Biz har doim sizning savollaringiz va takliflaringizga ochiqmiz.
              Biz bilan qulay usulda bog&apos;laning, va bizning jamoamiz sizga
              imkon qadar tezroq javob beradi.
            </p>
            <CallMeComponent />
          </div>
        </div>
        <div className="w-full flex justify-between mt-6">
          <h3 className="text-xl text-white inline-flex items-center gap-2">
            <Icon icon="eva:phone-fill" />
            +998 77 273 00 17
          </h3>
          <h3 className="text-xl text-white inline-flex items-center gap-2">
            <Icon icon="mdi:location" />
            Toshkent, O&apos;zbekiston
          </h3>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex gap-2 items-center mt-4">
            <div className="aspect-square rounded-full bg-secondary flex items-center justify-center w-10 text-white text-xl hover:bg-green-800 hover:scale-110 transition-all duration-200 cursor-pointer">
              <Icon icon="eva:facebook-fill" />
            </div>
            <div className="aspect-square rounded-full bg-secondary flex items-center justify-center w-10 text-white text-xl hover:bg-green-800 hover:scale-110 transition-all duration-200 cursor-pointer">
              <Icon icon="mdi:instagram" />
            </div>
            <div className="aspect-square rounded-full bg-secondary flex items-center justify-center w-10 text-white text-xl hover:bg-green-800 hover:scale-110 transition-all duration-200 cursor-pointer">
              <Icon icon="ph:telegram-logo" />
            </div>
            <div className="aspect-square rounded-full bg-secondary flex items-center justify-center w-10 text-white text-xl hover:bg-green-800 hover:scale-110 transition-all duration-200 cursor-pointer">
              <Icon icon="ic:baseline-whatsapp" />
            </div>
          </div>
          <h3 className="text-xl text-white">Chilonzor 18/19 uy</h3>
        </div>
        <div className="w-full border-t-[1px] border-white text-center text-xl text-white mt-8 py-5">
          DarmonTravel 2024
        </div>
      </div>
    </footer>
  );
}
