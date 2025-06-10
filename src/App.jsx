import { useEffect, useState } from "react";
import FooterComponent from "./Components/FooterComponent";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import HeroSection from "./Components/HeroSection";
import ContactForm from "./Components/ContactForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "visible";
  }, [isLoading]);
  return (
    <div className="min-[500px]:px-10 max-[499px]:px-5 bg-white">
      <Header />
      {/* <Loader isLoading={isLoading} />
      <Header />
      <HeroSection />
      <FooterComponent /> */}
      <ContactForm />
    </div>
  );
}

export default App;
