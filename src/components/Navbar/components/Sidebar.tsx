"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import LanguageComponent from "./LanguageComponent";
import navLogo from "@/public/assets/nav_logo.svg";
import Image from "next/image";
import { navItemList } from "../assets/navItemsList";
import Link from "next/link";
import { useTranslation } from "@/src/app/i18n/client";

type SidebarType = {
  lng: supportedLangs;
};
export default function Sidebar({ lng }: SidebarType) {
  const { t } = useTranslation(lng, "navbar");
  const [sidebarState, setSidebarState] = useState(false);
  return (
    <div className="">
      <IconButton
        className="min-[920px]:hidden"
        color="primary"
        onClick={() => setSidebarState(true)}
      >
        <Icon
          icon="icon-park-outline:hamburger-button"
          className="text-2xl text-primary"
        />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={sidebarState}
        onClose={() => setSidebarState(false)}
      >
        <div className="w-full max-w-80 py-2 px-2 min-h-screen relative flex flex-col">
          <div className="sticky top-3 flex items-center w-full justify-between gap-10 shadow-lg shadow-gray-100 py-2 px-2">
            <Image src={navLogo} alt="nav_logo" className="w-auto h-12" />
            <IconButton
              className="min-[920px]:hidden"
              color="primary"
              onClick={() => setSidebarState(false)}
            >
              <Icon
                icon="line-md:close-small"
                className="text-2xl text-primary"
              />
            </IconButton>
          </div>
          <ul className="flex flex-col justify-center items-center list-none gap-5 flex-1">
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
            <LanguageComponent lng={lng} />
          </ul>
          <p className="text-gray-600 text-xs text-ellipsis">
            © 2024 DarmonTravel. All rights reserved
          </p>
        </div>
      </Drawer>
    </div>
  );
}
