export type TourProgram = {
  title: string;
  name: string;
  priorities: string[];
};

export type Tour = {
  id: string;
  title: string;
  tourInfo: string[];
  tourImgs: string[];
  programs: TourProgram[];
  children?: Tour;
};

export const tourList: Tour[] = [
  {
    id: "turkiya",
    title: "Turkiya Istanbul: Asrlar Kesisgan Abadiy Shahar",
    tourInfo: [
      "Istanbulga xush kelibsiz – Sharq va G'arb kesisadigan, sehr va tarixiy atmosfera yaratgan shahar.Siz Sultonahmetning jozibali dunyosiga sho'ng'ishingiz, u yerda tor ko'chalar sizni buyuk Ko'k masjid va Aya Sofiyaga olib boradi.",
      "Sultonahmet bo'ylab sayohat sizni Vizantiya va Usmoniy imperiyasining uzoq davrlariga olib boradi.  Shahar ramzi bo'lgan Topqapi saroyi, Usmoniy sultonlarining rezidensiyasi, sizni boylik va haremning intrigalariga cho'mdiradi.",
      "Mashhur Katta Bozor bo'ylab yuring, bu yerda siz noyob suvenirlar, ziravorlar va antikvar buyumlarni topasiz. Bosfor bo'yidagi ajoyib manzaralardan bahramand bo'ling va Istanbulning ruhini his eting. Turni Dolmabahche saroyi, Usmoniy davrining boylik va nafislik ramzi, bilan yakunlang.",
    ],
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
        title: "Tur Istanbul: Dastur",
        name: "TOSHKENT – ISTANBUL",
        priorities: [
          "Istanbul aeroportiga kelish.",
          "Transfer va mehmonxonaga joylashish.",
          "Gid bilan uchrashuv.",
          "o'sh vaqt.",
          "Istanbulda tunash.",
        ],
      },
      {
        title: "Tur Istanbul: Dastur",
        name: "ISTANBUL EKSKURSIYASI",
        priorities: [
          "Mehmonxonada nonushta.",
          "Ko'k Masjid va Aya Sofiyani ziyorat qilish.",
          "Topqapi saroyini ko'rish.",
          "Tushlik.",
          "Katta Bozor va Bosfor bo'ylab sayohat.",
          "Dolmabahche saroyini ziyorat qilish.",
          "Mehmonxonada kechki ovqat.",
          "Bo'sh vaqt.",
        ],
      },
    ],
    children: {
      id: "antalia",
      title: "Antaliya: Yerdagi Jannat",
      tourInfo: [
        "Tavr tog'lari bilan o'ralgan, yam-yashil go'zal Antaliya shahri – Turkiya Rivyerasining eng chiroyli shahri! Siz eski shahar Kaleichini ko'rasiz, bu yerda yam-yashil tepaliklarda qizil tomli kichik g'ishtli uylar tarqalgan. Shaharning ramzlari bo'lgan Riflenaya minora yoki \"gofra\" minora, shahar mudofaa devorlarining bir qismi bo'lgan soat minorasi. Shahar tarix va madaniyatga boy, shuningdek, zargarlik buyumlari, charm buyumlar va qo'l to'qilgan gilamlar katta savdo qiymatiga ega. Bundan tashqari, biz Antaliya sohilining durdonasi – Karpuzkaldiran sharsharasini ziyorat qilamiz, u 39 metr balandlikdan dengizga tushadi.",
      ],
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
          title: "Tur Istanbul: Dastur",
          name: "TOSHKENT – ISTANBUL",
          priorities: [
            "Istanbul aeroportiga kelish.",
            "Transfer va mehmonxonaga joylashish.",
            "Gid bilan uchrashuv.",
            "o'sh vaqt.",
            "Istanbulda tunash.",
          ],
        },
        {
          title: "Tur Istanbul: Dastur",
          name: "ISTANBUL EKSKURSIYASI",
          priorities: [
            "Mehmonxonada nonushta.",
            "Ko'k Masjid va Aya Sofiyani ziyorat qilish.",
            "Topqapi saroyini ko'rish.",
            "Tushlik.",
            "Katta Bozor va Bosfor bo'ylab sayohat.",
            "Dolmabahche saroyini ziyorat qilish.",
            "Mehmonxonada kechki ovqat.",
            "Bo'sh vaqt.",
          ],
        },
      ],
    },
  },
];
