"use client";
import React, { useState } from "react";
import Fancybox from "@/src/app/ui/Fancybox";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

export default function TourInfoImgs({ imgs }: { imgs: string[] }) {
  const match1024 = useMediaQuery("(min-width:1024px)");
  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <div className="flex gap-4 select-none">
        <div className="flex flex-col justify-center w-1/3 gap-4">
          <a data-fancybox="gallery" href={imgs[0]}>
            <Image
              alt="alt"
              priority
              quality={70}
              src={imgs[0]}
              width="240"
              height="300"
              className="object-cover object-center rounded"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: match1024 ? "1/1.2" : "1/1.4",
              }}
            />
          </a>
          <a data-fancybox="gallery" href={imgs[1]}>
            <Image
              alt="alt"
              priority
              quality={70}
              src={imgs[1]}
              width="240"
              height="300"
              className="object-cover object-center rounded"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: match1024 ? "1/0.6" : "1/0.7",
              }}
            />
          </a>
        </div>
        <div className="flex flex-col justify-center w-1/3 gap-4">
          <a data-fancybox="gallery" href={imgs[2]}>
            <Image
              alt="alt"
              priority
              quality={70}
              src={imgs[2]}
              width="240"
              height="300"
              className="object-cover object-center rounded"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: match1024 ? "1/0.6" : "1/0.7",
              }}
            />
          </a>
          <a data-fancybox="gallery" href={imgs[3]}>
            <Image
              alt="alt"
              priority
              quality={70}
              src={imgs[3]}
              width="240"
              height="300"
              className="object-cover object-center rounded"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: match1024 ? "1/1.2" : "1/1.4",
              }}
            />
          </a>
          <a data-fancybox="gallery" href={imgs[4]}>
            <Image
              alt="alt"
              priority
              quality={70}
              src={imgs[4]}
              width="240"
              height="300"
              className="object-cover object-center rounded"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: match1024 ? "1/0.6" : "1/0.7",
              }}
            />
          </a>
        </div>
        <div className="flex flex-col justify-center w-1/3 gap-4">
          <a data-fancybox="gallery" href={imgs[5]}>
            <Image
              alt="alt"
              priority
              quality={70}
              src={imgs[5]}
              width="240"
              height="300"
              className="object-cover object-center rounded"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: match1024 ? "1/0.6" : "1/0.7",
              }}
            />
          </a>
          <a data-fancybox="gallery" href={imgs[6]}>
            <Image
              alt="alt"
              priority
              quality={70}
              src={imgs[6]}
              width="240"
              height="300"
              className="object-cover object-center rounded"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: match1024 ? "1/1.2" : "1/1.4",
              }}
            />
          </a>
        </div>
      </div>
    </Fancybox>
  );
}
