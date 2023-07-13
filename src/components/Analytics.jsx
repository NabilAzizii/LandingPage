import React from 'react';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 rounded-md" src="https://source.unsplash.com/random/?data,analytics/300x300" alt="DataAnalytics" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] uppercase font-bold">Data Analytics Dashboard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Centralize and Master Your Data Analytics</h1>
          <p className="text-justify">
            Gain full control and insight into your data, allowing you to make informed decisions and unlock hidden opportunities. From data collection to visualization, our platform simplifies and streamlines the entire analytics process.
            With powerful features and intuitive controls, managing your data analytics has never been easier. Stay ahead of the competition and maximize your growth potential with our cutting-edge solution. Discover the true power of data
            analytics and propel your business towards success.
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0  py-3 bg-[#000300]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
