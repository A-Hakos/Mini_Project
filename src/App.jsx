import { useState } from "react"; // Tambahkan jika menggunakan state
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PopularityCard from "./components/CoffeeCardRecommended/PopularityCard";
import RecomendedCoffeShop from "./components/CoffeeCardRecommended/RecomendedCoffeShop";

function App() {
  // 1. Definisikan variabel text efek mengetik (contoh placeholder)
  const typed = "Data Analyst & Digital Marketer";

  // 2. Definisikan fungsi scrollTo agar tombol tidak error saat diklik
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 3. Definisikan objek styles (sesuaikan dengan style aslimu jika ada yang beda)
  const styles = {
    grid: { position: "absolute", inset: 0, opacity: 0.1 },
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
    heroTag: {
      fontSize: "14px",
      uppercase: "true",
      letterSpacing: "2px",
      color: "#00f5a0",
      marginBottom: "8px",
    },
    heroTitle: { fontSize: "48px", fontWeight: "bold", lineHeight: "1.2" },
    heroSub: {
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
    btn: {
      padding: "12px 24px",
      borderRadius: "8px",
      fontWeight: "bold",
      border: "1px solid #00f5a0",
      background: "transparent",
      cursor: "pointer",
      transition: "all 0.3s",
    },
  };

  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-b from-black via-green-900 to-green-600">
      <Header />
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-8 relative">
        <div style={styles.grid} />
        <div style={styles.glow} />

        <div
          className="hero-content float flex flex-col md:flex-row justify-between items-center gap-12 w-full max-w-6xl mx-auto px-6"
          style={{ zIndex: 1 }}
        >
          {/* SISI KIRI: Teks Utama dan Tombol */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div>
              <p style={styles.heroTag}>Welcome to my portfolio</p>
              <h1 style={styles.heroTitle}>
                <span style={{ color: "#fff" }}>Hello, I'm </span>
                <span style={{ color: "#00f5a0" }}>Hakos</span>
              </h1>
              <p style={styles.heroSub}>
                <span style={{ color: "#888" }}>{typed}</span>
                <span style={styles.cursor} />
              </p>
            </div>

            {/* Tombol Aksi */}
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
              className="md:justify-start"
            >
              <button
                className="btn"
                style={styles.btn}
                onClick={() => scrollTo("Projects")}
              >
                View Projects <span style={{ fontSize: 16 }}>→</span>
              </button>
              <button
                className="btn"
                style={{
                  ...styles.btn,
                  color: "#aaa",
                  borderColor: "#ffffff15",
                }}
                onClick={() => scrollTo("Contact")}
              >
                Contact Me
              </button>
            </div>

            {/* Bagian Card Pendukung di Sisi Kiri */}
            <div className="pt-4 space-y-4 text-left">
              <PopularityCard />
              <RecomendedCoffeShop />
            </div>
          </div>

          {/* SISI KANAN: Tempat Foto Profil Hitam Putih */}
          <div className="flex-shrink-0 bg-zinc-800/50 p-4 rounded-2xl shadow-2xl border border-white/5 dynamic-glow">
            <img
              src="/PP_Hakos.png"
              alt="Foto Profil Aditya Hakos"
              className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] object-cover rounded-xl"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
