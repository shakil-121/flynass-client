import React from "react";
import map from "../../assets/images/map.png";
import "./Coverage.css"; 
import cover from "../../assets/images/_Delivery Point.png"
import useTitle from "../../Hooks/useTitle";

const Coverage = () => {
  useTitle("Coverage")
  return (
    <div> 
      <div className="pt-16">
        <img src={cover} alt="" />
      </div>
      <div className="max-w-screen-xl px-10">
        <h1 className="mt-10 max-w-lg md:text-4xl text-2xl font-bold border-l-8 border-[#111042] p-2 font">
          Coverage Map
        </h1>
        <p className="md:text-lg text-base font-bold mt-4 font">
          We are currently available in 64 districts in Bangladesh.
        </p>
      </div>
      <div className="md:flex w-full px-16">
        <div className="md:flex justify-between my-16 gap-20 w-1/2">
          <div>
            <ul className="list-disc">
              <li>Bagerhat</li>
              <li>Barishal</li>
              <li>Bandarban</li>
              <li>Barguna</li>
              <li>Bhola</li>
              <li>Bogura</li>
              <li>Brahmanbaria</li>
              <li>Chandpur</li>
              <li>Chapainawabganj</li>
              <li>Chittagong</li>
              <li>Chuadanga</li>
              <li>Comilla</li>
              <li>Cox’s Bazar</li>
              <li>Dhaka</li>
              <li>Dinajpur</li>
              <li>Faridpur</li>
              <li>Feni</li>
              <li>Gaibandha</li>
              <li>Gazipur</li>
              <li>Gopalganj</li>
              <li>Hobigonj</li>
              <li>Jamalpur</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc">
              <li>Jessore</li>
              <li>Jhalokathi</li>
              <li>Jhenaida</li>
              <li>Joypurhat</li>
              <li>Keranigonj</li>
              <li>Khagrachari</li>
              <li>Khulna</li>
              <li>Kishoreganj</li>
              <li>Kurigram</li>
              <li>Kushtia</li>
              <li>Lalmonirhat</li>
              <li>Laxmipur</li>
              <li>Madaripur</li>
              <li>Magura</li>
              <li>Manikganj</li>
              <li>Meherpur</li>
              <li>Naogaon</li>
              <li>Moulvibazar</li>
              <li>Munshiganj</li>
              <li>Mymensingh</li>
              <li>Narail</li>
              <li>Narayanganj</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc">
              <li>Narsingdi</li>
              <li>Natore</li>
              <li>Netrokona</li>
              <li>Nilphamari</li>
              <li>Noakhali</li>
              <li>Pabna</li>
              <li>Panchagarh</li>
              <li>Patuakhali</li>
              <li>Pirojpur</li>
              <li>Rajbari</li>
              <li>Rajshahi</li>
              <li>Rangamati</li>
              <li>Rangpur</li>
              <li>Satkhira</li>
              <li>Savar</li>
              <li>Shariatpur</li>
              <li>Sherpur</li>
              <li>Sirajgonj</li>
              <li>Sunamganj</li>
              <li>Sylhet</li>
              <li>Tangail</li>
              <li>Thakurgaon</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2">
          <img className="md:h-[700px] h-[300px] w-full" src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Coverage;
