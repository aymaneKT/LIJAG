import logo from "../Images/Logo_FULL_Color_vectorRGB_Mesa de trabajo 1.png";
import { useEffect, useState } from "react";

export default function FooterComponent() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <footer className="bg-white   w-full  mt-6 ">
      <div className="w-full text-center">
        <div className="w-full flex  flex-wrap  items-center justify-between item  py-2">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="LIJAG Logo"
              className="h-8 mr-2 max-w-[120px] w-auto object-contain"
            />
            {/* <span className="font-bold text-lg whitespace-nowrap">LIJAG</span> */}
          </a>
          <p className="text-sm text-gray-500">
            © 2025{" "}
            <a href="#" className="hover:underline">
              Lijag™
            </a>
            . All rights reserved.
          </p>
          <p>
            <span className="text-sm text-gray-500">
              {currentTime.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
