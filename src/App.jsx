import Collaboration from "./Components/Collaboration";
import FooterComponent from "./Components/FooterComponent";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import InstagramPromo from "./Components/InstagramPromo";
import Statement from "./Components/InstagramPromo";

function App() {
  return (
    <div className="px-10 bg-white">
      <Header />
      <HeroSection />
      {/* <Collaboration /> */}
      <InstagramPromo />
      <FooterComponent />
    </div>
  );
}

export default App;
