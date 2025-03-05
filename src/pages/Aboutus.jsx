import React from "react";

const AboutUs = () => {
  const images = [
    "https://cdn.midjourney.com/09df49f0-fff4-4fd6-8736-b32746e050fb/0_1.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-blue-400">
            Welcome to Mid Trip
          </h1>
          <p className="text-lg text-gray-300">
            <span className="text-blue-400 font-semibold">
              Bundle Dreams, Art Reams.
            </span>{" "}
            Mid Trip is where creativity meets AI. We transform your prompts
            into stunning AI-generated images, from cinematic movie posters to
            unique avatars, NFTs, book covers, and game characters.
          </p>
          <p className="text-lg text-gray-300">
            Whether you're an artist, writer, gamer, or collector, our platform
            empowers you to visualize your imagination effortlessly.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="w-full flex justify-center">
          <img
            src={images[0]}
            alt="Mid Trip AI Art"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg max-h-[400px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
