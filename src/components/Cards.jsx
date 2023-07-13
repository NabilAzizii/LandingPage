import React from 'react';

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* 1 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src="https://source.unsplash.com/random/200x200/?icons,single,person" alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">Rp.150.000,00-</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start Trial</button>
        </div>
        {/* 2 */}
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src="https://source.unsplash.com/random/200x200/?icons,two,person" alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center text-4xl font-bold">Rp.500.000,00-</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1000 GB Storage</p>
            <p className="py-2 border-b mx-8">5 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">Start Trial</button>
        </div>
        {/* 3 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src="https://source.unsplash.com/random/200x200/?icons,three,person" alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">Rp.1.000.000,00-</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">10000 GB Storage</p>
            <p className="py-2 border-b mx-8">8 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 25 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
