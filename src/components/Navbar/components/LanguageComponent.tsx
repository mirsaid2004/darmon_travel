"use client";
import React, { HTMLAttributes, useCallback, useEffect, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Icon } from "@iconify/react";
import uz from "@/public/assets/uz.png";
import ru from "@/public/assets/ru.png";
import en from "@/public/assets/en.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/src/app/i18n/client";
import clsx from "clsx";

type LanguageComponentType = {
  lng: supportedLangs;
} & HTMLAttributes<HTMLDivElement>;
const langs = [
  { id: "uz", img: uz },
  { id: "ru", img: ru },
  { id: "en", img: en },
];
export default function LanguageComponent({
  className,
  lng,
}: LanguageComponentType) {
  const { t } = useTranslation(lng, "navbar");
  const [buttonStatus, setButtonStatus] = useState<null | HTMLElement>(null);
  const open = Boolean(buttonStatus);
  const [fullPath, setFullPath] = useState<undefined | URL>();
  useEffect(() => {
    if (window) setFullPath(new URL(window.location.href));
  }, []);
  const changePath = useCallback(
    (newLng: string) => {
      if (fullPath) {
        return fullPath?.pathname?.replace(lng, newLng);
      }
      return "";
    },
    [fullPath]
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setButtonStatus(event.currentTarget);
  };
  const handleClose = () => {
    setButtonStatus(null);
  };

  return (
    <div className={clsx(className)}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="flex gap-1"
      >
        <h3 className="font-bold text-xl">{lng}</h3>
        <Icon icon="bx:globe" className="text-xl" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={buttonStatus}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {langs.map((lang) => (
          <MenuItem onClick={handleClose} key={lang.id}>
            <Link
              href={changePath(lang.id)}
              className="flex gap-2 items-center"
            >
              <Image
                src={lang.img}
                alt={lang.id}
                className=" rounded-xl object-cover h-auto w-10"
              />
              <h3 className="text-lg text-primary">{t(lang.id)}</h3>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
