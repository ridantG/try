import "./App.css";

// Import all sections
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WhyDiff from "./components/whyDiff";
import Journey from "./components/journey";
import Stats from "./components/stats";
import Contest from "./components/contest";
import Faq from "./components/faq";
import WhoIsAdmere from "./components/whoIsAdmere";
import Footer from "./components/footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-background text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* All Sections */}
      <main>
        <Hero />
        <WhyDiff />
        <Journey />
        <Stats />
        <Contest />
        <Faq />
        <WhoIsAdmere />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
