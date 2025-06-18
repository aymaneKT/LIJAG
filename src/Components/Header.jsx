import { useEffect, useState } from "react";
import logo from "../Images/Logo_FULL_Color_vectorRGB_Mesa de trabajo 1.png";
import Checkbox from "./CheckBox";
import { useNavigate } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerList = ["Manifest", "Gallery", "Products", "Contact"];
  const [isAnimatedLogo, setIsAnomatedLogo] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]);

  return (
    <>
      <div
        className="max-[1250px]:flex items-center z-5 font-['JetBrains_Mono'] font-medium justify-between relative mb py-3"
        style={{
          fontSize: "clamp(0.95rem, 0.75vw, 1.2rem)",
        }}
      >
        <div
          className={`flex items-center bg-white justify-between max-[1250px]:h-screen overflow-hidden max-[1250px]:top-0 uppercase font-['JetBrains_Mono'] font-medium transition-all duration-500 max-[1250px]:absolute w-[100%] max-[1250px]:flex-col max-[1250px]:gap-4 max-[1250px]:justify-center ${
            isOpen ? "max-[1250px]:left-0" : "max-[1250px]:left-[-120%]"
          }`}
        >
          <ul className="flex items-center grow justify-start gap-7 max-[1250px]:flex-col max-[1250px]:grow-0 max-[1250px]:gap-4">
            {headerList.slice(0, 2).map((e, i) => (
              <li
                onClick={() => {
                  navigate(`/${e}`);
                  setIsOpen(false);
                }}
                key={i}
                className="cursor-pointer transition-all duration-200 hover:text-[#8A8A8A]"
              >
                <span>{e.slice(0, -2)}</span>
                <span>{e.slice(-2)}</span>
              </li>
            ))}
          </ul>

          <a href="/">
            <img
              onMouseEnter={() => {
                setIsAnomatedLogo(true);
              }}
              onMouseLeave={() => {
                setIsAnomatedLogo(false);
              }}
              src={logo}
              alt="Logo"
              className="max-w-[100%] max-[1250px]:hidden w-[120px]"
            />
          </a>

          <ul className="flex items-center grow justify-end gap-8 max-[1250px]:flex-col max-[1250px]:grow-0 max-[1250px]:gap-4">
            {headerList.slice(2).map((e, i) => (
              <li
                onClick={() => {
                  navigate(`/${e}`);
                  setIsOpen(false);
                }}
                key={i}
                className="cursor-pointer transition-all duration-200 hover:text-[#8A8A8A]"
              >
                <span>{e.slice(0, -2)}</span>
                <span>{e.slice(-2)}</span>
              </li>
            ))}
          </ul>
        </div>

        <a href="/">
          <img
            onMouseEnter={() => {
              setIsAnomatedLogo(true);
            }}
            onMouseLeave={() => {
              setIsAnomatedLogo(false);
            }}
            src={logo}
            alt="Logo"
            className="min-[1250px]:hidden w-[120px]"
          />
        </a>

        <button className="hidden max-[1250px]:block z-10">
          <Checkbox setIsOpen={setIsOpen} isOpen={isOpen} />
        </button>
      </div>
    </>
  );
}
