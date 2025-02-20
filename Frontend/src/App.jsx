import HeroSection from "./components/HeroSection";
import HerosecTwo from "./components/HerosecTwo";
import Navbar from "./components/Navbar";
import How_it_works from "./components/How_it_works";

function App() {
  return (
    <>
      <div className="w-full h-screen  ">
        <Navbar />
        <HeroSection />
        <HerosecTwo />
        <How_it_works />
      </div>
    </>
  );
}

export default App;
