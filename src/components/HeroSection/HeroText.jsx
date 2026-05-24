import { heroStyles } from "../../styles/hero.styles";

/**
 * HeroText
 * Menampilkan greeting, nama, dan tagline dengan efek cursor berkedip.
 *
 * @param {{ greeting: string, name: string, tagline: string }} props
 */
export default function HeroText({ greeting, name, tagline }) {
  return (
    <div>
      <p style={heroStyles.tag}>{greeting}</p>

      <h1 style={heroStyles.title}>
        <span style={{ color: "#fff" }}>Hello, I'm </span>
        <span style={{ color: "#00f5a0" }}>{name}</span>
      </h1>

      <p style={heroStyles.tagline}>
        <span style={{ color: "#888" }}>{tagline}</span>
        <span style={heroStyles.cursor} aria-hidden="true" />
      </p>
    </div>
  );
}
