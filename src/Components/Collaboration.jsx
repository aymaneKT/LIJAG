import RogerProduction from "../Images/RogerProduction-removebg-preview.png";
import mu from "../Images/materieunite_logo.png";
export default function Collaboration() {
  return (
    <section className="py-8 mt-8 bg-gray-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold font-['JetBrains_Mono'] mb-6">
          In Collaboration With
        </h2>
        <div className="flex justify-center items-center gap-8">
          <img
            className="h-50 w-auto object-contain filter invert-[60%] sepia-[10%] saturate-0 hue-rotate-180 brightness-90"
            style={{
              filter:
                "invert(60%) sepia(10%) saturate(0%) hue-rotate(180deg) brightness(90%)",
              color: "#919394",
            }}
            src={RogerProduction}
            alt="Roger Production Logo"
            title="Roger Production"
          />
          <img
            className="h-20 w-auto object-contain filter "
            src={mu}
            alt="MatiereUniteLogo"
            title="MatiereUnite"
          />
        </div>
      </div>
    </section>
  );
}
