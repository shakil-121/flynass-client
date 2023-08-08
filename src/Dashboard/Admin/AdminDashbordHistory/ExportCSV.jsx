import React from "react";
import { CSVLink } from "react-csv";

const ExportCSV = ({ data, name }) => {
  return (
    <CSVLink
      data={data}
      filename={`${name}.csv`}
      className='bg-green-600 px-4 py-2 font-pppins rounded-lg  text-white'
    >
      Download CSV
    </CSVLink>
  );
};

export default ExportCSV;
