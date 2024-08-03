"use client";
import { useTranslation } from "@/src/app/i18n/client";
import { Button } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import React, { useState } from "react";

type CallMeComponentType = {
  lng: supportedLangs;
};

export default function CallMeComponent({ lng }: CallMeComponentType) {
  const { t } = useTranslation(lng, "page");
  const [phone, setPhone] = useState<string>("");

  return (
    <div className="flex flex-wrap gap-2 mt-4">
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
        {t("call_me")}
      </Button>
    </div>
  );
}
