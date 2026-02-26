import React from "react";

const Banner = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <img
        src="/background.jpeg"
        alt="Ghibli background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to GhibliMovies
        </h1>

        <p className="text-base sm:text-lg md:text-2xl opacity-90 mb-8 max-w-2xl">
          Dive into the enchanting world of Studio Ghibli's timeless classics.
        </p>

        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          Explore Now
        </button>

      </div>
    </section>
  );
};

export default Banner;