/**
 * HeroProfile
 * Menampilkan foto profil dengan border dan efek glow.
 *
 * @param {{ src: string, alt: string }} props
 */
export default function HeroProfile({ src, alt }) {
  return (
    <div className="flex-shrink-0 bg-zinc-800/50 p-4 rounded-2xl shadow-2xl border border-white/5 dynamic-glow">
      <img
        src={src}
        alt={alt}
        className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] object-cover rounded-xl"
      />
    </div>
  );
}
