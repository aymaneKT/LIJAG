import img1 from "../Images/DSC_6926.png";
import img2 from "../Images/DSC_6967.png";
import img3 from "../Images/oficial-04906.png";
// import img4 from "../Images/DSC_6967.png";
import DecryptedText from "./Utils/DecryptedText";

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="flex gap-2 mb-4 items-center flex-wrap overflow-hidden max-[903px]:flex-wrap">
        <img
          loading="lazy"
          src={img3}
          className="max-w-full  h-auto grow w-[300px] min-w-[300px] object-cover object-center max-[500px]:object-center"
          alt="oficial-04906"
        />
        <img
          loading="lazy"
          src={img1}
          className="max-w-full  h-auto grow w-[300px] min-w-[300px] object-cover object-center max-[500px]:object-center"
          alt="DSC_6926"
        />
        <img
          loading="lazy"
          src={img2}
          className="max-w-full  h-auto grow w-[300px] min-w-[300px] object-cover object-center max-[500px]:object-center max-[903px]:aspec/normal  max-[1000px]:aspect-video"
          alt="DSC_6967"
        />
      </div>
      <div className="absolute  -bottom-7 whitespace-pre flex items-center flex-col left-1/2 gap-2 -translate-1/2 text-2xl">
        {/* <h2 className=" text-white font-['Nouveau_IBM'] text-xl mb-1">
          "Bad ones into good ones"
        </h2> */}
        <div className=" text-center text-white font-['Nouveau_IBM'] text-xl">
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
        <button className="relative text-white z-10 border-2   border-white px-4 overflow-hidden rounded-full cursor-pointer font-['Nouveau_IBM'] flex items-center justify-center group">
          View More
          <span className="absolute left-1/2 -z-20 bottom-0 -translate-x-1/2  bg-[#74896C] h-0 w-full rounded-full transition-all duration-300 group-hover:h-full"></span>
        </button>
      </div>
    </div>
  );
}
