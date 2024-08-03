"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  Modal,
  TextField,
} from "@mui/material";
import { useTranslation } from "../../i18n/client";
import { MuiTelInput } from "mui-tel-input";

type ContactModalType = {
  lng: supportedLangs;
  open: boolean;
  handleClose: ((event: {}) => void) | undefined;
};
export default function ContactModal({
  open,
  handleClose,
  lng,
}: ContactModalType) {
  const { t } = useTranslation(lng, "page");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const handlePhoneChange = (newValue: string) => {
    setPhone(newValue);
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          style={{
            position: "relative",
            padding: "10px",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="flex flex-col rounded-3xl"
            style={{
              position: "relative",
              height: "100%",
              overflow: "auto",
              maxHeight: "530px",
              width: "100%",
              maxWidth: "500px",
              backgroundColor: "white",
            }}
          >
            <div className="sticky top-0 backdrop-blur-md w-full h-14 bg-modal flex justify-end items-center p-4 rounded-t-3xl">
              <IconButton
                className="hover:scale-110 transition-all duration-200"
                style={{
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  aspectRatio: "1/1",
                  fontSize: "24px !important",
                  backgroundColor: "rgba(255,255,255,0.6)",
                  color: "rgba(0, 66, 144, 0.5)",
                }}
                onClick={handleClose}
              >
                <Icon icon="line-md:close-small" />
              </IconButton>
            </div>
            <div className="flex-1 flex flex-col items-center gap-5 my-10 px-4">
              <p className="text-primary text-lg text-center animate-in slide-in-from-bottom fade-in-0 ease-in-out duration-200">
                {t("modalTitle")}
              </p>
              <TextField
                fullWidth
                label={t("modalNameInput")}
                id="fullWidth"
                value={name}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setName(e.target.value)}
                required
                style={{ width: "100%", maxWidth: "400px" }}
                className="slide-in-from-bottom fade-in-0 ease-in-out duration-300"
              />
              <div className="w-full max-w-[400px] flex flex-col justify-center animate-in slide-in-from-bottom fade-in-0 ease-in-out duration-500">
                <label className="text-left mb-1" htmlFor="muiTel">
                  {t("modalPhoneInput")}
                </label>
                <MuiTelInput
                  id="muiTel"
                  name="muiTel"
                  value={phone}
                  disableDropdown
                  onChange={handlePhoneChange}
                  defaultCountry="UZ"
                  className="mui-tel-input"
                  style={{ width: "100%", maxWidth: "400px" }}
                />
              </div>
              <Button
                variant="contained"
                color="secondary"
                className="h-12 text-ellipsis animate-in slide-in-from-bottom fade-in-0 ease-in-out duration-700"
                sx={(theme) => ({
                  width: "100%",
                  maxWidth: "400px",
                  color: "white",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                  boxShadow: "0px 10px 35px 0px rgba(35, 175, 95, 0.25)",
                  textTransform: "capitalize",
                  textAlign: "left",
                  fontSize: "20px",
                  lineHeight: "1.2",
                })}
              >
                {t("heroBtn")}
              </Button>
              <p className="w-full max-w-[300px] text-center text-xs text-gray-400 animate-in slide-in-from-bottom fade-in-0 ease-in-out duration-1000">
                {t("modalInfo")}
              </p>
            </div>
            <div className="w-full h-14 bg-modal flex justify-end items-center p-4 rounded-b-3xl"></div>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
