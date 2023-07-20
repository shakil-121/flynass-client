import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import CreateAdmin from './CreateAdmin';
import { useState } from 'react';

const AllAdmin = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className='px-10 mt-20'>
            <div className='md:flex justify-between'>
                <h1 className='text-3xl font-pppins'>All Admin</h1>
                <button onClick={() => setShowModal(true)} className="btn btn-primary">Create Admin</button>
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-2xl text-black'>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className='text-xl font-pppins'>
                        <th>1</th>
                        <td>Imraz Hasan</td>
                        <td>
                            <button className='btn btn-info'>
                                Info
                            </button>
                        </td>
                        <td className='text-[#D53343] text-2xl'>
                            <FaTrashAlt />
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>1</th>
                        <td>Rabbi Mia</td>
                        <td>
                            <button className='btn btn-info'>
                                Info
                            </button>
                        </td>
                        <td className='text-[#D53343] text-2xl'>
                            <FaTrashAlt />
                        </td>

                    </tr>
                </tbody>
            </table>
            <CreateAdmin isVisible={showModal} onClose={() => setShowModal(false)} ></CreateAdmin>
        </div>
    );
};

export default AllAdmin;