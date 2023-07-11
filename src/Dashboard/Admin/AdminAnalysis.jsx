import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell, Tooltip } from "recharts";

const AdminAnalysis = () => {
    const data01 = [
        { name: 'Total Order', value: 400 },
        { name: 'Complete Order', value: 300 },
        { name: 'Today Order', value: 300 },
        { name: 'On The Way', value: 200 },
        { name: 'Hold', value: 278 },
        { name: 'Return to Merchant', value: 189 },
      ];
  return (
    <div className="bg-[#2c2c54] h-auto">
      <h1 className="text-2xl font-pppins p-8 text-white">My Analytics</h1>
      <div className="flex p-8">
        <div className="bg-white text-center p-5 text-black font-pppins rounded-lg h-32 gap-4 w-1/3">
          <h1 className="text-2xl">Total Order</h1>
          <h1 className="text-4xl">15</h1>
        </div>
        <div className="bg-white text-center p-5 mx-4 text-black font-pppins rounded-lg h-32 gap-4 w-1/3">
          <h1 className="text-2xl">Complete Order</h1>
          <h1 className="text-4xl">15</h1>
        </div>
        <div className="bg-white text-center p-5 text-black font-pppins rounded-lg h-32 gap-4 w-1/3">
          <h1 className="text-2xl">Today Order</h1>
          <h1 className="text-4xl">15</h1>
        </div>
      </div>
      <div className="flex px-8">
        <div className="bg-white text-center p-5 text-black font-pppins rounded-lg h-32 gap-4 w-1/3">
          <h1 className="text-2xl">on the way</h1>
          <h1 className="text-4xl">05</h1>
        </div>
        <div className="bg-white text-center p-5 mx-4 text-black font-pppins rounded-lg h-32 gap-4 w-1/3">
          <h1 className="text-2xl">Hold</h1>
          <h1 className="text-4xl">15</h1>
        </div>
        <div className="bg-white text-center p-5 text-black font-pppins rounded-lg h-32 gap-4 w-1/3">
          <h1 className="text-2xl">Return to Merchant</h1>
          <h1 className="text-4xl">05</h1>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-pppins p-8 text-white">
          All Analysis Percentage Chart 
        </h1>

        {/* paiChart  */}
        <div className="-mt-24">
        <PieChart  width={400} height={400}>
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
    </div>
  );
};

export default AdminAnalysis;
