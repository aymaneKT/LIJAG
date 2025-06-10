import FooterComponent from "./Components/FooterComponent";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ContactForm from "./Components/ContactForm";
import { Routes, Route } from "react-router";
import NotFound from "./Components/404";

function App() {
  return (
    <div className="px-10">
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
