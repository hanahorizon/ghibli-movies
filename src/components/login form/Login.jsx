import React from 'react'

const LoginForm = () => {
  return (
    <section className="max-w-7xl mx-auto relative h-[90vh] w-full flex items-center justify-center text-white">

      <img
        src="/bkg2.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70 flex" >  
      <div className="flex flex-col items-center justify-center text-left p-15"> 
        <h3 className="text-lg md:text-5xl font-bold mb-4 ">Explore the world of ghibli studio</h3>
        <p className="md:text-lg opacity-90 mb-6 ">Don't wanna lose your progress? sign up now or log in to to continue watching.</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center px-4 text-white">
        <form action="">
          <input type="email" placeholder="Email" className="mb-4 px-4 py-2 rounded-lg border border-white w-100 focus:outline-none focus:ring focus:ring-white" />
          <input type="password" placeholder="Password" className="mb-4 px-4 py-2 rounded-lg border border-white w-100 focus:outline-none focus:ring focus:ring-white" />
          <input type="password" placeholder="Confirm Password" className="mb-4 px-4 py-2 rounded-lg border border-white w-100 focus:outline-none focus:ring focus:ring-white" />
          
        </form>
        <div className="flex gap-4 mt-4">
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          Log In
        </button>
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          Sign up
        </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm