import img1 from "../Images/DSC_6926.png";
import img2 from "../Images/DSC_6967.png";
import img3 from "../Images/oficial-04906.png";
import img4 from "../Images/DSC_6967.png";

export default function HeroSection() {
  return (
    <div className="flex gap-2 mb-4 items-center flex-wrap overflow-hidden max-[903px]:flex-wrap">
      <img
        src={img3}
        className="max-w-full  h-auto grow w-[300px] min-w-[400px] object-cover object-center"
        alt="oficial-04906"
      />
      <img
        src={img1}
        className="max-w-full  h-auto grow w-[300px] min-w-[400px] object-cover object-center"
        alt="DSC_6926"
      />
      <img
        src={img2}
        className="max-w-full  h-auto grow w-[300px] min-w-[400px] object-cover object-center max-[903px]:aspec/normal  max-[1500px]:aspect-video"
        alt="DSC_6967"
      />
    </div>
  );
}
