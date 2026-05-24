import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";

/**
 * App
 * Root component — hanya bertanggung jawab atas layout shell.
 * Semua logika dan data ada di layer masing-masing.
 */
function App() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-b from-black via-green-900 to-green-600">
      <Header />
      <Navbar />
      <HeroSection />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
