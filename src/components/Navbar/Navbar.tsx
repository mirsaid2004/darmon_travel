import React from "react";
import Image from "next/image";
import navLogo from "@/public/assets/nav_logo.svg";
import { navItemList } from "./assets/navItemsList";
import { useTranslation } from "@/src/app/i18n";
import Link from "next/link";
import LanguageComponent from "./components/LanguageComponent";
import Sidebar from "./components/Sidebar";

type NavbarType = {
  lng: supportedLangs;
};

export default async function Navbar({ lng }: NavbarType) {
  const { t } = await useTranslation(lng, "navbar");
  return (
    <header className="fixed top-0 left-0 w-full shadow-lg shadow-gray-100 bg-white z-50">
      <nav className="w-full max-w-[1350px] mx-auto flex justify-between items-center p-4">
        <Image src={navLogo} alt="nav_logo" className="w-auto h-12" />

        <ul className="list-none hidden gap-6 items-center min-[920px]:flex">
          {navItemList.map((navItem) => (
            <li key={navItem.id}>
              <Link
                href={`/${lng}/${navItem.id}`}
                className="text-primary text-xl font-medium"
              >
                {t(navItem.id)}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageComponent lng={lng} className="hidden min-[920px]:block" />
        <div className="min-[920px]:hidden">
          <Sidebar lng={lng} />
        </div>
      </nav>
    </header>
  );
}
