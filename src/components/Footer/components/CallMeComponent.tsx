"use client";
import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

export default function CallMeComponent() {
  const [phone, setPhone] = useState<string>("");
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <TextField
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
      />
      <Button color="secondary" variant="contained" style={{ color: "#fff" }}>
        Menga Qo'ng'iroq qiling
      </Button>
    </div>
  );
}
