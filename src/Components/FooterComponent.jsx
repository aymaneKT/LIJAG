import logo from "../Images/Sketch_NEGRO.png";
import { useEffect, useState } from "react";

export default function FooterComponent() {
  const [currentTime, setCurrentTime] = useState("");
  const [location, setLocation] = useState({
    country: "",
    region: "",
  });

  const fetchLocation = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setLocation({
      ...location,
      country: data.country_name,
      region: data.region,
    });
  };

  useEffect(() => {
    fetchLocation();
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
      });
      setCurrentTime(formattedTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <footer className="bg-transparent w-full mt-3 pb-1 ">
      <div className="w-full text-center">
        <div className="w-full flex flex-wrap  text-sm text-gray-500 items-center justify-between item  py-2">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="LIJAG Logo"
              className="h-8 mr-2 max-w-[120px] w-auto object-contain"
            />
          </a>
          <p className="text-sm grow  text-gray-500">
            © 2025{" "}
            <a href="#" className="hover:underline">
              Lijag™
            </a>
            . All rights reserved.
          </p>
          <p >
            {location.country + " "}
            {currentTime.toLocaleString()}
          </p>
        </div>
      </div>
    </footer>
  );
}
