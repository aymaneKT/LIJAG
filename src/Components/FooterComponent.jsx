import logo from "../Images/Logo_FULL_Color_vectorRGB_Mesa de trabajo 1.png";

export default function FooterComponent() {
  return (
    <footer className="bg-white  fixed bottom-0 left-0 w-full px-4 sm:px-6 py-4 mt-6 -z-10">
      <div className="w-full text-center">
        {/* Brand + Links */}
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          {/* Brand */}
          <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
            <a href="/" className="flex items-center">
              <img src={logo} alt="LIJAG Logo" className="h-8 mr-2" />
              <span className="font-bold text-lg">LIJAG</span>
            </a>
          </div>

          {/* Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Licensing
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2025{" "}
          <a href="#" className="hover:underline">
            Lijag™
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
