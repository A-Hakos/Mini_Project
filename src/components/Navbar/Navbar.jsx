"use client";

import React from "react";
import { menuItem } from "@heroui/theme";
import { Button } from "@heroui/react";
import NavLink from "../ui/NavLink/NavLink";

export default function Navbar() {
  // menu items for the navbar
  const menuItems = ["About", "Project", "Skill", "Contact"];

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        {/* Mengganti p-1 dengan py-4 untuk memberikan ruang atas-bawah yang ideal */}
        <div className="py-4 px-6 flex flex-row items-center justify-between bg-black text-white shadow-md">
          <div className="text-xl font-bold tracking-wider text-sky-400" />

          {/* Navigasi Menu (Dibersihkan dari pb-4 md:pb-0 agar seimbang) */}
          <nav className="flex flex-row items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-sky-400 transition">
              ABOUT
            </a>
            <a href="#project" className="hover:text-sky-400 transition">
              PROJECT
            </a>
            <a href="#skill" className="hover:text-sky-400 transition">
              SKILL
            </a>
            <a href="#contact" className="hover:text-sky-400 transition">
              CONTACT
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
