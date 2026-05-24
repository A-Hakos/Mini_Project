// src/components/Hero/Hero_cons.js

export const HERO_DATA = {
  greeting: "Hello, I'm",
  name: "Aditya Hakos",
  title: "Self Learner",
  tagline: "Learn a website programming starting 1 Mei 2026.",
  location: "Semarang, Indonesia",
  available: true,
  availableText: "On-going",
  stats: [
    { value: "0", label: "Years Exp." },
    { value: "40+", label: "Projects" },
    { value: "20+", label: "Clients" },
  ],
  cta: {
    primary: { label: "View My Work", href: "#work" },
    secondary: { label: "Download CV", href: "/cv.pdf" },
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/A-Hakos",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: "linkedin",
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: "twitter",
    },
  ],
  techStack: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind"],
  avatar: "/PP_Hakos.png", // ganti dengan URL foto kamu
};
