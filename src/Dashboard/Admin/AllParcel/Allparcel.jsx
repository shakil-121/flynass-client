import React from "react";
import { useState } from "react";
import ParcelRejectForm from "./ParcelRejectForm";
import useParcel from "../../../Hooks/useParcel";
import { FaEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllParcel = () => {
  const [showModal, setShowModal] = useState(false);
  const [allParce, refetch] = useParcel();
  // console.log(allParce);

  const handleStatusUpdate = (status, id) => {
    console.log(status, id);
    const statusUpdate = { status };
    fetch(`http://localhost:5000/order/status/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(statusUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Status Update",
            text: "Status update successfully",
            icon: "success",
            confirmButtonText: "Update",
          });
        }
      });
  };
  return (
    <div>
      <div className="h-[95vh] overflow-scroll w-[75vw] px-16 pt-5 bg-sky-400">
        <h1 className="text-3xl font-pppins mb-3">All Parcel</h1>
        <table className="table table-xs  table-pin-rows table-pin-cols">
          <thead className="text-center bg-gray-400 text-black text-xl">
            <td>No.</td>
            <td>Date</td>
            <td>Status</td>
            <td>
              Tracking <br />
              ID
            </td>
            <td>
              Percel
              <br />
              Amount
            </td>
            <td>
              Delivery
              <br />
              Charge
            </td>
            <td>Destination</td>
            <td>Reject Button</td>
            <td>
              view <br />
              Invoice
            </td>
            <td>
              Payable <br />
              Amount
            </td>
          </thead>
          <tbody>
            {allParce.map((parcel, index) => (
              <tr
                className="bg-[#EEEEEE] rounded-md mb-5 shadow-lg text-center border-y-8 border-white p-20"
                key={parcel._id}
              >
                <td className="text-xl">{index + 1}</td>
                <td className="text-xl">7/10/2023</td>
                <td className="text-xl">
                  <div className="dropdown dropdown-bottom text-black">
                    <label tabIndex={0} className="">
                      <button className="btn bg-[#1E62D4] hover:bg-[#1E62D4] text-white">
                        {parcel.status}
                      </button>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48"
                    >
                      <li
                        onClick={() => handleStatusUpdate("picked", parcel._id)}
                      >
                        <a>Picked</a>
                      </li>
                      <li
                        onClick={() =>
                          handleStatusUpdate("on the way", parcel._id)
                        }
                      >
                        <a>On The Way</a>
                      </li>
                      <li onClick={() => handleStatusUpdate("delivered")}>
                        <a>Deliverd</a>
                      </li>
                      <li
                        onClick={() => handleStatusUpdate("hold", parcel._id)}
                      >
                        <a>Hold</a>
                      </li>
                      <li
                        onClick={() =>
                          handleStatusUpdate("returned", parcel._id)
                        }
                      >
                        <a>Return</a>
                      </li>
                      <li
                        onClick={() =>
                          handleStatusUpdate("returned to merchant", parcel._id)
                        }
                      >
                        <a>Return to Mechant</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td
                  className="m-4 text-xl"
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    maxHeight: "3em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {parcel._id}
                </td>
                <td className="text-xl">{parcel.product_amount}Tk</td>
                <td className="text-xl">
                  <div className="flex flex-col gap-1">
                    <span>Delivery - {parcel.delivary_Charge}Tk</span>
                    <span>COD - {parcel.cod}Tk</span>
                  </div>
                </td>
                <td className="text-xl">
                  <div className="flex flex-col gap-1">
                    <small>{parcel.name}</small>
                    <small>{parcel.phone}</small>
                    <small>{parcel.to_address}</small>
                  </div>
                </td>
                <td className="text-xl">
                  <button className="font-serif btn-sm btn-warning rounded-md">
                    Reject
                  </button>
                </td>
                <td className="text-xl">
                  <Link to={`../invoice/${parcel._id}`}>
                    <button className="btn bg-[#1E62D4] hover:bg-[#1E62D4] text-white flex items-center">
                      <FaEye />
                      Invoice
                    </button>
                  </Link>
                </td>
                <td className="text-xl">
                  <div className="flex flex-col gap-1">
                    <span>
                      {parseFloat(parcel.product_amount) -
                        parseFloat(parcel.total_amount)}{" "}
                      Tk.
                    </span>
                    <div className="dropdown dropdown-bottom text-black">
                      <label tabIndex={0} className="font-pppins">
                        due
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48"
                      >
                        <li>
                          <a>Paid</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <ParcelRejectForm isVisible={showModal} onClose={() => setShowModal(false)}></ParcelRejectForm> */}
    </div>
  );
};

export default AllParcel;
