"use Client";

import React from "react";
import { Mountain, Laptop, Camera, Wallet, Star } from "lucide-react";
import CardFeature from "../ui/Card/CardFeature";

export default function RecomendedCoffeShop() {
  const features = [
    {
      title: "View Alam",
      desc: "Nikmati kopi dengan pemandangan terbaik",
      icon: <Mountain />,
    },
    {
      title: "WFC Friendly",
      desc: "Tempat nyaman untuk bekerja & produktif",
      icon: <Laptop />,
    },
    {
      title: "Instagramable",
      desc: "Spot cantik untuk foto dan kontenmu",
      icon: <Camera />,
    },
    {
      title: "Budget Friendly",
      desc: "Ngopi enak tanpa bikin kantong bolong",
      icon: <Wallet />,
    },
  ];

  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      <div className="flex items-center justify-center mb-10 w-full">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-[#7f088a]">
          <Star size={28} fill="#7f088a" className="text-[#430249]" /> About Me
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-full">
        {features.map((item, index) => (
          <CardFeature
            key={index}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
