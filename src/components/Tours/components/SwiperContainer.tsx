"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import Tilt from "react-parallax-tilt";
import "swiper/css";
import { toursList } from "../assets/tourslist";
import Image from "next/image";
import SwiperController from "./SwiperController";
import { IconButton, useMediaQuery } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

// const tourCardDefaultOptions = {
//   reverse: false, // reverse the tilt direction
//   max: 35, // max tilt rotation (degrees)
//   perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
//   scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
//   speed: 1000, // Speed of the enter/exit transition
//   transition: true, // Set a transition on enter/exit.
//   axis: null, // What axis should be disabled. Can be X or Y.
//   reset: true, // If the tilt effect has to be reset on exit.
//   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
// };

type SwiperControllerType = {
  lng: supportedLangs;
};
export default function SwiperContainer({ lng }: SwiperControllerType) {
  const [swiperController, setSwiperController] = useState<SwiperClass | null>(
    null
  );
  const sm = useMediaQuery("(min-width:640px)");
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isBeginning, setIsBeginning] = useState<boolean>(false);
  const swiperRef = useRef<SwiperRef>(null);
  const getMethods = useCallback((swiperClass: SwiperClass) => {
    setSwiperController(swiperClass);
  }, []);
  const setEnding = useCallback((status: boolean) => {
    setIsEnd(status);
  }, []);
  const setBeginning = useCallback((status: boolean) => {
    setIsBeginning(status);
  }, []);

  useEffect(() => {
    swiperRef.current?.swiper.on("slideChange", () => {
      if (swiperRef.current?.swiper.isEnd) {
        setIsEnd(true);
      } else {
        setIsEnd(false);
      }

      if (swiperRef.current?.swiper.isBeginning) {
        setIsBeginning(true);
      } else {
        setIsBeginning(false);
      }
    });
  }, [swiperRef]);
  return (
    <div className="sm:p-4 flex justify-between">
      <IconButton
        aria-label="previous"
        size="large"
        onClick={() => swiperController?.slidePrev()}
        color="primary"
        sx={(theme) => ({
          margin: "auto",
          transform: "rotate(180deg)",
          border: "1px solid",
          width: "50px",
          height: "50px",
          aspectRatio: "1/1",
          padding: 0,
          [theme.breakpoints.down("sm")]: {
            display: "none",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "0",
            margin: "auto",
            zIndex: 15,
          },
        })}
      >
        <Icon icon="bytesize:arrow-right" />
      </IconButton>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          710: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
          1124: {
            slidesPerView: 4.2,
            spaceBetween: 20,
          },
        }}
        className={` ${!isEnd && sm && "tourSwiperEnding"} ${
          !isBeginning && sm && "tourSwiperBeginning"
        } sm:px-10 py-12`}
        style={{ padding: sm ? "50px 40px" : "20px" }}
      >
        {toursList.map((tour) => (
          <SwiperSlide key={tour.id} className="h-96 w-64 cursor-pointer">
            <Link href={`/${lng}/tour/${tour.id}`}>
              <Tilt
                className="h-96 w-full transition-transform duration-150 rounded-2xl overflow-hidden shadow-xl"
                scale={1.1}
                tiltReverse={true}
                transitionSpeed={1000}
              >
                <div className="relative w-full h-full ">
                  <Image
                    src={tour.img}
                    alt={tour.title}
                    className="absolute w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-white p-4">
                    <h3 className="relative z-10 text-primary text-xl">
                      {tour.title}
                    </h3>
                    <h4 className="relative z-10 text-primary text-lg">
                      {tour.desc}
                    </h4>
                  </div>
                </div>
              </Tilt>
            </Link>
          </SwiperSlide>
        ))}
        <SwiperController
          getMethods={getMethods}
          setEnding={setEnding}
          setBeginning={setBeginning}
        />
      </Swiper>
      <IconButton
        aria-label="previous"
        size="large"
        sx={(theme) => ({
          margin: "auto",
          border: "1px solid",
          width: "50px",
          height: "50px",
          aspectRatio: "1/1",
          padding: 0,
          [theme.breakpoints.down("sm")]: {
            display: "none",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            margin: "auto",
            zIndex: 15,
          },
        })}
        color="primary"
        onClick={() => swiperController?.slideNext()}
      >
        <Icon icon="bytesize:arrow-right" />
      </IconButton>
    </div>
  );
}
