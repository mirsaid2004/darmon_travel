import individual from "@/public/assets/individual.png";
import star from "@/public/assets/star.png";
import route from "@/public/assets/route.png";
import safety from "@/public/assets/safety.png";
import price from "@/public/assets/price.png";
import callCenter from "@/public/assets/call_center.png";
import { StaticImageData } from "next/image";

export type priority = {
  id: string;
  logo: StaticImageData;
  title: string;
};
export const prioritiesList: priority[] = [
  { id: "individual", logo: individual, title: "priority_1" },
  { id: "star", logo: star, title: "priority_2" },
  { id: "route", logo: route, title: "priority_3" },
  { id: "safety", logo: safety, title: "priority_4" },
  { id: "price", logo: price, title: "priority_5" },
  { id: "callCenter", logo: callCenter, title: "priority_6" },
];
