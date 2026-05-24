import HeroActions from "./HeroActions";
import HeroProfile from "./HeroProfile";
import HeroText from "./HeroText";
import { HERO_BUTTONS, HERO_CONFIG } from "../../constants/hero.constants";
import { useScrollTo } from "../../hooks/useScrollTo";
import { heroStyles } from "../../styles/hero.styles";

/**
 * HeroSection
 * Komponen utama hero — mengambil data dari constants,
 * logika scroll dari hook, dan merender subcomponents.
 */
export default function HeroSection() {
  const { scrollTo } = useScrollTo();

  return (
    <main className="flex-grow flex items-center justify-center p-8 relative">
      <div style={heroStyles.grid} />
      <div style={heroStyles.glow} />

      <div
        className="hero-content float flex flex-col md:flex-row justify-between items-center gap-12 w-full max-w-6xl mx-auto px-6"
        style={{ zIndex: 1 }}
      >
        {/* Kiri: Teks + Tombol + Card */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <HeroText
            greeting={HERO_CONFIG.greeting}
            name={HERO_CONFIG.name}
            tagline={HERO_CONFIG.tagline}
          />

          <HeroActions buttons={HERO_BUTTONS} onScroll={scrollTo} />

          <div className="pt-4 space-y-4 text-left"></div>
        </div>

        {/* Kanan: Foto Profil */}
        <HeroProfile
          src={HERO_CONFIG.profileImage.src}
          alt={HERO_CONFIG.profileImage.alt}
        />
      </div>
    </main>
  );
}
