import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div data-aos="fade-up" className="items-center text-center">
        <div className="my-16 border-t-1 h-0.5 bg-gradient-to-r from-gray-800 via-pink-400 to-gray-800"></div>
        <div className="flex flex-col items-center">
            <div className="lg:text-5xl text-4xl text-center mt-15 font-extrabold mb-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">
            Project - UI/UX
            </div>

            <Image
            src="/Classync.svg"
            alt="Profile Picture"
            width={40}
            height={40}
            className="w-[300px] h-[100px] relative lg:mt-12"
            />
            <p className="lg:px-60 px-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white"> Classync is set to revolutionize real-time classroom learning by seamlessly connecting teachers presenting on the whiteboard with students sitting at their desks, listening, and taking notes. 
                This application boasts several features designed to enhance the effectiveness and efficiency of classroom learning. Key features include real-time whiteboard-gadget synchronization, advanced analytics, an AI assistant, and summarization tools. 
                With Classync, students can access the tools and resources they need to learn more effectively and plan their futures with greater confidence.
            </p>
            <a href="https://www.figma.com/design/55aMpTGGzWz6ipr3Cb0XgA/mini-competition-ui%2Fux?node-id=98-111&t=SpgvFM357yUaiIIs-1" target="_blank" rel="noopener noreferrer">
              <button className='px-6 py-3 mt-8 sm:w-auto rounded-full bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 font-bold hover:text-slate-600 text-black'>
                Check on Figma
              </button>
            </a>
        </div>
    </div>
  )
}

export default Project
