"use Client";

import React from "react";
import CardGeneral from "../ui/Card/CardGeneral";

export default function RecomendedCoffeShop() {
  const coffeeShops = [
    {
      title: "Coffee Shop A",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "This is a simple card with some content.",
      footer: "Footer content",
      linkDetail: (
        <a href="#" className="text-blue-500 hover:underline">
          Learn more
        </a>
      ),
      imageUrl: "/banner_awal.png",
    },
    {
      title: "Coffee Shop B",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "This is a simple card with some content.",
      footer: "Footer content",
      linkDetail: (
        <a href="#" className="text-blue-500 hover:underline">
          Learn more
        </a>
      ),
      imageUrl: "/banner_testi.png",
    },
  ];
  return (
    <>
      <div>
        <img
          src="/RecomendCoffeeShopLogo.png"
          alt="Coffe Shop"
          className="w-8 h-8 inline-block "
        />
        <div className="text-2xl font-bold text-gray-800 inline-block ml-4">
          Recommended Coffee Shop
        </div>
        <div className="mt-6 flex flex-wrap -mx-4">
          {coffeeShops.map((shop) => (
            <CardGeneral
              key={shop.title}
              title={shop.title}
              desc={shop.desc}
              content={shop.content}
              footer={shop.footer}
              linkDetail={shop.linkDetail}
              imageUrl={shop.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}
