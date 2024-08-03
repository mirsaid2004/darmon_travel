"use client";
import { Button, InputAdornment, TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import React, { useState } from "react";

export default function CallMeComponent() {
  const [phone, setPhone] = useState<string>("");
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {/* <TextField
        type="tel"
        id="outlined-start-adornment"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">+998</InputAdornment>
          ),
        }}
        value={phone}
        onChange={(e) => {
          const text = e.target.value;
          if (text.trim().length <= 9) {
            setPhone(text);
          }
        }}
        placeholder="99-999-99-99"
        className="bg-white rounded"
      /> */}
      <MuiTelInput
        id="muiTel"
        name="muiTel"
        value={phone}
        disableDropdown
        onChange={(e) => setPhone(e)}
        defaultCountry="UZ"
        className="mui-tel-input bg-white rounded"
        style={{ width: "100%", maxWidth: "300px" }}
      />
      <Button color="secondary" variant="contained" style={{ color: "#fff" }}>
        Menga Qo&apos;ng&apos;iroq qiling
      </Button>
    </div>
  );
}
