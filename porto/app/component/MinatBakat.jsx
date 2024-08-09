import React from 'react'
import Image from 'next/image'

const MinatBakat = () => {
  return (
    <div data-aos="fade-up">
    <div className="mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
      <div className="my-12 mt-24 border-t-1 h-0.5 bg-gradient-to-r from-gray-800 via-pink-400 to-gray-800"></div>

      <div className="lg:text-5xl text-4xl text-center mt-20 font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">
        Interest and Talents
      </div>

      {/* Container for the two interest sections */}
      <div className="space-y-8 px-5 lg:px-20 lg:grid grid-cols-2 items-center justify-center">
        {/* First Interest */}
        <div className="flex flex-wrap items-start gap-4 mt-10">
          <div className="rounded-full w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] lg:w-[100px] lg:h-[100px] relative flex-shrink-0 mt-3">
            <Image
              src="/code.png"
              alt="software engineering"
              layout="fill"
              className="rounded-full object-cover"
              objectFit="cover"
            />
          </div>
          <div className="flex-1 mt-2">
            <p className="text-lg font-bold lg:text-3xl lg:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">Software Engineering</p>
            <p className="mt-1 lg:mt-2 lg:text-xl ">Currently interested in Web and App development.</p>
          </div>
        </div>

        {/* First Talent*/}
        <div className="flex flex-wrap items-center gap-4">
          <div className="rounded-full w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] lg:w-[125px] lg:h-[125px] relative flex-shrink-0 mr-1.5 mb-0">
            <Image
              src="/business-man.png"
              alt="uiux"
              layout="fill"
              className="rounded-full object-cover"
              objectFit="cover"
            />
          </div>
          <div className="flex-1 mt-4">
            <p className="text-lg font-bold lg:text-3xl lg:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">Leadership</p>
            <p className="mt-1 lg:mt-2 lg:text-xl lg:mb-7">Interest in making good designs for websites or mobile applications</p>
          </div>
        </div>

        {/* Second Interest */}
        <div className="flex flex-wrap items-start gap-4">
          <div className="rounded-full w-[70px] h-[70px] sm:w-[75px] sm:h-[75px] lg:w-[100px] lg:h-[100px] relative flex-shrink-0 mr-1.5 mt-3">
            <Image
              src="/user-experience.png"
              alt="uiux"
              layout="fill"
              className="rounded-full object-cover"
              objectFit="cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg font-bold lg:text-3xl lg:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">UI/UX Design</p>
            <p className="mt-1 lg:mt-2 lg:text-xl">Interest in making good designs for websites or mobile applications</p>
          </div>
        </div>

        {/* Second Talent */}
        <div className="flex flex-wrap items-start gap-4">
          <div className="rounded-full w-[70px] h-[70px] sm:w-[75px] sm:h-[75px] lg:w-[100px] lg:h-[100px] relative flex-shrink-0 mr-1.5 lg:ml-3 lg:mt-3 sm:mt-2">
            <Image
              src="/chat.png"
              alt="uiux"
              layout="fill"
              className=""
              objectFit="cover"
            />
          </div>
          <div className="flex-1 lg:ml-3">
            <p className="text-lg font-bold lg:text-3xl lg:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">Communication Skiils</p>
            <p className="mt-1 lg:mt-2 lg:text-xl">Interest in making good designs for websites or mobile applications</p>
          </div>
        </div>

        {/* Third Interest */}
        <div className="flex flex-wrap items-start gap-4">
          <div className="rounded-full w-[70px] h-[70px] sm:w-[75px] sm:h-[75px] lg:w-[100px] lg:h-[100px] relative flex-shrink-0 mr-1.5 mt-3">
            <Image
              src="/microchip.png"
              alt="uiux"
              layout="fill"
              className="rounded-full object-cover"
              objectFit="cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg font-bold lg:text-3xl lg:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">Artificial Intelligence</p>
            <p className="mt-1 lg:mt-2 lg:text-xl">Interest in making good designs for websites or mobile applications</p>
          </div>
        </div>

        {/* Third Talent */}
        <div className="flex flex-wrap items-start gap-4 lg:ml-4">
          <div className="rounded-full w-[70px] h-[70px] sm:w-[75px] sm:h-[75px] lg:w-[100px] lg:h-[100px] relative flex-shrink-0 mr-1.5 sm:mt-3">
            <Image
              src="/idea.png"
              alt="uiux"
              layout="fill"
              className="rounded-full object-cover"
              objectFit="cover"
            />
          </div>
          <div className="flex-1 lg:ml-2">
            <p className="text-lg font-bold lg:text-3xl lg:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">Creative</p>
            <p className="mt-1 lg:mt-2 lg:text-xl">Interest in making good designs for websites or mobile applications</p>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default MinatBakat
