import { useNavigate } from "react-router";
import img from "../Images/DSC01129.png";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-white font-['Nouveau_IBM']">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-medium text-gray-500">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500">
              Sorry, the page you are looking for doesn't exist. Here are some
              helpful links:
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <button
                className="flex cursor-pointer items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 border-gray-300 font-['JetBrains_Mono'] font-['Nouveau_IBM']"
                onClick={() => window.history.back()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go back</span>
              </button>

              <button
                className="w-1/2 px-5 cursor-pointer py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-800 rounded-lg shrink-0 sm:w-auto hover:bg-gray-900 font-['JetBrains_Mono'] font-['Nouveau_IBM']"
                onClick={() => navigate("/")}
              >
                Take me home
              </button>
            </div>
          </div>

          <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <img
              className="w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover object-left"
              src={img}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
