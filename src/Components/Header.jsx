import { useEffect, useState } from "react";
import logo from "../Images/Logo_FULL_Color_vectorRGB_Mesa de trabajo 1.png";
import Checkbox from "./CheckBox";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerList = ["Manifest", "Gallery", "Products", "Contact"];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]);

  return (
    <>
      <div className="max-[1250px]:flex items-center z-5 justify-between relative mb py-2">
        <div
          className={`flex items-center bg-white justify-between max-[1250px]:h-screen overflow-hidden max-[1250px]:top-0 uppercase font-['JetBrains_Mono'] transition-all duration-500 max-[1250px]:absolute w-[100%] max-[1250px]:flex-col max-[1250px]:gap-4 max-[1250px]:justify-center ${
            isOpen ? "max-[1250px]:left-0" : "max-[1250px]:left-[-100%]"
          }`}
        >
          <ul className="flex items-center grow justify-start gap-7 max-[1250px]:flex-col max-[1250px]:grow-0 max-[1250px]:gap-4">
            {headerList.slice(0, 2).map((e, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all duration-200 hover:text-[#8A8A8A]"
              >
                <span className="font-mono text-[12px]">{e.slice(0, -2)}</span>
                <span className="font-extrabold ">{e.slice(-2)}</span>
              </li>
            ))}
          </ul>

          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[120px] max-w-[100%] max-[1250px]:hidden"
            />
          </a>

          <ul className="flex items-center grow justify-end gap-8 max-[1250px]:flex-col max-[1250px]:grow-0 max-[1250px]:gap-4">
            {headerList.slice(2).map((e, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all duration-200 hover:text-[#8A8A8A]"
              >
                <span className="font-mono text-[12px]">{e.slice(0, -2)}</span>
                <span className="font-extrabold">{e.slice(-2)}</span>
              </li>
            ))}
          </ul>
        </div>

        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[150px] min-[1250px]:hidden"
          />
        </a>

        <button className="hidden max-[1250px]:block z-10">
          <Checkbox setIsOpen={setIsOpen} isOpen={isOpen} />
        </button>
      </div>
    </>
  );
}
