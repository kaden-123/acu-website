import './App.css';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-amber-50 font-sans">
      <NavBar />
      <section id="hero" className="scroll-mt-16"><Hero /></section>
      <section id="bio" className="scroll-mt-16"><Bio /></section>
      <section id="services" className="scroll-mt-16"><Services /></section>
      <section id="contact" className="scroll-mt-16"><Contact /></section>
      <section id="FAQ" className="scroll-mt-16"><FAQ /></section>
      <Footer />
    </div>
  );
}

export default App;