import logo from "../Images/Logo_FULL_Color_vectorRGB_Mesa de trabajo 1.png";

export default function FooterComponent() {
  return (
    <footer className="bg-white  left-0 w-full px-4 sm:px-6 py-4 mt-6 -z-10">
      <div className="w-full text-center">
        {/* Brand + Links */}
        <div className="w-full flex gap-5 flex-wrap  items-center justify-center  mb-4">
          {/* Links + Newsletter */}
          <div className="flex flex-wrap items-center gap-2.5 justify-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex justify-center items-center flex-wrap  space-x-4 my-4">
              <a href="/" className="flex items-center">
                <img
                  src={logo}
                  alt="LIJAG Logo"
                  className="h-8 mr-2 max-w-[120px] w-auto object-contain"
                />
                {/* <span className="font-bold text-lg whitespace-nowrap">LIJAG</span> */}
              </a>
              <a
                href="https://www.instagram.com/lijag_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 text-gray-600 hover:text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@lijag000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg
                  className="w-6 h-6 text-gray-600 hover:text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.6 4.3c-1.3-.5-4.6-.5-7.6-.5s-6.3 0-7.6.5c-1.3.5-2.3 1.4-2.5 2.6-.5 1.4-.5 4.2-.5 5.1s0 3.7.5 5.1c.2 1.2 1.2 2.1 2.5 2.6 1.3.5 4.6.5 7.6.5s6.3 0 7.6-.5c1.3-.5 2.3-1.4 2.5-2.6.5-1.4.5-4.2.5-5.1s0-3.7-.5-5.1c-.2-1.2-1.2-2.1-2.5-2.6zM9.8 15.3v-6l5.6 3-5.6 3z" />
                </svg>
              </a>
            </div>
            <a href="#" className="text-gray-600 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Contact
            </a>
            {/* Newsletter Form */}
            <form
              className="flex items-center space-x-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="exemple@gmail.com"
                className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none"
                aria-label="Newsletter Email"
              />
              <button
                type="submit"
                className="bg-black cursor-pointer text-white px-3 py-1 rounded text-sm hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

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
