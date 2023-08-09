import React from 'react';
import useParcel from '../../../Hooks/useParcel';
import ExportCSV from './ExportCSV';
import Swal from 'sweetalert2';

const AdminDashbordHistory = () => {
    const [allParcel, refetch] = useParcel();

    const history = allParcel.filter(item => item.status === "delivered" || item.status === "rejected" || item.status === "returned to merchant");

    // const history = allParcel.filter(item => {
    //     console.log("Item status:", item.status);
    //     const isDesiredStatus = item.status === "delivered" || item.status === "rejected" || item.status === "returned to merchant";
    //     console.log("Is desired status:", isDesiredStatus);
    //     return isDesiredStatus;
    // });


    const handledelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to be Delete  all parcel history!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete all!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch("http://localhost:5000/delete", {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        refetch();
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Parcel history has been delete.", "success");
                        }
                    });
            }
        });
        refetch();


        // fetch("http://localhost:5000/delete", {
        //     method: "DELETE"
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        // refetch();
    }

    return (
        <div className='px-10 mt-5'>
            <h1 className='text-3xl font-pppins mb-3'>History</h1>
            <div className='flex justify-between'>
                <button onClick={handledelete} className='bg-red-600 px-4 py-2 font-pppins rounded-lg  text-white'>All Delete</button>
                <ExportCSV data={history} name="History" />
            </div>
            <div className='h-[90vh]  overflow-auto'>
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <tr className='text-center text-black grid md:grid-cols-7 sticky top-0'>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Trackin ID</th>
                        <th>Parcel Amount</th>
                        <th>Delivery Charge</th>
                        <th>Paid Amount</th>
                        <th>Status</th>
                    </tr>
                </table>
                {
                    history.map((parcel, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-7 mb-3 justify-items-center items-center shadow-lg text-sm font-josefin mt-1' key={parcel._id}>
                        <td>{index + 1}</td>
                        <td>{parcel.date}</td>
                        <td className='m-4 font-semibold' style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {parcel.trackingId}
                        </td>
                        <td className='font-semibold'>
                            <p>{parcel.product_amount} Tk</p>
                        </td>
                        <td>
                            {parcel?.total_amount} TK
                        </td>
                        <td>
                            {parcel?.payable_amount} TK
                        </td>
                        <td>
                            {parcel?.status}
                        </td>
                    </tr>)
                }
            </div>
        </div>
    );
};

export default AdminDashbordHistory;
