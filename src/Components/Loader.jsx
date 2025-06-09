import logo from "../Images/Logo_FULL_Color_vectorRGB_Mesa de trabajo 1.png";
export default function Loader({ isLoading }) {
  return (
    isLoading && (
      <div className="fixed z-11 h-screen top-0 bottom-0 left-0 right-0 bg-white flex items-center justify-center">
        <img
          src={logo}
          className="w-[200px] animate-fade"
          style={{ animation: "fadeInOut 0.8s infinite alternate" }}
        />
        <style>
          {`
            @keyframes fadeInOut {
              0% { opacity: 1; }
              100% { opacity: 0.2; }
            }
          `}
        </style>
      </div>
    )
  );
}
