import logo from '../../assets/logo/logo.png';
import { useParams } from 'react-router-dom';
import useParcel from '../../Hooks/useParcel';
import { FaDownload, FaPrint, FaRegEdit } from 'react-icons/fa';
import ParcelEdit from '../ParcelEdit/ParcelEdit';
import { useState } from 'react';
import html2pdf from 'html2pdf.js';
import AdminParcelEdit from '../AdminParcelModal/AdminParcelEdit';

const Invoice = () => {
    const [showModal, setShowModal] = useState(false);
    const parcelId = useParams();
    const allParce = useParcel();
    const invoiceParcel = allParce[0].find(parcel => parcel?._id === parcelId.id);
    // const payableAmount = (parseFloat(invoiceParcel?.total_amount) + parseFloat(invoiceParcel?.product_amount));

    const handleDownload = () => {
        const element = document.getElementById('invoice-section');
        const opt = {
            margin: 10,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        // Create a PDF using html2pdf.js and download it
        html2pdf().from(element).set(opt).save();
    };

    const printDivContent = () => {
        const printContents = document.getElementById('invoice-section').innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        // Restore the original content after printing
        document.body.innerHTML = originalContents;
    };

    return (
        <div className='w-[50vw] mx-auto'>
            <div>
                <div className='flex justify-between mb-5'>
                    <button onClick={() => setShowModal(invoiceParcel)} className='btn btn-primary flex items-center justify-center'><FaRegEdit />Edit</button>
                    <button onClick={handleDownload} className='btn btn-primary flex items-center justify-center'><FaDownload />Download</button>
                    <button onClick={printDivContent} className='btn btn-primary flex items-center justify-center'><FaPrint />Print</button>
                </div>
                <div className='bg-gray-100 rounded-xl' id='invoice-section'>
                    <div className='flex items-center justify-between mb-8'>
                        <img className='w-36' src={logo} alt="" />
                        <h1 className='text-3xl font-serif font-semibold bg-gray-300 ps-8 pe-5 py-4 rounded-bl-full '>Invoice</h1>
                    </div>
                    <div className='p-5'>
                        <h1 className='text-xl text-center font-pppins mb-10'>Tracking ID: <br /> {invoiceParcel?.trackingId}</h1>


                        <h2 className='text-2xl font-serif mb-3'>Shop Name: <span>{invoiceParcel?.merchant_name}</span></h2>
                        <h2 className='text-2xl font-serif mb-3'>Customer Name: <span>{invoiceParcel?.name}</span></h2>
                        <h2 className='text-2xl font-serif mb-3'>Phone: <span>{invoiceParcel?.phone}</span></h2>
                        <h2 className='text-2xl font-serif mb-3'>Thana: <span>{invoiceParcel?.thana}</span></h2>
                        <h2 className='text-2xl font-serif mb-3'>District: <span>{invoiceParcel?.district}</span></h2>
                        <h2 className='text-2xl font-serif mb-3'>Customer Address: <span>{invoiceParcel?.to_address}</span></h2>
                        <h2 className='text-2xl font-serif mb-3'>Parcel Amount: <span>{invoiceParcel?.product_amount}Tk.</span></h2>
                        <hr className='border-2' />
                        <h2 className='text-2xl font-serif mb-3'>Parcel Amount: <span>{invoiceParcel?.product_amount}Tk.</span></h2>
                        <h2 className='text-2xl font-serif mt-10 text-center'>[Client Copy]</h2>
                        <p className='text-center font-serif'>www.flynassbd.com</p>
                    </div>
                </div>
            </div>
            <AdminParcelEdit isVisible={showModal} onClose={() => setShowModal(false)} invoiceParcel={invoiceParcel}></AdminParcelEdit>
        </div>
    );
};

export default Invoice;