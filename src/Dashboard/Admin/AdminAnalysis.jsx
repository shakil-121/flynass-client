import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell, Tooltip } from "recharts";
import Slider from "../../Component/Slider";
// import Slider from "../../Component/Slider/Slider";
import { FaPhoneAlt } from "react-icons/fa";
import ParcelEdit from "../../Component/ParcelEdit/ParcelEdit";
import { useQuery } from "@tanstack/react-query";
import AdminParcelModal from "../../Component/AdminParcelModal/AdminParcelModal";
import { useEffect } from "react";
import AllParcel from "./AllParcel/Allparcel";

const AdminAnalysis = () => {
  const [showModal, setShowModal] = useState(false);
  const [todaysParcel, setTodaysParcel] = useState([]);

  const { data: parcel = [], refetch } = useQuery(['orders'], async () => {
    const res = await fetch('http://localhost:5000/orders')
    return res.json();
  })

  useEffect(() => {
    fetch('http://localhost:5000/today')
      .then(res => res.json())
      .then(data => setTodaysParcel(data))
  }, [todaysParcel])

  const handleSearch = () => {
    fetch(`http://localhost:5000/orders/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        orders(data);
      });
  };

  const pending = parcel.filter(item => item.status === "pending");
  const picked = parcel.filter(item => item.status === "picked");
  const onWay = parcel.filter(item => item.status === "on the way");
  const hold = parcel.filter(item => item.status === "hold");
  const delivered = parcel.filter(item => item.status === "delivered");
  const returned = parcel.filter(item => item.status === "returned");
  const returnedToMerchant = parcel.filter(item => item.status === "returned to merchant");
  const reject = parcel.filter(item => item.status === "rejected");
  const payableAmount = parcel.filter(item => item.status === "delivered" && item.payment_status === "due");

  // payment summary
  const paid = parcel.filter(item => item.payment_status === "paid" && item.payable_amount);
  const total_paid = paid?.reduce((acc, obj) => acc + obj.payable_amount, 0).toFixed(2);

  const due = parcel.filter(item => item.payment_status === "due" && item.payable_amount);
  const total_due = due?.reduce((acc, obj) => acc + obj?.payable_amount, 0).toFixed(2);


  // console.log(total_paid);

  // delivery percentage calculation
  const returnParcel = (returnedToMerchant.length);
  const devlieryParcel = (delivered.length);
  const totalParcel = (returnParcel + devlieryParcel);

  const returnPercentage = (returnParcel * 100 / totalParcel).toFixed(2)
  const deliveryPercentage = (devlieryParcel * 100 / totalParcel).toFixed(2)
  // console.log(returnPercentage, deliveryPercentage);


  const data01 = [
    { name: 'Return Percentage', value: parseFloat(returnPercentage) },
    { name: 'Delivery Percentage', value: parseFloat(deliveryPercentage) }
  ];

  return (
    <div className="h-auto">
      <h1 className="text-2xl font-pppins p-5">Dashboard</h1>
      <div className='grid md:grid-cols-4 gap-8 px-5'>
        <div>
          <button onClick={() => setShowModal(todaysParcel)} className='w-full'>
            <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
              <h1 className='text-gray-400'>Today Parcel</h1>
              <h1 className='text-blue-800'>{todaysParcel?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(parcel)} className='w-full'>
            <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
              <h1 className='text-gray-400'>Total Parcel</h1>
              <h1 className='text-blue-800'>{parcel?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(pending)} className='w-full'>
            <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
              <h1 className='text-gray-400'>Pending Parcel</h1>
              <h1 className='text-blue-800'>{pending?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(picked)} className='w-full'>
            <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
              <h1 className='text-gray-400'>Picked Parcel</h1>
              <h1 className='text-blue-800'>{picked?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(onWay)} className='w-full'>
            <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
              <h1 className='text-gray-400'>Onway Parcel</h1>
              <h1 className='text-blue-800'>{onWay?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(hold)} className='w-full'>
            <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
              <h1 className='text-gray-400'>Hold Parcel</h1>
              <h1 className='text-blue-800'>{hold?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(delivered)} className='w-full'>
            <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
              <h1 className='text-gray-400'>Delivered Parcel</h1>
              <h1 className='text-blue-800'>{delivered?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(returned)} className='w-full'>
            <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
              <h1 className='text-gray-400'>Returned Parcel</h1>
              <h1 className='text-blue-800'>{returned?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(returnedToMerchant)} className='w-full'>
            <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
              <h1 className='text-gray-400'>Returned To Merchant</h1>
              <h1 className='text-blue-800'>{returnedToMerchant?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(reject)} className='w-full'>
            <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
              <h1 className='text-gray-400'>Reject Parcel</h1>
              <h1 className='text-blue-800'>{reject?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(payableAmount)} className='w-full'>
            <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
              <h1 className='text-gray-400'>Payable Parcel</h1>
              <h1 className='text-blue-800'>{payableAmount?.length}</h1>
            </div>
          </button>
        </div>
      </div>

      {/* payment summary */}
      <div className="px-5">
        <h1 className="text-3xl font-pppins mt-10 text-black mb-5">Payment Summary</h1>
        <div className="grid md:grid-cols-3 gap-5">
          <div>
            {/* <button onClick={() => setShowModal(reject)} className="w-full"> */}
            <div className="bg-[#E8F6FC] text-xl font-semibold rounded-lg text-center py-10">
              <h1 className="text-blue-800">
                {
                  total_due ?
                    <>
                      {total_due} TK
                    </>
                    :
                    <>00.00TK</>
                }
              </h1>
              <h1 className="text-gray-400">To be Processing</h1>
            </div>
            {/* </button> */}
          </div>
          <div>
            {/* <button onClick={() => setShowModal(reject)} className="w-full"> */}
            <div className="bg-[#E8F6FC] text-xl font-semibold rounded-lg text-center py-10">
              <h1 className="text-blue-800">
                {
                  total_paid ?
                    <>
                      {total_paid} TK
                    </>
                    :
                    <>00.00TK</>
                }
              </h1>
              <h1 className="text-gray-400">Total Paid Amount</h1>
            </div>
            {/* </button> */}
          </div>
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

      <AdminParcelModal refetch={refetch} isVisible={showModal} orders={setShowModal} onClose={() => setShowModal(false)} ></AdminParcelModal>
    </div>
  );
};

export default AdminAnalysis;
