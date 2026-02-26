import React from "react";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto relative h-[90vh] w-full flex items-center justify-center text-white">
      <img
        src="/background.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50">
      
      <div className="relative top-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to GhibliMovies
        </h1>
        <p className="text-lg md:text-2xl opacity-90 mb-6">
          Dive into the enchanting world of Studio Ghibli's timeless classics.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          Explore Now
        </button>
      </div>
      
      </div>
    </section>
  );
};

export default Banner;
