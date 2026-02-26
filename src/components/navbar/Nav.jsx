import React from "react";
import { LuCircleUserRound } from "react-icons/lu";

const Nav = () => {
  return (
    <nav className="max-w-7xl mx-auto sticky top-0 w-full bg-linear-to-r from-indigo-600 from-20% via-sky-600 via-40% to-emerald-900 to-90% flex justify-between items-center p-4 z-50">
      
      <div className="text-xl font-bold px-2 cursor-pointer">
        GhibliMovies
      </div>

      <div className="flex items-center gap-3 justify-center">
        <LuCircleUserRound className="text-4xl hover:text-white transition duration-300 ease-in-out" />
        <button className="border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 px-4 py-1 hidden md:block">
          sign in
        </button>


      </div>
    </nav>
  );
};

export default Nav;