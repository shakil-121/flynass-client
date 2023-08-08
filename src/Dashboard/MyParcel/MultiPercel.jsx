import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { FaFileDownload, FaPhoneAlt } from "react-icons/fa";
import CSVUpload from "../../Component/CSVUpload"
import support from "../../assets/images/customer-service.png"
import { Link } from "react-router-dom";

const MultiPercel = () => {
  const [csvData, setCSVData] = useState([]);
  useEffect(() => {
    // Function to fetch and read the CSV file
    const fetchData = async () => {
      try {
        const response = await fetch("../../../public/CSV flynass.csv"); // Adjust the path accordingly
        const text = await response.text();
        const parsedData = text.split("\n").map((row) => row.split(","));
        setCSVData(parsedData);
      } catch (error) {
        console.error("Error fetching the CSV file:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-black font-pppins text-4xl py-10">Multiple Parcel</h1>
      <CSVLink data={csvData} filename="sample.csv">
        <button className="bg-[#1E62D4] hover:bg-[#003899]  px-8 py-5 item-center gap-2 flex text-white font-pppins text-xl">
          {" "}
          Download Sample CSV <FaFileDownload />
        </button>
      </CSVLink>

      <p className="pe-28 py-8 text-xl">
        Download demo file from here to know about the required fields for
        uploading multiple orders at the same file. Demo file does contains
        several example data with column name at first row, These example
        information can be over written in order to upload orders with
        merchant's provided real/accurate information. File format of this demo
        file is '.csv' and this format is required to upload batch file.
         <br/> 
         <br/> 
         
        Note: Your '.xlsx' file must be save '.csv' format and then upload the cvs file for parcel order

      </p> 
      <div className="mb-8">
        <Link to="../instruction" className="bg-[#1E62D4] hover:bg-[#003899]  p-3 text-white font-pppins  rounded-lg">Instruction For Multi-parcel Order </Link>
      </div>
      <div>
        <CSVUpload></CSVUpload>
      </div>
      <div className="flex items-center gap-3 bg-[#E8F6FC] p-3 mb-10 rounded-md me-8">
        <img className="w-16" src={support} alt="" />
        <div>
          <h1 className="font-pppins">Customer Support</h1>
          <h3 className="font-semibold">MD. Sheikh Hasib</h3>
          <h2 className="font-semibold flex items-center gap-2"><FaPhoneAlt /> 09611305423</h2>
        </div>
      </div>
    </div>
  );
};

export default MultiPercel;
