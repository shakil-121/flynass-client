import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { FaFileDownload } from "react-icons/fa";
import CSVUpload from "../../Component/CSVUpload"

const MultiPercel = () => {
  const [csvData, setCSVData] = useState([]);
  useEffect(() => {
    // Function to fetch and read the CSV file
    const fetchData = async () => {
      try {
        const response = await fetch("../../../public/data.csv"); // Adjust the path accordingly
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
      <CSVLink data={csvData} filename="data.csv">
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
      <div>
        <CSVUpload></CSVUpload>
      </div>
    </div>
  );
};

export default MultiPercel;
