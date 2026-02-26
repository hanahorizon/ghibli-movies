import React from 'react'

const LoginForm = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <img
        src="/bkg2.jpeg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Explore the world of ghibli studio
          </h3>
          <p className="text-base md:text-lg opacity-90 max-w-md mx-auto lg:mx-0">
            Don’t wanna lose your progress? Sign up now or log in to continue watching.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 max-w-md">
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-white"
            />

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="w-full bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                Log In
              </button>
              <button className="w-full bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                Sign Up
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}

export default LoginForm