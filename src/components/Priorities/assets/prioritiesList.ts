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
  { id: "individual", logo: individual, title: "Individual yondashuv" },
  { id: "star", logo: star, title: "Tajriba va professionallik" },
  { id: "route", logo: route, title: "Keng yo'nalishlar tanlovi" },
  { id: "safety", logo: safety, title: "Ishonchlilik va xavfsizlik" },
  { id: "price", logo: price, title: "Raqobatbardosh narxlar" },
  { id: "callCenter", logo: callCenter, title: "24/7 qo'llab-quvvatlash" },
];
