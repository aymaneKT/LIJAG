// import { useState, useEffect } from "react";
// import Loader from "../Components/Loader";
// import img1 from "../Images/DSC_6926.png";
// import img2 from "../Images/DSC_6967.png";
// import img3 from "../Images/oficial-04906.png";
import DecryptedText from "./Utils/DecryptedText";
import AnimationLandingPage from "../Images/AnimationeLandingPage.gif";

export default function HeroSection() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setInterval(() => {
  //     setIsLoading(false);
  //   }, 1500);
  // }, []);
  // useEffect(() => {
  //   document.body.style.overflow = isLoading ? "hidden" : "visible";
  // }, [isLoading]);

  return (
    <>
      {/* <Loader isLoading={isLoading} /> */}
      <div className="h-full flex flex-col relative">
        <div className="flex-1 flex items-center relative justify-center  min-h-0">
          <img
            src={AnimationLandingPage}
            alt="Landing Animation"
            className="w-full h-full object-left object-cover"
          />
        </div>

        {/* <div className="flex w-full items-center gap-2 justify-between flex-wrap pt-3 px-2  bottom-10 text-white  ">
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://www.instagram.com/lijag_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6 text-gray-600 hover:text-black transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@lijag000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg
                className="w-6 h-6 text-gray-600 hover:text-black transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.6 4.3c-1.3-.5-4.6-.5-7.6-.5s-6.3 0-7.6.5c-1.3.5-2.3 1.4-2.5 2.6-.5 1.4-.5 4.2-.5 5.1s0 3.7.5 5.1c.2 1.2 1.2 2.1 2.5 2.6 1.3.5 4.6.5 7.6.5s6.3 0 7.6-.5c1.3-.5 2.3-1.4 2.5-2.6.5-1.4.5-4.2.5-5.1s0-3.7-.5-5.1c-.2-1.2-1.2-2.1-2.5-2.6zM9.8 15.3v-6l5.6 3-5.6 3z" />
              </svg>
            </a>
          </div>

          <div className="text-center text-black font-['Nouveau_IBM'] text-lg sm:text-xl">
            <DecryptedText
              text="'Bad ones into good ones'"
              speed={50}
              maxIterations={20}
              characters="ABCD1234!?"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
              revealDirection="center"
            />
          </div>

          <button className=" relative text-black z-10 border-2 border-black    px-4 overflow-hidden rounded-full cursor-pointer font-['Nouveau_IBM'] flex items-center justify-center group hover:text-white">
            View More
            <span className="absolute left-1/2 -z-20 bottom-0 -translate-x-1/2  bg-[#74896C] h-0 w-full rounded-full transition-all duration-300 group-hover:h-full"></span>
          </button>
        </div> */}
        <button style={{
          fontSize: "clamp(1rem, 0.8vw, 1.3rem)",
        }} className=" absolute bottom-4 right-4 text-white z-10 border-2 border-white    px-4 overflow-hidden rounded-full cursor-pointer font-['Nouveau_IBM'] flex items-center justify-center group hover:text-white">
          View More
          <span className="absolute left-1/2 -z-20 bottom-0 -translate-x-1/2  bg-[#74896C] h-0 w-full rounded-full transition-all duration-300 group-hover:h-full"></span>
        </button>
      </div>
    </>
  );
}
