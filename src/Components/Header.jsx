import { useState } from "react";
import logo from "../Images/Logo_FULL_Color_vectorRGB_Mesa de trabajo 1.png";
import Checkbox from "./CheckBox";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerList = [
    "About Us",
    "Our Story",
    "Mission & Vision",
    "What We Believe",
    "Meet the Team",
    "Contact",
  ];

  return (
    <>
      <div className="max-[1250px]:flex items-center justify-between   relative  mb py-4">
        <div
          className={`flex items-center justify-between overflow-hidden  uppercase font-['JetBrains_Mono'] transition-all duration-500 max-[1250px]:absolute w-[100%] max-[1250px]:flex-col max-[1250px]:gap-8 max-[1250px]:top-[100%]   max-[1250px]:${
            isOpen ? "h-auto" : "h-0"
          }`}
        >
          <ul className="flex items-center grow  justify-start gap-7 max-[1250px]:flex-col">
            {headerList.slice(0, 3).map((e, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all duration-200 hover:text-[#8A8A8A]"
              >
                {<span>{e.slice(0, -2)}</span>}
                {<span className=" font-extrabold">{e.slice(-2)}</span>}
              </li>
            ))}
          </ul>
          <img
            src={logo}
            alt="Logo"
            className="w-[200px] max-w-[100%] max-[1250px]:hidden"
          />
          <ul className="flex items-center grow  justify-end gap-8  max-[1250px]:flex-col">
            {headerList.slice(3).map((e, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all duration-200 hover:text-[#8A8A8A]"
              >
                {<span>{e.slice(0, -2)}</span>}
                {<span className="font-extrabold">{e.slice(-2)}</span>}
              </li>
            ))}
          </ul>
        </div>
        <img src={logo} alt="Logo" className="w-[150px]  min-[1250px]:hidden" />
        <div
          className="hidden max-[1250px]:block"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Checkbox />
        </div>
      </div>
    </>
  );
}
