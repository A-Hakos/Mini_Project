import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PopularityCard from "./components/CoffeeCardRecommended/PopularityCard";
import RecomendedCoffeShop from "./components/CoffeeCardRecommended/RecomendedCoffeShop";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Get Header component */}
        <Header />

        {/* Get Content Component */}
        <main className="flex-grow">
          <Navbar />
          <div class="bg-gradient-to-b from-slate-950 via-blue-900 to-white min-h-screen text-white">
            <h1 className="text-3xl font-bold">Portofolio Aditya Hakos</h1>
            <p>Hi my name Aditya Hakos Peristiwanto</p>
            <PopularityCard />
            <RecomendedCoffeShop />
          </div>
        </main>

        {/* Get Footer component */}
        <Footer />
      </div>
    </>
  );
}

export default App;
