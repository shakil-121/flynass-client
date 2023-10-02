import React, { useEffect } from "react";
import useParcel from "../../Hooks/useParcel";
import { Link } from "react-router-dom";
import DeliveryPercnet from "./DeliveryPercnet";
import { useQuery } from "@tanstack/react-query";
import Slider from "../../Component/Slider";
import { useState } from "react";
import ProfileUpdate from "../Profile/ProfileUpdate";
import ParcelModal from "../../Component/ParcelModal/ParcelModal";
import support from "../../assets/images/customer-service.png";
import { FaPhoneAlt } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Notice from "../Notice/Notice";
import { baseUrl } from "../../config/api";

const MerchantAnalysis = () => {
  const [showModal, setShowModal] = useState(false);
  const [parcel, setParcel] = useState([]);
  const { user } = useAuth();
  // console.log(user);

  // const { data: parcel = [], refetch } = useQuery(['orders'], async () => {
  //     const res = await fetch(`http://62.72.29.251:5000/user/order/${user?.email}`)
  //     return res.json();
  // })
  useEffect(() => {
    fetch(`${baseUrl}/user/order/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setParcel(data));
  }, [parcel]);

  // console.log(parcel);

  const pending = parcel.filter((item) => item.status === "pending");
  const picked = parcel.filter((item) => item.status === "picked");
  const onWay = parcel.filter((item) => item.status === "on the way");
  const hold = parcel.filter((item) => item.status === "hold");
  const inTransit = parcel.filter((item) => item.status === "in transit");
  const delivered = parcel.filter((item) => item.status === "delivered");
  const returned = parcel.filter((item) => item.status === "returned");
  const returnedToMerchant = parcel.filter(
    (item) => item.status === "returned to merchant"
  );
  const reject = parcel.filter((item) => item.status === "rejected");
  const unpaid = parcel.filter((item) => item.payment_status === "due" && item.status !== "pending");
  const unpaidAmount = unpaid.reduce((acc, obj) => acc + obj.payable_amount, 0).toFixed(2);

  // payment summary
  const paid = parcel.filter(item => item.payment_status === "paid" && item.payable_amount);
  const collected = paid.reduce((acc, obj) => acc + obj.payable_amount, 0).toFixed(2);

  const due = parcel.filter(item => item.payment_status === "due" && item.status === "delivered" && item.payable_amount);
  const processing = due.reduce((acc, obj) => acc + obj?.payable_amount, 0).toFixed(2);

  // chash Amount 
  const cashAmountItems = parcel.filter(item => item.status !== "pending" && item.status !== "returned" && item.payment_status === "due" && item.total_amount);
  const cashAmount = cashAmountItems.reduce((acc, obj) => acc + obj?.payable_amount, 0).toFixed(2);

  // return Amount 
  const returnItems = parcel.filter(item => item.status === "returned" && item.delivary_Charge);
  const returnAmount = returnItems.reduce((acc, obj) => acc + obj?.delivary_Charge, 0).toFixed(2);

  // delivery percentage calculation
  const returnParcel = returnedToMerchant.length;
  const devlieryParcel = delivered.length;
  const totalParcel = returnParcel + devlieryParcel;

  const returnPercentage = ((returnParcel * 100) / totalParcel).toFixed(2);
  const deliveryPercentage = ((devlieryParcel * 100) / totalParcel).toFixed(2);
  // console.log(returnPercentage, deliveryPercentage);

  return (
    <div className="h-full  p-8 rounded-md">
      <div className="mx-auto md:w-[65vw] w-[90vw]">
        <Slider />
      </div>
      <div>
        <Notice></Notice>
      </div>
      <div className="grid md:grid-cols-4  gap-2 mt-5">
        <div>
          <button onClick={() => setShowModal(parcel)} className="w-full">
            <div className="bg-[#E8F6FC] text-xl font-pppins rounded-lg text-center py-5">
              <h1 className="text-gray-400">Total <br /> Parcel</h1>
              <h1 className="text-blue-800">{parcel?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(pending)} className="w-full">
            <div className="bg-[#E8F6FC] text-xl font-pppins rounded-lg text-center py-5">
              <h1 className="text-gray-400">Pending <br /> Parcel</h1>
              <h1 className="text-blue-800">{pending?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(picked)} className="w-full">
            <div className="bg-[#E8F6FC] text-xl font-pppins rounded-lg text-center py-5">
              <h1 className="text-gray-400">Picked <br /> Parcel</h1>
              <h1 className="text-blue-800">{picked?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(onWay)} className="w-full">
            <div className="bg-[#E8F6FC] text-xl font-pppins rounded-lg text-center py-5">
              <h1 className="text-gray-400">Onway <br /> Parcel</h1>
              <h1 className="text-blue-800">{onWay?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(hold)} className="w-full">
            <div className="bg-[#E8F6FC] text-xl font-pppins rounded-lg text-center py-5">
              <h1 className="text-gray-400">Hold <br /> Parcel</h1>
              <h1 className="text-blue-800">{hold?.length}</h1>
            </div>
          </button>
        </div>

        <div>
          <button onClick={() => setShowModal(inTransit)} className="w-full">
            <div className="bg-[#E8F6FC] text-xl font-pppins rounded-lg text-center py-5">
              <h1 className="text-gray-400">In <br />Transit</h1>
              <h1 className="text-blue-800">{inTransit?.length}</h1>
            </div>
          </button>
        </div>

        <div>
          <button onClick={() => setShowModal(delivered)} className="w-full">
            <div className="bg-[#E8F6FC] text-xl font-pppins rounded-lg text-center py-5">
              <h1 className="text-gray-400">Delivered <br /> Parcel</h1>
              <h1 className="text-blue-800">{delivered?.length}</h1>
            </div>
          </button>
        </div>

        <div>
          <button onClick={() => setShowModal(returned)} className="w-full">
            <div className="bg-[#E8F6FC] text-xl font-pppins rounded-lg text-center py-5">
              <h1 className="text-gray-400">Returned <br /> Parcel</h1>
              <h1 className="text-blue-800">{returned?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button
            onClick={() => setShowModal(returnedToMerchant)}
            className="w-full"
          >
            <div className="bg-[#E8F6FC] text-xl font-pppins rounded-lg text-center py-5">
              <h1 className="text-gray-400">Returned To <br /> Merchant</h1>
              <h1 className="text-blue-800">{returnedToMerchant?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(reject)} className="w-full">
            <div className="bg-[#E8F6FC] text-xl font-pppins rounded-lg text-center py-5">
              <h1 className="text-gray-400">Reject <br /> Parcel</h1>
              <h1 className="text-blue-800">{reject?.length}</h1>
            </div>
          </button>
        </div>
        <div>
          <div className="bg-[#E8F6FC] text-xl font-pppins rounded-lg text-center py-5">
            <h1 className="text-gray-400">Cash <br /> Amount</h1>
            <h1 className="text-blue-800">{cashAmount} Tk</h1>
          </div>
        </div>
      </div>

      {/* payment Summary Section */}
      <div>
        <h1 className="md:text-3xl text-2xl font-pppins mt-10 text-black mb-5">Payment Summary</h1>
        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <div className="bg-[#E8F6FC] text-xl font-semibold rounded-lg text-center py-10">
              <h1 className="text-blue-800">
                {
                  processing ?
                    <>
                      { processing - returnAmount} TK
                    </>
                    :
                    <>00.00TK</>
                }
              </h1>
              <h1 className="text-gray-400">Processing Amount</h1>
            </div>
          </div>
          <div>
            <div className="bg-[#E8F6FC] text-xl font-semibold rounded-lg text-center py-10">
              <h1 className="text-blue-800">
                {
                  collected ?
                    <>
                      {collected} TK
                    </>
                    :
                    <>00.00TK</>
                }
              </h1>
              <h1 className="text-gray-400">Collected Amount</h1>
            </div>
          </div>
        </div>
      </div>

      {/* parcel Analysis */}
      <div className="hidden md:block">
        <h1 className="text-3xl font-pppins mt-10 text-black">
          Parcel Analysis
        </h1>
        <div className="flex gap-16 mt-6">
          <div className="flex items-center gap-5">
            <h2 className="text-xl font-serif">Delivery</h2>
            <div className="bg-[#1E62D4] h-5 w-5"></div>
          </div>
          <div className="flex items-center gap-5">
            <h2 className="text-xl font-serif">Return</h2>
            <div className="bg-[#FF5733] h-5 w-5"></div>
          </div>
        </div>
        <div className="md:w-[60vw]">
          <DeliveryPercnet
            returnPercentage={returnPercentage}
            deliveryPercentage={deliveryPercentage}
          ></DeliveryPercnet>
        </div>
        <div></div>
      </div>
      <div className="flex items-center gap-3 bg-[#E8F6FC] p-3 rounded-md me-8">
        <img className="w-16" src={support} alt="" />
        <div>
          <h1 className="font-pppins">Flynass Customer Support</h1>
          <h2 className="font-semibold flex items-center gap-2">
            <FaPhoneAlt /> 09611305423
          </h2>
        </div>
      </div>
      <ParcelModal isVisible={showModal} onClose={() => setShowModal(false)}></ParcelModal>
    </div>
  );
};

export default MerchantAnalysis;
