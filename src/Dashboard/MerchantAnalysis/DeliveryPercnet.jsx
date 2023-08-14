import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import useParcel from '../../Hooks/useParcel';
import { useQuery } from '@tanstack/react-query';
import { baseUrl } from '../../config/api';

const DeliveryPercnet = ({deliveryPercentage, returnPercentage}) => {
    // const delivery = deliveryPercentage;
    // const returned = returnPercentage;
    // console.log(delivery, returned);

    const { data: parcel = [], refetch } = useQuery(['orders'], async () => {
        const res = await fetch(`${baseUrl}/orders`)
        return res.json();
    })


    const data = [
        { name: "Delivery Percent", value: parseFloat(deliveryPercentage) },
        { name: "Return Percent", value: parseFloat(returnPercentage) }
    ];
    const COLORS = ['#1E62D4', '#FF5733', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className='flex justify-center items-center'>
            <PieChart width={1000} height={900}>
                <Pie
                    data={data}
                    cx="30%"
                    cy="30%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={200}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default DeliveryPercnet;