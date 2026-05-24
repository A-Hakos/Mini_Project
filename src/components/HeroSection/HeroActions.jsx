import { buttonStyles } from "../../styles/hero.styles";

/**
 * HeroActions
 * Render tombol CTA berdasarkan config `buttons`.
 *
 * @param {{
 *   buttons: Array<{ id: string, label: string, icon?: string, scrollTarget: string, variant: 'primary' | 'secondary' }>,
 *   onScroll: (target: string) => void
 * }} props
 */
export default function HeroActions({ buttons, onScroll }) {
  return (
    <div
      className="md:justify-start"
      style={{
        display: "flex",
        gap: 16,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {buttons.map(({ id, label, icon, scrollTarget, variant }) => (
        <button
          key={id}
          style={
            variant === "primary" ? buttonStyles.base : buttonStyles.secondary
          }
          onClick={() => onScroll(scrollTarget)}
        >
          {label} {icon && <span style={{ fontSize: 16 }}>{icon}</span>}
        </button>
      ))}
    </div>
  );
}
