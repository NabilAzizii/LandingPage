import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Transforming Data into Opportunities</h1>
        <div className="flex justify-center items-center">
          <div className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 py-4">
            <Typewriter
              options={{
                strings: ['Data Unleashed.', 'Success Achieved.', 'Partner with Our Analytics.'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Unlocking Insights, Empowering Growth: Your Data's Greatest Ally</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
