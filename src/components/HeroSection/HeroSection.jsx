// src/components/Hero/HeroSection.jsx
import useHero from "./useHero";
import { HERO_DATA } from "./Hero_cons";

// ── Icon Components ────────────────────────────────────────────
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/>
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const SOCIAL_ICONS = { github: GitHubIcon, linkedin: LinkedInIcon, twitter: TwitterIcon };

// ── Main Component ─────────────────────────────────────────────
export default function HeroSection() {
  const { typedText, mounted, handleScroll } = useHero();
  const { greeting, name, tagline, location, available, availableText,
    stats, cta, socials, techStack, avatar } = HERO_DATA;

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center">

      {/* ── Background decorations ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Yellow glow top-right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-yellow-400/5 blur-[120px]" />
        {/* Subtle circle bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[80px]" />
        {/* Yellow accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div
            className={`flex flex-col gap-7 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Available badge */}
            {available && (
              <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/5">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-yellow-400 text-xs font-medium tracking-widest uppercase">
                  {availableText}
                </span>
              </div>
            )}

            {/* Greeting + Name */}
            <div className="space-y-2">
              <p className="text-gray-500 text-lg font-light tracking-wide">{greeting}</p>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight">
                {name.split(" ")[0]}{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                    {name.split(" ")[1]}
                  </span>
                  {/* underline accent */}
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full" />
                </span>
              </h1>
            </div>

            {/* Typewriter title */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-yellow-400 rounded-full flex-shrink-0" />
              <p className="text-xl sm:text-2xl text-gray-300 font-light tracking-wide min-h-[2rem]">
                {typedText}
                <span className="inline-block w-[2px] h-6 bg-yellow-400 ml-1 animate-pulse align-middle" />
              </p>
            </div>

            {/* Tagline */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              {tagline}
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
              <PinIcon />
              <span>{location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <button
                onClick={() => handleScroll(cta.primary.href)}
                className="group flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-sm rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/25 hover:-translate-y-0.5"
              >
                {cta.primary.label}
                <ArrowIcon />
              </button>
              <button
                onClick={() => handleScroll(cta.secondary.href)}
                className="group flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white font-semibold text-sm rounded-full transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5"
              >
                {cta.secondary.label}
                <DownloadIcon />
              </button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-gray-600 text-xs uppercase tracking-widest">Follow</span>
              <div className="w-8 h-[1px] bg-gray-700" />
              {socials.map(({ label, href, icon }) => {
                const Icon = SOCIAL_ICONS[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-yellow-400 hover:border-yellow-400/40 hover:bg-yellow-400/5 transition-all duration-200"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div
            className={`flex flex-col gap-8 transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Avatar card */}
            <div className="relative mx-auto lg:mx-0 lg:ml-auto">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl border border-yellow-400/15 rotate-3" />
              <div className="absolute -inset-3 rounded-3xl border border-white/5 -rotate-2" />

              {/* Avatar */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/10">
                {avatar ? (
                  <img src={avatar} alt={name} className="w-full h-full object-cover" />
                ) : (
                  /* Placeholder avatar */
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 border border-yellow-400/20 flex items-center justify-center">
                      <span className="text-3xl font-black text-yellow-400/60">
                        {name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-gray-600 text-xs">Add your photo</span>
                  </div>
                )}

                {/* Yellow corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-400/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-400/10 to-transparent" />
              </div>

              {/* Floating badge — years exp */}
              <div className="absolute -bottom-4 -left-4 bg-[#111] border border-white/10 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl shadow-black/50">
                <span className="text-2xl font-black text-yellow-400">3+</span>
                <span className="text-gray-400 text-xs leading-tight">
                  Years<br />Experience
                </span>
              </div>

              {/* Floating badge — available */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-2xl px-3 py-2 shadow-lg shadow-yellow-400/20">
                <span className="text-black text-xs font-bold">Available ✓</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#111] border border-white/[0.07] rounded-2xl p-4 text-center hover:border-yellow-400/20 transition-colors duration-300 group"
                >
                  <p className="text-2xl font-black text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {value}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="space-y-3">
              <p className="text-gray-600 text-xs uppercase tracking-widest">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/[0.04] border border-white/[0.08] rounded-full hover:text-yellow-400 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-gray-600 text-xs uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}