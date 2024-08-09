"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText('kefaskj@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset button text after 2 seconds
    });
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0 px-4 lg:px-0">
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <p className="text-2xl font-bold text-[#F5F5F5] mb-2">
          What's up Internet! My name is
        </p>
        <h1 className="text-[#F5F5F5] mb-4 text-4xl lg:text-6xl font-extrabold">
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mr-4'>
            Kefas Kurnia Jonathan
          </span>
          <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2">
            <span className="mr-2 text-2xl text-white font-bold">and I'm</span>
            <TypeAnimation
              sequence={[
                'a Frontend Developer',
                1000,
                'a Musician',
                1000,
                'a Life-time Student',
                1000,
                'SPARTAN.',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block"
            />
          </p>
        </h1>
        <p data-aos="fade-left" className="text-[#b0b0b0] lg:text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
          I am a passionate developer who loves to code and solve problems. Also a self-taught developer who loves to learn new things and always up for a challenge. Currently I'm studying Computer Science at Institut Teknologi Bandung as a third-semester student. I'm planning on becoming a Software Engineer in the future, and I hope I can make a positive impact on the world with my skills.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center w-full">
          <button
            onClick={handleClick}
            className='px-6 py-3 w-full sm:w-auto rounded-lg mr-0 sm:mr-4 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 font-bold hover:text-slate-600 text-black'
          >
            {copied ? 'Email Copied!' : 'Contact Me'}
          </button>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-5 flex justify-center items-center mt-4 lg:mt-0">
        <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative lg:mt-12 mt-10">
          <Image
            src="/fotogantenk.svg"
            alt="Profile Picture"
            layout="fill"
            className="rounded-full object-cover"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
