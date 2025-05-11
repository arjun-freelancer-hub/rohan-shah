import CardSection from "./components/CardsSection";
import Navbar from "./Navbar";
import HeroSection from "./components/HeroSection";
import BehindThePassion from "./components/BehindThePassion";
import MedalSection from "./components/MedalSection";
import ProudMoments from "./components/ProudMoments";
import InsightfulReads from "./components/InsightfulReads";
import Footer from "./components/Footer";

export default function Home() {
  return (

    <>
      <HeroSection />
      <CardSection />
      <BehindThePassion />
      <MedalSection />
      <ProudMoments />
      <InsightfulReads />
    </>
  );
}
