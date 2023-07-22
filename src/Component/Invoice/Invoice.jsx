import logo from '../../assets/logo/logo.png';
import { useParams } from 'react-router-dom';
import useParcel from '../../Hooks/useParcel';
import { FaDownload, FaPrint, FaRegEdit } from 'react-icons/fa';
import ParcelEdit from '../ParcelEdit/ParcelEdit';
import { useState } from 'react';

const Invoice = () => {
    const [showModal, setShowModal] = useState(false);
    const parcelId = useParams();
    const allParce = useParcel();
    const invoiceParcel = allParce.find(parcel => parcel._id === parcelId.id);

    return (
        <div className='flex justify-center items-center h-full'>
            <div>
                <div className='flex justify-between mb-10'>
                    <button onClick={() => setShowModal(true)} className='btn btn-primary flex items-center justify-center'><FaRegEdit />Edit</button>
                    <button className='btn btn-primary flex items-center justify-center'><FaDownload />Download</button>
                    <button className='btn btn-primary flex items-center justify-center'><FaPrint />Print</button>
                </div>
                <div className='bg-gray-100 rounded-xl'>
                    <div className='flex items-center justify-between mb-8'>
                        <img className='w-36' src={logo} alt="" />
                        <h1 className='text-3xl font-serif font-semibold bg-gray-300 ps-8 pe-5 py-4 rounded-bl-full '>Invoice</h1>
                    </div>
                    <div className='p-5'>
                        <h1 className='text-xl text-center font-pppins mb-10'>Tracking ID: <br /> {invoiceParcel._id}</h1>
                        <h2 className='text-2xl font-serif mb-3'>Name: <span>{invoiceParcel.name}</span></h2>
                        <h2 className='text-2xl font-serif mb-3'>Name: <span>{invoiceParcel.phone}</span></h2>
                        <h2 className='text-2xl font-serif mb-3'>Cutomer Address: <span>{invoiceParcel.to_address}</span></h2>
                        <h2 className='text-2xl font-serif mb-3'>Price: <span>{invoiceParcel.total_amount}Tk.</span></h2>
                        <h2 className='text-2xl font-serif mt-10 text-center'>[Merchant Copy]</h2>
                        <p className='text-center font-serif'>www.flynass.com</p>
                    </div>
                </div>
            </div>
            <ParcelEdit isVisible={showModal} onClose={() => setShowModal(false)} invoiceParcel={invoiceParcel}></ParcelEdit>
        </div>
    );
};

export default Invoice;