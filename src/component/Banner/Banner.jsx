import React from 'react'
import serviceimage from "../../assets/servicebannerpic.png";

const Banner = () => {
  return (
    <>
          
     <div className="bg-yellow-50  relative overflow-hidden py-16 md:py-24 lg:py-32">
        
         <div className="md:w-1/2 text-center md:text-left z-10 ml-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            A trusted provider of <br className="hidden sm:inline"/> courier services.
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-md mx-auto md:mx-0">
            We deliver your products safely to your home in a reasonable time.
          </p>
          <button className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
            Get started
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

        <div>
        <img src={serviceimage} alt="" />
        </div>

     </div>

    </>
  )
}

export default Banner
