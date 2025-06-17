import FooterComponent from "./Components/FooterComponent";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ContactForm from "./Components/ContactForm";
import { Routes, Route, useLocation } from "react-router";
import NotFound from "./Components/404";
import ManifestPage from "./Components/Manifest";

function App() {
  const location = useLocation().pathname.toLowerCase();
  const isScreenView = location === "/" || location.includes("home");

  return (
    <>
      <div
        className={`${
          isScreenView
            ? "h-screen flex flex-col max-[800px]:px-5 px-10"
            : "max-[800px]:px-5 px-10"
        }`}
      >
        <Header />
        {isScreenView ? (
          <div className="flex-1 min-h-0">
            <HeroSection />
          </div>
        ) : (
          <>
            <Routes>
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/Manifest" element={<ManifestPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        )}
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
