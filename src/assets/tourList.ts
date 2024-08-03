import turkeyBg from "@/public/assets/turkiya_bg.png";
import egyptBg from "@/public/assets/egypt_bg.png";
import baaBg from "@/public/assets/baa_bg.png";
import { StaticImageData } from "next/image";

export type TourProgram = {
  title: string;
  name: string;
  priorities: string;
};

export type Tour = {
  id: string;
  title: string;
  tourInfo: string;
  tourImgs: string[];
  programs: TourProgram[];
  children?: Tour;
  mainImg?: StaticImageData;
};

export const tourList: Tour[] = [
  {
    id: "turkiya",
    title: "turkey_tour_title",
    tourInfo: "turkey_tour_info",
    tourImgs: [
      "/assets/turkiya_1.jpg",
      "/assets/turkiya_2.webp",
      "/assets/turkiya_3.jpg",
      "/assets/turkiya_4.png",
      "/assets/turkiya_5.webp",
      "/assets/turkiya_6.jpg",
      "/assets/turkiya_7.jpg",
    ],
    programs: [
      {
        title: "turkey_program_title_1",
        name: "turkey_program_1_name",
        priorities: "turkey_program_1_priorities",
      },
      {
        title: "turkey_program_title_1",
        name: "turkey_program_2_name",
        priorities: "turkey_program_2_priorities",
      },
    ],
    children: {
      id: "antalia",
      title: "antalia_tour_title",
      tourInfo: "antalia_tour_info",
      tourImgs: [
        "/assets/antalia_1.webp",
        "/assets/antalia_2.jpg",
        "/assets/antalia_3.jpeg",
        "/assets/antalia_4.jpg",
        "/assets/antalia_5.jpg",
        "/assets/antalia_6.jpg",
        "/assets/antalia_7.jpg",
      ],
      programs: [
        {
          title: "antalia_program_title_1",
          name: "antalia_program_1_name",
          priorities: "antalia_program_1_priorities",
        },
        {
          title: "antalia_program_title_1",
          name: "antalia_program_2_name",
          priorities: "antalia_program_2_priorities",
        },
      ],
    },
    mainImg: turkeyBg,
  },
  {
    id: "misr",
    title: "egypt_tour_title",
    tourInfo: "egypt_tour_info",
    tourImgs: [
      "/assets/egypt_1.jpg",
      "/assets/egypt_2.jpg",
      "/assets/egypt_3.jpg",
      "/assets/egypt_4.jpg",
      "/assets/egypt_5.jpg",
      "/assets/egypt_6.jpg",
      "/assets/egypt_7.jpg",
    ],
    programs: [
      {
        title: "egypt_program_title_1",
        name: "egypt_program_1_name",
        priorities: "egypt_program_1_priorities",
      },
      {
        title: "egypt_program_title_1",
        name: "egypt_program_2_name",
        priorities: "egypt_program_2_priorities",
      },
      {
        title: "egypt_program_title_1",
        name: "egypt_program_3_name",
        priorities: "egypt_program_3_priorities",
      },
    ],
    mainImg: egyptBg,
  },
  {
    id: "baa",
    title: "egypt_tour_title",
    tourInfo: "egypt_tour_info",
    tourImgs: [
      "/assets/uae_1.avif",
      "/assets/uae_2.jpg",
      "/assets/uae_3.jpg",
      "/assets/uae_4.jpg",
      "/assets/uae_5.jpg",
      "/assets/uae_6.jpg",
      "/assets/uae_7.jpg",
    ],
    programs: [
      {
        title: "egypt_program_title_1",
        name: "egypt_program_1_name",
        priorities: "egypt_program_1_priorities",
      },
      {
        title: "egypt_program_title_1",
        name: "egypt_program_2_name",
        priorities: "egypt_program_2_priorities",
      },
      {
        title: "egypt_program_title_1",
        name: "egypt_program_3_name",
        priorities: "egypt_program_3_priorities",
      },
    ],
    mainImg: baaBg,
  },
];
