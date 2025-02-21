import HeroSection from "./components/HeroSection";
import HerosecTwo from "./components/HerosecTwo";
import Navbar from "./components/Navbar";
import How_it_works from "./components/How_it_works";
import Features from "./components/Features";
import FooterComponent from "./components/FooterComponent";
import Plan from "./components/Plan";
import FAQ from "./components/Faq";
import Review from "./components/Review";


function App() {
  return (
    <>
      <div className="w-full h-screen  ">
        <Navbar />
        <HeroSection />
        <HerosecTwo />
        <How_it_works />
        <Features/>
        <Plan/>
        <FAQ/>
        <Review/>
        <FooterComponent/>
      </div>
    </>
  );
}

export default App;
