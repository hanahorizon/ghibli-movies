import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-linear-to-r from-indigo-600 via-sky-500 to-emerald-500 text-white">

      {/* Inner Container */}
      <div className="max-w-300 mx-auto px-6 py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">GhibliMovies</h2>
            <p className="text-sm opacity-90 leading-relaxed">
              Where stories float like clouds and magic lives between frames.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-lg flex flex-col">
              <li className="hover:scale-105 transition cursor-pointer inline-block">Movies</li>
              <li className="hover:scale-105 transition cursor-pointer inline-block">Characters</li>
              <li className="hover:scale-105 transition cursor-pointer inline-block">Favorites</li>
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h3 className="font-semibold mb-4">Studio</h3>
            <ul className="space-y-3 text-lg flex flex-col">
              <li className="hover:scale-105 transition cursor-pointer inline-block">About</li>
              <li className="hover:scale-105 transition cursor-pointer inline-block">News</li>
              <li className="hover:scale-105 transition cursor-pointer inline-block">Careers</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-3 text-lg flex flex-col">
              <li className="hover:scale-105 transition cursor-pointer inline-block">Instagram</li>
              <li className="hover:scale-105 transition cursor-pointer inline-block">Twitter</li>
              <li className="hover:scale-105 transition cursor-pointer inline-block">Contact</li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-14 pt-6 border-t border-white/30 text-center text-sm opacity-90">
          © 2026 GhibliMovies. Crafted with imagination.
        </div>

      </div>
    </footer>
  );
};

export default Footer;