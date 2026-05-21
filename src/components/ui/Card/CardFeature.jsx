import React from "react";

const CardFeature = ({ title, desc, icon }) => {
  return (
    <div className="flex-shrink-0 w-[220px] relative overflow-hidden bg-[#eaf4e9] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border border-transparent hover:border-green-200 transition-all">
      <div className="w-12 h-12 bg-[#1a4d2e] rounded-full flex items-center justify-center mb-3">
        {React.cloneElement(icon, { size: 30, color: "white" })}
      </div>
      <h3 className="text-[#1a4d2e] font-bold text-base mb-1">{title}</h3>
      <p className="text-black text-[11px] leading-tight">{desc}</p>
    </div>
  );
};

export default CardFeature;
