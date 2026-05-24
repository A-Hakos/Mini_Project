// ✅ useNavbar.js yang benar
import { useState } from "react";

export default function useNavbar() {
  // Semua hooks HARUS di atas, tanpa kondisi apapun sebelumnya
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleNavigation = (label, href) => {
    setActiveLink(label);
    setIsOpen(false);
    if (href?.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (href) {
      window.location.href = href;
    }
  };

  return { isOpen, activeLink, toggleMenu, handleNavigation };
}
