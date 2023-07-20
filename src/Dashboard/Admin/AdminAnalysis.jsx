import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell, Tooltip } from "recharts";
import Slider from "../../Component/Slider";
// import Slider from "../../Component/Slider/Slider";
import support from "../../assets/images/customer-service.png"
import { FaPhoneAlt } from "react-icons/fa";

const AdminAnalysis = () => {
  const data01 = [
    { name: 'Total Order', value: 400 },
    { name: 'Complete Order', value: 300 }
  ];

  return (
    <div className="h-auto">
      <div>

      </div>
      <h1 className="text-2xl font-pppins p-8">Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-8 font-pppins">
        <div className="bg-[#E8F6FC] rounded-md flex flex-col justify-center items-center py-8 text">
          <h1 className="text-2xl text-blue-700">15</h1>
          <h1 className="text-xl text-gray-400">Total Order</h1>
        </div>
        <div className="bg-[#E8F6FC] rounded-md flex flex-col justify-center items-center py-8">
          <h1 className="text-2xl text-blue-700">25</h1>
          <h1 className="text-xl text-gray-400">Todays Order</h1>
        </div>
        <div className="bg-[#E8F6FC] rounded-md flex flex-col justify-center items-center py-8">
          <h1 className="text-2xl text-blue-700">35</h1>
          <h1 className="text-xl text-gray-400">On The Way</h1>
        </div>
        <div className="bg-[#E8F6FC] rounded-md flex flex-col justify-center items-center py-8">
          <h1 className="text-2xl text-blue-700">15</h1>
          <h1 className="text-xl text-gray-400">Hold Order</h1>
        </div>
        <div className="bg-[#E8F6FC] rounded-md flex flex-col justify-center items-center py-8">
          <h1 className="text-2xl text-blue-700">15</h1>
          <h1 className="text-xl text-gray-400">Delivered</h1>
        </div>
        <div className="bg-[#E8F6FC] rounded-md flex flex-col justify-center items-center py-8">
          <h1 className="text-2xl text-blue-700">15</h1>
          <h1 className="text-xl text-gray-400">Return</h1>
        </div>
        <div className="bg-[#E8F6FC] rounded-md flex flex-col justify-center items-center py-8">
          <h1 className="text-2xl text-blue-700">15</h1>
          <h1 className="text-xl text-center text-gray-400">Return To <span className="text-xl">Merchent</span></h1>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-pppins p-8 ">
          All Analysis Percentage Chart
        </h1>

        {/* paiChart  */}
        <div className="-mt-24">
          <PieChart width={350} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#F86F03"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-[#E8F6FC] p-3 rounded-md me-8">
        <img className="w-16" src={support} alt="" />
        <div>
          <h1 className="font-pppins">Customer Support</h1>
          <h3 className="font-semibold">MD. Sheikh Hasib</h3>
          <h2 className="font-semibold flex items-center gap-2"><FaPhoneAlt /> 09611305423</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalysis;
