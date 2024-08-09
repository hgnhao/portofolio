import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div data-aos="fade-up" className="mt-36 lg:px-40 px-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
        <div className="font-extrabold lg:text-4xl text-2xl mb-10">
          Feel free to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">reach out</span> to me now—whether you have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">project in mind</span>, 
          a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">question</span>, or just want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">connect</span>. 
          Let’s create something amazing together!
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mb-10">
            <a href="mailto:kefaskj@gmail.com" target="_blank" rel="noopener noreferrer">
                <button className='px-6 py-3 rounded-xl bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 font-bold hover:text-slate-600 text-black'>
                  Send me an E-mail
                </button>
            </a >
            <a href="https://www.linkedin.com/in/kefas-jonathan-1ba93a2b0/" target="_blank" rel="noopener noreferrer">
                <button className='px-6 py-3 rounded-xl bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 font-bold hover:text-slate-600 text-black'>
                  Connect on LinkedIn
                </button>
            </a>
        </div>

        <div className="flex justify-center items-center mr-4 gap-5">
            <a href="https://instagram.com/kefas.jonathann" target="_blank" rel="noopener noreferrer">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={40}
              height={40}
              className="w-[40px] h-[40px]"
            />
            </a>

            <a href="https://github.com/hgnhao" target="_blank" rel="noopener noreferrer">
            <Image
              src="/github.png"
              alt="GitHub"
              width={40}
              height={40}
              className="w-[40px] h-[40px]"
            />
            </a>
        </div>
    </div>
  )
}

export default Contact
