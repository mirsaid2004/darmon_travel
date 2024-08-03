"use client";
import { useTranslation } from "@/src/app/i18n/client";
import ContactModal from "@/src/app/ui/ContactModal";
import { Button } from "@mui/material";
import React from "react";

type TourContactType = {
  lng: supportedLangs;
};

export default function TourContact({ lng }: TourContactType) {
  const { t } = useTranslation(lng, "page");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className="my-10 mx-auto max-w-[400px]">
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpen}
        className={
          "h-16 w-full text-ellipsis animate-in slide-in-from-left fade-in-0 ease-in-out duration-700"
        }
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
          width: "100%",
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
          ></span>
        </span>
      </Button>
      <ContactModal open={open} handleClose={handleClose} lng={lng} />
    </div>
  );
}
