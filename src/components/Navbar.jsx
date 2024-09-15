import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-black">BookMyCollab</h1>
          </div>
          <div className="hidden lg:flex lg:space-x-6 text-lg items-center">
            <a href="#what-we-do" className="text-[#484848] hover:text-black">
              What We Do
            </a>
            <a href="#how-it-works" className="text-[#484848] hover:text-black">
              How It Works
            </a>
            <a href="#join-us-brand" className="text-[#484848] hover:text-black">
              Join Us As Brand
            </a>
            <a href="#join-us-creator" className="text-[#484848] hover:text-black">
              Join Us As Creator
            </a>
          {/* </div>
          <div className="hidden md:block"> */}
            <button className="bg-[#5526b6] text-white px-8 py-2 rounded-lg hover:bg-purple-700">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar