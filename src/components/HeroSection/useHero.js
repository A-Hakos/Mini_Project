// src/components/Hero/useHero.js
import { useState, useEffect } from "react";

export default function useHero() {
  const [typedText, setTypedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const TITLES = ["Hello guys,", "this is my 2nd project", "wish me luck !!!"];

  // Mount animation trigger
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = TITLES[titleIndex];
    const speed = isDeleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(current.slice(0, typedText.length + 1));
        if (typedText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setTypedText(current.slice(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, titleIndex]);

  const handleScroll = (href) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  return { typedText, mounted, handleScroll };
}
