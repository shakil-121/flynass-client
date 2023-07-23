import React, { useState } from 'react';
import axios from 'axios';
import useAuth from "../Hooks/useAuth"
import Swal from 'sweetalert2'


const CSVUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // const [userEmail, setUserEmail] = useState(''); 
  const [confirm, setConfirm] = useState('');
  const { user } = useAuth()
  // console.log(user.email);


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // const handleUserEmailChange = (e) => {
  //   setUserEmail(e.target.value);
  // };


  const handleUpload = () => {
    const formData = new FormData();

    formData.append('csvFile', selectedFile);
    formData.append('user_email', user?.email);
    console.log();

    axios
      .post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setConfirm("Order successfull. Please Refresh your page for another order.");
        console.log(response.data);
        // if(response.data.insertedId)
        // {
        //   Swal.fire({
        //     icon: 'success',
        //     title: 'Order Status',
        //     text: 'Order Successfully Added',
        //     footer: '<a href="">Why do I have this issue?</a>'
        //   })
        // } 

      })
      
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div>
      <div className='px-10 py-5 border border-stone-500 w-1/4'>
        <input type="file" onChange={handleFileChange} required />
      </div>
      {/* <input type="text" placeholder="User Email" onChange={handleUserEmailChange} /> */}
      <button className='btn bg-[#1E62D4] font-pppins text-lg mt-4 text-white' onClick={handleUpload}>Multi-parcel Order</button>
      <div>
        <h1 className='text-3xl text-green-400'>
          {confirm}
        </h1>
      </div>
    </div>
  );
};

export default CSVUpload;