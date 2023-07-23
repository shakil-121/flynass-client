import React, { useState } from 'react';
import axios from 'axios';
import useAuth from "../Hooks/useAuth"
import Swal from 'sweetalert2'
import useUserInfo from '../Hooks/useUserInfo';


const CSVUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // const [userEmail, setUserEmail] = useState(''); 
  const {user}=useAuth()
  const userInfo=useUserInfo()
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
    formData.append('marchent', userInfo?._id);
    console.log();

    axios
      .post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        if(response)
        {
          Swal.fire({
            icon: 'success',
            title: 'Order Status',
            text: 'Order Successfully Added',
            footer: 'Please , Reload this page for Another Multi-order'
          })
        } 
        
      })
      
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div>
     <div className='px-10 py-5 border border-stone-500 md:w-[35%] w-[40%]'>
     <input  type="file" onChange={handleFileChange} required/>
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