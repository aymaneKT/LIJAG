import { useEffect, useState } from "react";
import FooterComponent from "./Components/FooterComponent";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import HeroSection from "./Components/HeroSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "visible";
  }, [isLoading]);
  return (
    <div className="px-10 bg-white">
      <Loader isLoading={isLoading} />
      <Header />
      <HeroSection />
      <FooterComponent />
    </div>
  );
}

export default App;
