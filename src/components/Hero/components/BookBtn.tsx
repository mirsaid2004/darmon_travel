"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Button,
  IconButton,
  InputLabel,
  Modal,
  TextField,
  autocompleteClasses,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { MuiTelInput } from "mui-tel-input";
import React from "react";

export default function BookBtn() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const handlePhoneChange = (newValue: string) => {
    setPhone(newValue);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpen}
        className="h-16 w-2/3 text-ellipsis animate-in slide-in-from-left fade-in-0 ease-in-out duration-700"
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
        style={{}}
      >
        Buyurtma berish
      </Button>
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
              overflow: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              className="flex flex-col rounded-3xl"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "500px",
                backgroundColor: "white",
              }}
            >
              <div className="w-full h-14 bg-modal flex justify-end items-center p-4 rounded-t-3xl">
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
              <div className="flex flex-col items-center gap-5 my-10 px-4">
                <p className="text-primary text-lg text-center animate-in slide-in-from-bottom fade-in-0 ease-in-out duration-200">
                  Iltimos, operatorlarimiz siz bilan bog'lanishi uchun aloqa
                  ma'lumotlaringizni qoldiring
                </p>
                <TextField
                  fullWidth
                  label="Sizning Ismingiz"
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
                    Sizning Aloqa raqamingiz
                  </label>
                  <MuiTelInput
                    id="muiTel"
                    name="muiTel"
                    value={phone}
                    onChange={handlePhoneChange}
                    defaultCountry="UZ"
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
                  Buyurtma berish
                </Button>
                <p className="w-full max-w-[300px] text-center text-xs text-gray-400 animate-in slide-in-from-bottom fade-in-0 ease-in-out duration-1000">
                  Ma’lumotlarni to’ldirib “Buyurtma berish” tugmasini bosish
                  orqali ma’lumotlar yuboriladi va operator siz bilan tez orqada
                  bog’lanadi.
                </p>
              </div>
              <div className="h-14 bg-modal rounded-b-3xl"></div>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
