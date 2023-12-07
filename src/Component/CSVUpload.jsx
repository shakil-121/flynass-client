import React, { useState } from 'react';
import axios from 'axios';
import useAuth from "../Hooks/useAuth"
import Swal from 'sweetalert2'
import useUserInfo from '../Hooks/useUserInfo';
import useParcel from '../Hooks/useParcel';
import { baseUrl } from '../config/api';


const CSVUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null); 
  const [allParce, refetch] = useParcel();



  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Add 1 to get the actual month (January is 0)
  const year = currentDate.getFullYear(); 

  const date = `${day}/${month}/${year}`


   // tracking id generate
   const previousLength = (allParce.length);
  //  const newLength = previousLength + 1;
  //  const onDigitmiddlePart = newLength.toString();
  //  const fourDigitMiddle = onDigitmiddlePart.padStart(4, "0");
  //  // console.log(fourDigitMiddle);
  //  // const dateString = (`${day}${month}${year}` - "0001" - "FN-HF")
  //  const formattedDay = String(day).padStart(2, "0");
  //  const formattedMonth = String(month).padStart(2, "0");
  //  const formatDate = `${formattedDay}${formattedMonth}${year}`;
  //  const stringDate = formatDate.toString();
  //  // console.log(`Current date: ${formattedDay}${formattedMonth}${year}`);
  //  const lastDigit = "FN-HF";
  //  const trackingId = `${stringDate}-${fourDigitMiddle}-${lastDigit}`;
  //  console.log(trackingId);
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
    formData.append('marchent_id', userInfo?._id);
    formData.append('previousLength', previousLength);
    formData.append('from_address', userInfo?.address);
    formData.append('date', date);
    // console.log();

    axios
      .post(`${baseUrl}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        // console.log(response);
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
     <div className='px-10 py-5 border border-stone-500 md:w-[35%] w-[100%]'>
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