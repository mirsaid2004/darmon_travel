"use client";
import { IconButton } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SwiperClass, useSwiper } from "swiper/react";
import { useEffect } from "react";

type Props = {
  // eslint-disable-next-line no-unused-vars
  getMethods: (methods: SwiperClass) => void;
  setEnding: (status: boolean) => void;
  setBeginning: (status: boolean) => void;
};

function SwiperController({ getMethods, setEnding, setBeginning }: Props) {
  const swiper = useSwiper();
  swiper.isBeginning;
  useEffect(() => {
    getMethods(swiper);
    setEnding(swiper.isEnd);
    setBeginning(swiper.isBeginning);
  }, [swiper, getMethods, setEnding, setBeginning]);
  return (
    <>
      <IconButton
        aria-label="previous"
        size="large"
        style={{ display: "none" }}
        onClick={() => swiper.slidePrev()}
      >
        <Icon icon="ic:round-navigate-next" />
      </IconButton>
      <IconButton
        aria-label="next"
        size="large"
        style={{ display: "none" }}
        onClick={() => swiper.slideNext()}
      >
        <Icon icon="ic:round-navigate-next" />
      </IconButton>
    </>
  );
}

export default SwiperController;
