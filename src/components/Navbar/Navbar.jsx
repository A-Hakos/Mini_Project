// src/components/Navbar/Navbar.jsx
import useNavbar from "./useNavbar";
import { MENU_LINKS } from "./Nav_cons";

export default function Navbar() {
  const { isOpen, activeLink, toggleMenu, handleNavigation } = useNavbar();

  return (
    <>
      {/* DESKTOP — Floating pill navbar */}
      <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center gap-2 bg-[#1a1a1a] rounded-full px-2 py-2 shadow-xl shadow-black/40 opacity-70">
        {/* Logo icon */}
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-black"
            fill="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              transform="rotate(-30 12 12)"
            />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
        </div>

        {/* Nav links */}
        <div className="flex items-center px-2">
          {MENU_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link.label, link.href)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                activeLink === link.label
                  ? "text-white bg-white/10"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Email CTA pill */}
        {/* <button
          onClick={() => handleNavigation("contact", "mailto:ihyaet@gmail.com")}
          className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
        >
          ihyaet@gmail.com
        </button> */}
      </nav>

      {/* MOBILE — Floating pill navbar */}
      <nav className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-[#1a1a1a] rounded-full px-2 py-2 shadow-xl shadow-black/40 w-[calc(100%-2rem)]">
        {/* Logo icon */}
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-black"
            fill="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              transform="rotate(-30 12 12)"
            />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
        </div>

        <span className="flex-1 text-white text-sm font-medium px-2">Menu</span>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="w-9 h-9 rounded-full flex flex-col justify-center items-center gap-1.5 hover:bg-white/10 transition-colors"
          aria-label="Open menu"
        >
          <span
            className={`block h-[1.5px] w-5 bg-white rounded transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[4px]" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-white rounded transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}
          />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 bg-[#1a1a1a]/95 backdrop-blur-xl transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-3 px-6">
          {MENU_LINKS.map((link, index) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link.label, link.href)}
              style={{ transitionDelay: `${index * 60}ms` }}
              className={`text-2xl font-semibold w-full py-4 text-center rounded-2xl transition-all duration-300 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } ${
                activeLink === link.label
                  ? "text-white bg-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            className="mt-4 bg-white text-black text-base font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            style={{ transitionDelay: `${MENU_LINKS.length * 60}ms` }}
          >
            ihyaet@gmail.com
          </button>
        </div>
      </div>
    </>
  );
}
