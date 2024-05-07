import Accordian from "../components/LandingPage/Accordian";
import Footer from "../components/LandingPage/Footer";
import Headline from "../components/LandingPage/Headline";
import HeroSection from "../components/LandingPage/Hero";
import Navbar from "../components/LandingPage/NavBar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Headline />
        <HeroSection />
        <Accordian />
      </main>
      <Footer />
    </>
  );
}
