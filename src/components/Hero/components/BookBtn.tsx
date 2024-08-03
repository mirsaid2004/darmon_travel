"use client";
import { useTranslation } from "@/src/app/i18n/client";
import ContactModal from "@/src/app/ui/ContactModal";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import clsx from "clsx";
import { MuiTelInput } from "mui-tel-input";
import React from "react";

type BookBtnType = {
  lng: supportedLangs;
  className?: string;
};

export default function BookBtn({ lng, className }: BookBtnType) {
  const matches = useMediaQuery("(min-width:768px)");
  const { t } = useTranslation(lng, "page");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpen}
        className={clsx(
          "h-16 w-2/3 text-ellipsis animate-in slide-in-from-left fade-in-0 ease-in-out duration-700",
          className
        )}
        sx={(theme) => ({
          color: "white",
          fontSize: "30px",
          lineHeight: "1",
          letterSpacing: "2px",
          fontWeight: "bold",
          boxShadow: "0px 10px 35px 0px rgba(35, 175, 95, 0.25)",
          textTransform: "capitalize",
          textAlign: "left",
          padding: "8px 10px",
          [theme.breakpoints.down("md")]: {
            fontSize: "20px",
            lineHeight: "1.2",
          },
        })}
      >
        <span>
          {t("heroBtn")}
          <span
            style={{
              marginLeft: "5px",
              fontSize: "25px",
              fontWeight: "bold",
              lineHeight: "1",
            }}
          >
            {!matches && "↪"}
          </span>
        </span>
      </Button>
      <ContactModal open={open} handleClose={handleClose} lng={lng} />
    </div>
  );
}
