// src/components/ManifestPage.jsx
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const ManifestPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Lijag_ Manifesto
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We create authentic connections, inspire creativity, and celebrate
          uniqueness.
        </p>
      </header>

      {/* Manifesto Content */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Vision
        </h2>
        <p className="text-gray-600 mb-8">
          Lijag_ is more than a brand—it's a movement. We empower those who dare
          to be different, believe in the power of stories, and embrace the
          beauty of authenticity.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Values
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-4">
          <li>
            <span className="font-bold">Creativity</span>: Every idea matters,
            every story counts.
          </li>
          <li>
            <span className="font-bold">Community</span>: We build bridges, not
            walls.
          </li>
          <li>
            <span className="font-bold">Authenticity</span>: Being true is our
            strength.
          </li>
        </ul>
      </section>

      {/* Instagram Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Follow Us on Instagram
        </h2>
        <div className="flex justify-center">
          <InstagramEmbed
            url="https://www.instagram.com/p/C8B5rXGyXYZ/" // Replace with a valid Instagram post URL
            width={328}
            className="shadow-lg rounded-lg"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-8 text-center">
        <p>
          Connect with Lijag_ on{" "}
          <a
            href="https://www.instagram.com/lijag_"
            className="underline hover:text-indigo-400"
          >
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
};

export default ManifestPage;
