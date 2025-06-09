import FooterComponent from "./Components/FooterComponent";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";


function App() {
  return (
    <div className="px-10 bg-white">
      <Header />
      <HeroSection />

      {/* <InstagramPromo /> */}
      <FooterComponent />
    </div>
  );
}

export default App;
