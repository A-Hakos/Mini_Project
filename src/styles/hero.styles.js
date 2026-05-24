export const heroStyles = {
  grid: {
    position: "absolute",
    inset: 0,
    opacity: 0.1,
  },

  glow: {
    position: "absolute",
    top: "20%",
    left: "30%",
    width: "400px",
    height: "400px",
    background: "rgba(0,245,160,0.15)",
    filter: "blur(100px)",
    borderRadius: "50%",
  },

  tag: {
    fontSize: "14px",
    letterSpacing: "2px",
    color: "#00f5a0",
    marginBottom: "8px",
    textTransform: "uppercase",
  },

  title: {
    fontSize: "48px",
    fontWeight: "bold",
    lineHeight: "1.2",
  },

  tagline: {
    fontSize: "20px",
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },

  cursor: {
    width: "2px",
    height: "24px",
    backgroundColor: "#00f5a0",
    display: "inline-block",
  },
};

export const buttonStyles = {
  base: {
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: "bold",
    border: "1px solid #00f5a0",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s",
  },

  secondary: {
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: "bold",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "transparent",
    color: "#aaa",
    cursor: "pointer",
    transition: "all 0.3s",
  },
};
