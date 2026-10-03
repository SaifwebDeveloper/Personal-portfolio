import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 site-grid opacity-40" />

        <div className="relative">
          <Home />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;