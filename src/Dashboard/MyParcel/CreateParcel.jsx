import Select from "react-select";
import "./CreateParcel.css";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const CreateParcel = ({ isVisible, onClose }) => {
  const [currentDistrict, setCurrentDistrict] = useState(null);
  const [currentThana, setCurrentThana] = useState(null);
  const [cod, setCod] = useState(0);
  const [delivaryCharge, setDelivaryCharge] = useState(0);
  const [amount, setamount] = useState(0)
  const { user } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // ================================Delivary charge calculation===========
  const handledelivarycharge = (e) => {
    const delivaryCharge = parseFloat(e.value);
    console.log(delivaryCharge);
    setDelivaryCharge(delivaryCharge);
  };

  const totalAmount = delivaryCharge + cod;
  //   console.log("total:", totalAmount);

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Add 1 to get the actual month (January is 0)
  const year = currentDate.getFullYear();

  // console.log(`Current date: ${day}-${month}-${year}`);

  const onSubmit = (data) => {
    // const maindata = [`${day}/${month}/${year}`, data.name];
    // console.log(maindata);
    const date = `${day}/${month}/${year}`
    const orderInfo = {
      date: date,
      from_address: data.from_address,
      user_email: user?.email,
      phone: data.phone,
      name: data.name,
      to_address: data.to_address,
      district: currentDistrict,
      thana: currentThana,
      marchent_id: data.marchent_id,
      product_amount: amount,
      delivary_Charge: delivaryCharge,
      cod: cod,
      total_amount: totalAmount,
      status: "pending",
      amount_status: "due"
    }
    console.log(orderInfo)

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(orderInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Parcel Order Status',
            text: 'your Parcel Order Successfully',
            icon: 'success',
            confirmButtonText: 'Done'
          })
        }
        reset()
      })
  };

  if (!isVisible) return null;

  //   console.log(currentThana);

  const handleDistrictOnChange = (e) => {
    // const district = e;
    console.log(e.value);
    setCurrentDistrict(e.value);
    setCurrentThana("");
    setCod("");
    
  };

  const handleThanaOnChange = (e) => {
    setCurrentThana(e.value);
    setDelivaryCharge('');



  };

  const handleParcelAmount = (event) => {
    const amount = event.target.value;
    const COD = amount / 100;
    setamount(amount)

    if (currentDistrict == "Dhaka") {
      setCod(0);
    }
   else if(currentDistrict == "Dhaka_Sub_Area")
    {
      setCod(0);
    }
    else {
      setCod(COD);
    }
    // setAmount(codAmount);
  };

  // const [selectedOption, setSelectedOption] = useState(deliveryChargeDhaka[0].label);

  // Delivery charge inside Dhaka
  const deliveryChargeDhaka = [
    { value: 70, label: "0-1KG" },
    { value: 90, label: "1-2KG" },
    { value: 110, label: "2-3KG" },
    { value: 130, label: "3-4KG" },
    { value: 150, label: "4-5KG" },
    { value: 170, label: "5-6KG" },
    { value: 190, label: "6-7KG" },
    { value: 210, label: "7-8KG" },
    { value: 230, label: "8-9KG" },
    { value: 250, label: "9-10KG" },
  ];

  const deliveryChargeOthercity = [
    { value: 130, label: "0-1KG" },
    { value: 160, label: "1-2KG" },
    { value: 190, label: "2-3KG" },
    { value: 220, label: "3-4KG" },
    { value: 250, label: "4-5KG" },
    { value: 280, label: "5-6KG" },
    { value: 310, label: "6-7KG" },
    { value: 340, label: "7-8KG" },
    { value: 370, label: "8-9KG" },
    { value: 400, label: "9-10KG" },
  ];
  
  const deliveryChargeDhakaSubArea = [
    { value: 110, label: "0-1KG" },
    { value: 135, label: "1-2KG" },
    { value: 160, label: "2-3KG" },
    { value: 185, label: "3-4KG" },
    { value: 210, label: "4-5KG" },
    { value: 235, label: "5-6KG" },
    { value: 260, label: "6-7KG" },
    { value: 285, label: "7-8KG" },
    { value: 310, label: "8-9KG" },
    { value: 335, label: "9-10KG" },
  ];
  

  //All District in Bangladesh
  const district = [
    { value: "Dhaka_Sub_Area", label: "Dhaka Sub Area" },
    { value: "Bagerhat", label: "Bagerhat" },
    { value: "Bandarban", label: "Bandarban" },
    { value: "Barguna", label: "Barguna" },
    { value: "Barisal", label: "Barisal" },
    { value: "Bhola", label: "Bhola" },
    { value: "Bogra", label: "Bogra" },
    { value: "Brahmanbaria", label: "Brahmanbaria" },
    { value: "Chandpur", label: "Chandpur" },
    { value: "Chapai Nawabganj", label: "Chapai Nawabganj" },
    { value: "Chattogram", label: "Chattogram" },
    { value: "Chuadanga", label: "Chuadanga" },
    { value: "Comilla", label: "Comilla" },
    { value: "Cox_Bazar", label: "Cox's Bazar" },
    { value: "Dhaka", label: "Dhaka" },
    { value: "Dinajpur", label: "Dinajpur" },
    { value: "Faridpur", label: "Faridpur" },
    { value: "Feni", label: "Feni" },
    { value: "Gaibandha", label: "Gaibandha" },
    { value: "Gazipur", label: "Gazipur" },
    { value: "Gopalganj", label: "Gopalganj" },
    { value: "Habiganj", label: "Habiganj" },
    { value: "Jamalpur", label: "Jamalpur" },
    { value: "Jessore", label: "Jessore" },
    { value: "Jhalokati", label: "Jhalokati" },
    { value: "Jhenaidah", label: "Jhenaidah" },
    { value: "Joypurhat", label: "Joypurhat" },
    { value: "Khagrachhari", label: "Khagrachhari" },
    { value: "Khulna", label: "Khulna" },
    { value: "Kishoreganj", label: "Kishoreganj" },
    { value: "Kurigram", label: "Kurigram" },
    { value: "Kushtia", label: "Kushtia" },
    { value: "Lakshmipur", label: "Lakshmipur" },
    { value: "Lalmonirhat", label: "Lalmonirhat" },
    { value: "Madaripur", label: "Madaripur" },
    { value: "Magura", label: "Magura" },
    { value: "Manikganj", label: "Manikganj" },
    { value: "Meherpur", label: "Meherpur" },
    { value: "Moulvibazar", label: "Moulvibazar" },
    { value: "Munshiganj", label: "Munshiganj" },
    { value: "Mymensingh", label: "Mymensingh" },
    { value: "Naogaon", label: "Naogaon" },
    { value: "Narail", label: "Narail" },
    { value: "Narayanganj", label: "Narayanganj" },
    { value: "Narsingdi", label: "Narsingdi" },
    { value: "Natore", label: "Natore" },
    { value: "Netrokona", label: "Netrokona" },
    { value: "Nilphamari", label: "Nilphamari" },
    { value: "Noakhali", label: "Noakhali" },
    { value: "Pabna", label: "Pabna" },
    { value: "Panchagarh", label: "Panchagarh" },
    { value: "Patuakhali", label: "Patuakhali" },
    { value: "Pirojpur", label: "Pirojpur" },
    { value: "Rajbari", label: "Rajbari" },
    { value: "Rajshahi", label: "Rajshahi" },
    { value: "Rangamati", label: "Rangamati" },
    { value: "Rangpur", label: "Rangpur" },
    { value: "Satkhira", label: "Satkhira" },
    { value: "Shariatpur", label: "Shariatpur" },
    { value: "Sherpur", label: "Sherpur" },
    { value: "Sirajganj", label: "Sirajganj" },
    { value: "Sunamganj", label: "Sunamganj" },
    { value: "Sylhet", label: "Sylhet" },
    { value: "Tangail", label: "Tangail" },
    { value: "Thakurgaon", label: "Thakurgaon" },
  ];

  // ALL Thana information
  const Dhaka_Sub_Area = [
    { value: "Savar", label: "Savar" },
    { value: "Narayanganj", label: "Narayanganj" },
    { value: "Keranigonj", label: "Keranigonj" },
    { value: "Dohar", label: "Dohar" },
    { value: "Nobabganj", label: "Nobabganj" },
    { value: "Ashuliya", label: "Ashuliya" },
    { value: "Tongi", label: "Tongi" },
    { value: "Gazipur", label: "Gazipur" },
  ]
  const Dhaka = [
    { value: "Adabor", label: "Adabor" },
    { value: "Badda", label: "Badda" },
    { value: "Banani", label: "Banani" },
    { value: "Bangshal", label: "Bangshal" },
    { value: "Bimanbandar", label: "Bimanbandar" },
    { value: "Bsahantek", label: "Bsahantek" },
    { value: "Cantonment", label: "Cantonment" },
    { value: "Chalkbazar", label: "Chalkbazar" },
    { value: "Dakhin Khan", label: "Dakhin Khan" },
    { value: "Darus-Salam", label: "Darus-Salam" },
    { value: "Demra", label: "Demra" },
    { value: "Dhanmondi", label: "Dhanmondi" },
    { value: "Gandaria", label: "Gandaria" },
    { value: "Gulshan", label: "Gulshan" },
    { value: "Hazaribag", label: "Hazaribag" },
    { value: "Jattrabari", label: "Jattrabari" },
    { value: "Kafrul", label: "Kafrul" },
    { value: "Kalabagan", label: "Kalabagan" },
    { value: "Kamrangirchar", label: "Kamrangirchar" },
    { value: "Khilgaon", label: "Khilgaon" },
    { value: "Khilkhet", label: "Khilkhet" },
    { value: "Kodomtali", label: "Kodomtali" },
    { value: "Kotwali", label: "Kotwali" },
    { value: "Lalbagh", label: "Lalbagh" },
    { value: "Mirpur Model", label: "Mirpur Model" },
    { value: "Mohammadpur", label: "Mohammadpur" },
    { value: "Motijheel", label: "Motijheel" },
    { value: "Mugda", label: "Mugda" },
    { value: "New Market", label: "New Market" },
    { value: "Pallabi", label: "Pallabi" },
    { value: "Paltan", label: "Paltan" },
    { value: "Ramna Model", label: "Ramna Model" },
    { value: "Rampura", label: "Rampura" },
    { value: "Rupnagar", label: "Rupnagar" },
    { value: "Sabujbag", label: "Sabujbag" },
    { value: "Shah Ali", label: "Shah Ali" },
    { value: "Shahbag", label: "Shahbag" },
    { value: "Shahjahanpur", label: "Shahjahanpur" },
    { value: "Sutrapur", label: "Sutrapur" },
    { value: "Shyampur", label: "Shyampur" },
    { value: "Sher-e-Bangla Nagar", label: "Sher-e-Bangla Nagar" },
    { value: "Tejgaon Industrial Police", label: "Tejgaon Industrial Police" },
    { value: "Tejgaon", label: "Tejgaon" },
    { value: "Turag", label: "Turag" },
    { value: "Uttara East", label: "Uttara East" },
    { value: "Uttara West", label: "Uttara West" },
    { value: "Uttar Khan", label: "Uttar Khan" },
    { value: "Vatara", label: "Vatara" },
    { value: "Wari", label: "Wari" },
  ];

  const Bagerhat = [
    { value: "Bagerhat Sadar", label: "Bagerhat Sadar" },
    { value: "Chitalmari", label: "Chitalmari" },
    { value: "Fakirhat", label: "Fakirhat" },
    { value: "Kachua", label: "Kachua" },
    { value: "Mollahat", label: "Mollahat" },
    { value: "Mongla", label: "Mongla" },
    { value: "Morrelganj", label: "Morrelganj" },
    { value: "Rampal", label: "Rampal" },
    { value: "Sarankhola", label: "Sarankhola" },
  ];

  const Bandarban = [
    { value: "Bandarban Sadar", label: "Bandarban Sadar" },
    { value: "Thanchi", label: "Thanchi" },
    { value: "Lama", label: "Lama" },
    { value: "Naikhongchhari", label: "Naikhongchhari" },
    { value: "Ali Kadam", label: "Ali Kadam" },
    { value: "Rowangchhari", label: "Rowangchhari" },
    { value: "Ruma", label: "Ruma" },
  ];

  const Barguna = [
    { value: "Barguna Sadar", label: "Barguna Sadar" },
    { value: "Amtali", label: "Amtali" },
    { value: "Bamna", label: "Bamna" },
    { value: "Betagi", label: "Betagi" },
    { value: "Patharghata", label: "Patharghata" },
    { value: "Taltali", label: "Taltali" },
    { value: "Lalmohan", label: "Lalmohan" },
  ];

  const Barisal = [
    { value: "Barisal Sadar", label: "Barisal Sadar" },
    { value: "Bakerganj", label: "Bakerganj" },
    { value: "Banaripara", label: "Banaripara" },
    { value: "Gaurnadi", label: "Gaurnadi" },
    { value: "Hizla", label: "Hizla" },
    { value: "Mehendiganj", label: "Mehendiganj" },
    { value: "Muladi", label: "Muladi" },
    { value: "Babuganj", label: "Babuganj" },
    { value: "Agailjhara", label: "Agailjhara" },
    { value: "Wazirpur", label: "Wazirpur" },
  ];

  const Bhola = [
    { value: "Bhola Sadar", label: "Bhola Sadar" },
    { value: "Borhanuddin", label: "Borhanuddin" },
    { value: "Char Fasson", label: "Char Fasson" },
    { value: "Daulatkhan", label: "Daulatkhan" },
    { value: "Lalmohan", label: "Lalmohan" },
    { value: "Manpura", label: "Manpura" },
    { value: "Tajumuddin", label: "Tajumuddin" },
    { value: "Hatia", label: "Hatia" },
    { value: "Monpura", label: "Monpura" },
  ];

  const Bogra = [
    { value: "Bogra Sadar", label: "Bogra Sadar" },
    { value: "Adamdighi", label: "Adamdighi" },
    { value: "Dhunat", label: "Dhunat" },
    { value: "Dupchanchia", label: "Dupchanchia" },
    { value: "Gabtali", label: "Gabtali" },
    { value: "Kahaloo", label: "Kahaloo" },
    { value: "Nandigram", label: "Nandigram" },
    { value: "Sariakandi", label: "Sariakandi" },
    { value: "Sherpur", label: "Sherpur" },
    { value: "Shibganj", label: "Shibganj" },
    { value: "Sonatala", label: "Sonatala" },
    { value: "Dhupchanchia", label: "Dhupchanchia" },
  ];

  const Brahmanbaria = [
    { value: "Brahmanbaria Sadar", label: "Brahmanbaria Sadar" },
    { value: "Akhaura", label: "Akhaura" },
    { value: "Bancharampur", label: "Bancharampur" },
    { value: "Ashuganj", label: "Ashuganj" },
    { value: "Nabinagar", label: "Nabinagar" },
    { value: "Nasirnagar", label: "Nasirnagar" },
    { value: "Sarail", label: "Sarail" },
    { value: "Kasba", label: "Kasba" },
    { value: "Shahbazpur", label: "Shahbazpur" },
    { value: "Nabinagar Cantt.", label: "Nabinagar Cantt." },
    { value: "Ashuganj Port", label: "Ashuganj Port" },
  ];

  const Chapai_Nawabganj = [
    { value: "Chapai Nawabganj Sadar", label: "Chapai Nawabganj Sadar" },
    { value: "Bholahat", label: "Bholahat" },
    { value: "Gomastapur", label: "Gomastapur" },
    { value: "Nachole", label: "Nachole" },
    { value: "Shibganj", label: "Shibganj" },
    { value: "Rohanpur", label: "Rohanpur" },
    { value: "Niamatpur", label: "Niamatpur" },
  ];

  const Chandpur = [
    { value: "Chandpur Sadar", label: "Chandpur Sadar" },
    { value: "Faridganj", label: "Faridganj" },
    { value: "Hajiganj", label: "Hajiganj" },
    { value: "Kachua", label: "Kachua" },
    { value: "Matlab Dakshin", label: "Matlab Dakshin" },
    { value: "Matlab Uttar", label: "Matlab Uttar" },
    { value: "Shahrasti", label: "Shahrasti" },
    { value: "Hayemchar", label: "Hayemchar" },
    { value: "Haziganj", label: "Haziganj" },
    { value: "Kochua", label: "Kochua" },
    { value: "Matlab Dakhshin", label: "Matlab Dakhshin" },
  ];

  const Chattogram = [
    { value: "Anwara", label: "Anwara" },
    { value: "Banshkhali", label: "Banshkhali" },
    { value: "Boalkhali", label: "Boalkhali" },
    { value: "Chandanaish", label: "Chandanaish" },
    { value: "Fatikchhari", label: "Fatikchhari" },
    { value: "Hathazari", label: "Hathazari" },
    { value: "Lohagara", label: "Lohagara" },
    { value: "Mirsharai", label: "Mirsharai" },
    { value: "Patiya", label: "Patiya" },
    { value: "Rangunia", label: "Rangunia" },
    { value: "Raozan", label: "Raozan" },
    { value: "Sandwip", label: "Sandwip" },
    { value: "Satkania", label: "Satkania" },
    { value: "Sitakunda", label: "Sitakunda" },
    { value: "Pahartali", label: "Pahartali" },
  ];

  const Chuadanga = [
    { value: "Chuadanga Sadar", label: "Chuadanga Sadar" },
    { value: "Alamdanga", label: "Alamdanga" },
    { value: "Damurhuda", label: "Damurhuda" },
    { value: "Jibannagar", label: "Jibannagar" },
  ];

  const Comilla = [
    { value: "Comilla Sadar", label: "Comilla Sadar" },
    { value: "Barura", label: "Barura" },
    { value: "Brahmanpara", label: "Brahmanpara" },
    { value: "Burichong", label: "Burichong" },
    { value: "Chandina", label: "Chandina" },
    { value: "Chauddagram", label: "Chauddagram" },
    { value: "Daudkandi", label: "Daudkandi" },
    { value: "Debidwar", label: "Debidwar" },
    { value: "Homna", label: "Homna" },
    { value: "Laksam", label: "Laksam" },
    { value: "Manoharganj", label: "Manoharganj" },
    { value: "Meghna", label: "Meghna" },
    { value: "Monohorganj", label: "Monohorganj" },
    { value: "Muradnagar", label: "Muradnagar" },
    { value: "Nangalkot", label: "Nangalkot" },
    { value: "Titas", label: "Titas" },
  ];

  const Cox_Bazar = [
    { value: "Cox's Bazar Sadar", label: "Cox's Bazar Sadar" },
    { value: "Chakaria", label: "Chakaria" },
    { value: "Kutubdia", label: "Kutubdia" },
    { value: "Maheshkhali", label: "Maheshkhali" },
    { value: "Ramu", label: "Ramu" },
    { value: "Teknaf", label: "Teknaf" },
    { value: "Ukhia", label: "Ukhia" },
  ];

  const Dinajpur = [
    { value: "Dinajpur Sadar", label: "Dinajpur Sadar" },
    { value: "Birampur", label: "Birampur" },
    { value: "Biral", label: "Biral" },
    { value: "Bochaganj", label: "Bochaganj" },
    { value: "Chirirbandar", label: "Chirirbandar" },
    { value: "Phulbari", label: "Phulbari" },
    { value: "Ghoraghat", label: "Ghoraghat" },
    { value: "Hakimpur", label: "Hakimpur" },
    { value: "Kaharol", label: "Kaharol" },
    { value: "Khansama", label: "Khansama" },
    { value: "Nawabganj", label: "Nawabganj" },
    { value: "Parbatipur", label: "Parbatipur" },
    { value: "Fulchhari", label: "Fulchhari" },
  ];

  const Faridpur = [
    { value: "Faridpur Sadar", label: "Faridpur Sadar" },
    { value: "Alfadanga", label: "Alfadanga" },
    { value: "Bhanga", label: "Bhanga" },
    { value: "Boalmari", label: "Boalmari" },
    { value: "Charbhadrasan", label: "Charbhadrasan" },
    { value: "Madhukhali", label: "Madhukhali" },
    { value: "Nagarkanda", label: "Nagarkanda" },
    { value: "Sadarpur", label: "Sadarpur" },
    { value: "Saltha", label: "Saltha" },
  ];

  const Feni = [
    { value: "Feni Sadar", label: "Feni Sadar" },
    { value: "Sonagazi", label: "Sonagazi" },
    { value: "Chhagalnaiya", label: "Chhagalnaiya" },
    { value: "Daganbhuiyan", label: "Daganbhuiyan" },
    { value: "Parshuram", label: "Parshuram" },
    { value: "Fulgazi", label: "Fulgazi" },
  ];

  const Gaibandha = [
    { value: "Gaibandha Sadar", label: "Gaibandha Sadar" },
    { value: "Fulchhari", label: "Fulchhari" },
    { value: "Gobindaganj", label: "Gobindaganj" },
    { value: "Palashbari", label: "Palashbari" },
    { value: "Sadullapur", label: "Sadullapur" },
    { value: "Sundarganj", label: "Sundarganj" },
    { value: "Saghata", label: "Saghata" },
  ];

  const Gazipur = [
    { value: "Gazipur Sadar", label: "Gazipur Sadar" },
    { value: "Kaliakair", label: "Kaliakair" },
    { value: "Kapasia", label: "Kapasia" },
    { value: "Sreepur", label: "Sreepur" },
    { value: "Kaliganj", label: "Kaliganj" },
    { value: "Tongi", label: "Tongi" },
    { value: "Bhawalnagar", label: "Bhawalnagar" },
    { value: "Monnunagar", label: "Monnunagar" },
    { value: "Kaliakair Thana Gazi", label: "Kaliakair Thana Gazi" },
  ];

  const Gopalganj = [
    { value: "Gopalganj Sadar", label: "Gopalganj Sadar" },
    { value: "Kotalipara", label: "Kotalipara" },
    { value: "Tungipara", label: "Tungipara" },
    { value: "Kashiani", label: "Kashiani" },
    { value: "Muksudpur", label: "Muksudpur" },
    { value: "Kawnia", label: "Kawnia" },
    { value: "Bhairabpur", label: "Bhairabpur" },
  ];

  const Habiganj = [
    { value: "Habiganj Sadar", label: "Habiganj Sadar" },
    { value: "Bahubal", label: "Bahubal" },
    { value: "Baniachong", label: "Baniachong" },
    { value: "Chunarughat", label: "Chunarughat" },
    { value: "Ajmiriganj", label: "Ajmiriganj" },
    { value: "Lakhai", label: "Lakhai" },
    { value: "Madhabpur", label: "Madhabpur" },
    { value: "Nabiganj", label: "Nabiganj" },
    { value: "Shayestaganj", label: "Shayestaganj" },
  ];

  const Jamalpur = [
    { value: "Jamalpur Sadar", label: "Jamalpur Sadar" },
    { value: "Madarganj", label: "Madarganj" },
    { value: "Melandaha", label: "Melandaha" },
    { value: "Islampur", label: "Islampur" },
    { value: "Sarishabari", label: "Sarishabari" },
    { value: "Dewanganj", label: "Dewanganj" },
    { value: "Bakshiganj", label: "Bakshiganj" },
  ];

  const Jessore = [
    { value: "Jessore Sadar", label: "Jessore Sadar" },
    { value: "Bagherpara", label: "Bagherpara" },
    { value: "Chaugachha", label: "Chaugachha" },
    { value: "Abhaynagar", label: "Abhaynagar" },
    { value: "Manirampur", label: "Manirampur" },
    { value: "Keshabpur", label: "Keshabpur" },
  ];

  const Jhalokati = [
    { value: "Jhalokati Sadar", label: "Jhalokati Sadar" },
    { value: "Kathalia", label: "Kathalia" },
    { value: "Nalchity", label: "Nalchity" },
    { value: "Rajapur", label: "Rajapur" },
  ];

  const Jhenaidah = [
    { value: "Jhenaidah Sadar", label: "Jhenaidah Sadar" },
    { value: "Kaliganj", label: "Kaliganj" },
    { value: "Kotchandpur", label: "Kotchandpur" },
    { value: "Maheshpur", label: "Maheshpur" },
    { value: "Shailkupa", label: "Shailkupa" },
  ];

  const Joypurhat = [
    { value: "Joypurhat Sadar", label: "Joypurhat Sadar" },
    { value: "Akkelpur", label: "Akkelpur" },
    { value: "Kalai", label: "Kalai" },
    { value: "Khetlal", label: "Khetlal" },
    { value: "Panchbibi", label: "Panchbibi" },
  ];

  const Khagrachhari = [
    { value: "Khagrachhari Sadar", label: "Khagrachhari Sadar" },
    { value: "Dighinala", label: "Dighinala" },
    { value: "Guimara", label: "Guimara" },
    { value: "Laxmichhari", label: "Laxmichhari" },
    { value: "Mahalchhari", label: "Mahalchhari" },
    { value: "Manikchhari", label: "Manikchhari" },
    { value: "Matiranga", label: "Matiranga" },
    { value: "Panchhari", label: "Panchhari" },
    { value: "Ramgarh", label: "Ramgarh" },
  ];

  const Kushtia = [
    { value: "Kushtia Sadar", label: "Kushtia Sadar" },
    { value: "Kumarkhali", label: "Kumarkhali" },
    { value: "Mirpur", label: "Mirpur" },
    { value: "Daulatpur", label: "Daulatpur" },
    { value: "Bheramara", label: "Bheramara" },
    { value: "Khoksa", label: "Khoksa" },
  ];

  const Khulna = [
    { value: "Khulna Sadar", label: "Khulna Sadar" },
    { value: "Batiaghata", label: "Batiaghata" },
    { value: "Dacope", label: "Dacope" },
    { value: "Dumuria", label: "Dumuria" },
    { value: "Dighalia", label: "Dighalia" },
    { value: "Koyra", label: "Koyra" },
    { value: "Paikgacha", label: "Paikgacha" },
    { value: "Phultala", label: "Phultala" },
    { value: "Rupsha", label: "Rupsha" },
    { value: "Terokhada", label: "Terokhada" },
  ];

  const Kishoreganj = [
    { value: "Kishoreganj Sadar", label: "Kishoreganj Sadar" },
    { value: "Astagram", label: "Astagram" },
    { value: "Bajitpur", label: "Bajitpur" },
    { value: "Bhairab", label: "Bhairab" },
    { value: "Hossainpur", label: "Hossainpur" },
    { value: "Itna", label: "Itna" },
    { value: "Karimganj", label: "Karimganj" },
    { value: "Katiadi", label: "Katiadi" },
    { value: "Kuliarchar", label: "Kuliarchar" },
    { value: "Mithamain", label: "Mithamain" },
    { value: "Nikli", label: "Nikli" },
    { value: "Pakundia", label: "Pakundia" },
    { value: "Tarail", label: "Tarail" },
  ];

  const Kurigram = [
    { value: "Kurigram Sadar", label: "Kurigram Sadar" },
    { value: "Bhurungamari", label: "Bhurungamari" },
    { value: "Char Rajibpur", label: "Char Rajibpur" },
    { value: "Chilmari", label: "Chilmari" },
    { value: "Phulbari", label: "Phulbari" },
    { value: "Nageswari", label: "Nageswari" },
    { value: "Rajarhat", label: "Rajarhat" },
    { value: "Raomari", label: "Raomari" },
    { value: "Ulipur", label: "Ulipur" },
  ];

  const Lakshmipur = [
    { value: "Lakshmipur Sadar", label: "Lakshmipur Sadar" },
    { value: "Raipur", label: "Raipur" },
    { value: "Ramganj", label: "Ramganj" },
    { value: "Ramgati", label: "Ramgati" },
    { value: "Kamalnagar", label: "Kamalnagar" },
    { value: "Komolnagar", label: "Komolnagar" },
  ];
  const Lalmonirhat = [
    { value: "Lalmonirhat Sadar", label: "Lalmonirhat Sadar" },
    { value: "Aditmari", label: "Aditmari" },
    { value: "Hatibandha", label: "Hatibandha" },
    { value: "Kaliganj", label: "Kaliganj" },
    { value: "Patgram", label: "Patgram" },
  ];
  const Madaripur = [
    { value: "Madaripur Sadar", label: "Madaripur Sadar" },
    { value: "Kalkini", label: "Kalkini" },
    { value: "Rajoir", label: "Rajoir" },
    { value: "Shibchar", label: "Shibchar" },
  ];
  const Magura = [
    { value: "Magura Sadar", label: "Magura Sadar" },
    { value: "Mohammadpur", label: "Mohammadpur" },
    { value: "Shalikha", label: "Shalikha" },
    { value: "Sreepur", label: "Sreepur" },
  ];
  const Manikganj = [
    { value: "Manikganj Sadar", label: "Manikganj Sadar" },
    { value: "Singair", label: "Singair" },
    { value: "Shibalaya", label: "Shibalaya" },
    { value: "Harirampur", label: "Harirampur" },
    { value: "Ghior", label: "Ghior" },
    { value: "Daulatpur", label: "Daulatpur" },
  ];
  const Meherpur = [
    { value: "Meherpur Sadar", label: "Meherpur Sadar" },
    { value: "Mujibnagar", label: "Mujibnagar" },
    { value: "Gangni", label: "Gangni" },
  ];
  const Moulvibazar = [
    { value: "Moulvibazar Sadar", label: "Moulvibazar Sadar" },
    { value: "Barlekha", label: "Barlekha" },
    { value: "Juri", label: "Juri" },
    { value: "Kamalganj", label: "Kamalganj" },
    { value: "Kulaura", label: "Kulaura" },
    { value: "Rajnagar", label: "Rajnagar" },
    { value: "Sreemangal", label: "Sreemangal" },
  ];
  const Munshiganj = [
    { value: "Munshiganj Sadar", label: "Munshiganj Sadar" },
    { value: "Gazaria", label: "Gazaria" },
    { value: "Lohajang", label: "Lohajang" },
    { value: "Sreenagar", label: "Sreenagar" },
    { value: "Sirajdikhan", label: "Sirajdikhan" },
    { value: "Tongibari", label: "Tongibari" },
  ];
  const Mymensingh = [
    { value: "Mymensingh Sadar", label: "Mymensingh Sadar" },
    { value: "Bhaluka", label: "Bhaluka" },
    { value: "Trishal", label: "Trishal" },
    { value: "Haluaghat", label: "Haluaghat" },
    { value: "Muktagachha", label: "Muktagachha" },
    { value: "Gaffargaon", label: "Gaffargaon" },
    { value: "Ishwarganj", label: "Ishwarganj" },
    { value: "Nandail", label: "Nandail" },
    { value: "Phulpur", label: "Phulpur" },
  ];
  const Naogaon = [
    { value: "Naogaon Sadar", label: "Naogaon Sadar" },
    { value: "Atrai", label: "Atrai" },
    { value: "Badalgachhi", label: "Badalgachhi" },
    { value: "Dhamoirhat", label: "Dhamoirhat" },
    { value: "Manda", label: "Manda" },
    { value: "Mohadevpur", label: "Mohadevpur" },
    { value: "Niamatpur", label: "Niamatpur" },
    { value: "Patnitala", label: "Patnitala" },
    { value: "Porsha", label: "Porsha" },
    { value: "Raninagar", label: "Raninagar" },
    { value: "Sapahar", label: "Sapahar" },
  ];
  const Narail = [
    { value: "Narail Sadar", label: "Narail Sadar" },
    { value: "Kalia", label: "Kalia" },
    { value: "Lohagara", label: "Lohagara" },
  ];
  const Narayanganj = [
    { value: "Narayanganj Sadar", label: "Narayanganj Sadar" },
    { value: "Araihazar", label: "Araihazar" },
    { value: "Rupganj", label: "Rupganj" },
    { value: "Bandar", label: "Bandar" },
    { value: "Sonargaon", label: "Sonargaon" },
  ];
  const Narsingdi = [
    { value: "Narsingdi Sadar", label: "Narsingdi Sadar" },
    { value: "Belabo", label: "Belabo" },
    { value: "Monohardi", label: "Monohardi" },
    { value: "Palash", label: "Palash" },
    { value: "Raipura", label: "Raipura" },
    { value: "Shibpur", label: "Shibpur" },
  ];
  const Natore = [
    { value: "Natore Sadar", label: "Natore Sadar" },
    { value: "Bagatipara", label: "Bagatipara" },
    { value: "Baraigram", label: "Baraigram" },
    { value: "Gurudaspur", label: "Gurudaspur" },
    { value: "Lalpur", label: "Lalpur" },
    { value: "Singra", label: "Singra" },
  ];
  const Netrokona = [
    { value: "Netrokona Sadar", label: "Netrokona Sadar" },
    { value: "Atpara", label: "Atpara" },
    { value: "Barhatta", label: "Barhatta" },
    { value: "Durgapur", label: "Durgapur" },
    { value: "Khaliajuri", label: "Khaliajuri" },
    { value: "Kalmakanda", label: "Kalmakanda" },
    { value: "Madan", label: "Madan" },
    { value: "Mohanganj", label: "Mohanganj" },
    { value: "Purbadhala", label: "Purbadhala" },
  ];

  const Nilphamari = [
    { value: "Nilphamari Sadar", label: "Nilphamari Sadar" },
    { value: "Domar", label: "Domar" },
    { value: "Jaldhaka", label: "Jaldhaka" },
    { value: "Kishoreganj", label: "Kishoreganj" },
    { value: "Saidpur", label: "Saidpur" },
    { value: "Dimla", label: "Dimla" },
    { value: "Taraganj", label: "Taraganj" },
  ];
  const Noakhali = [
    { value: "Noakhali Sadar", label: "Noakhali Sadar" },
    { value: "Begumganj", label: "Begumganj" },
    { value: "Chatkhil", label: "Chatkhil" },
    { value: "Companyganj", label: "Companyganj" },
    { value: "Hatiya", label: "Hatiya" },
    { value: "Senbagh", label: "Senbagh" },
    { value: "Sonaimuri", label: "Sonaimuri" },
    { value: "Subarnachar", label: "Subarnachar" },
    { value: "Kobirhat", label: "Kobirhat" },
  ];
  const Pabna = [
    { value: "Pabna Sadar", label: "Pabna Sadar" },
    { value: "Atgharia", label: "Atgharia" },
    { value: "Bera", label: "Bera" },
    { value: "Bhangura", label: "Bhangura" },
    { value: "Chatmohar", label: "Chatmohar" },
    { value: "Santhia", label: "Santhia" },
    { value: "Sujanagar", label: "Sujanagar" },
  ];
  const Panchagarh = [
    { value: "Panchagarh Sadar", label: "Panchagarh Sadar" },
    { value: "Atwari", label: "Atwari" },
    { value: "Boda", label: "Boda" },
    { value: "Debiganj", label: "Debiganj" },
    { value: "Tetulia", label: "Tetulia" },
  ];
  const Patuakhali = [
    { value: "Patuakhali Sadar", label: "Patuakhali Sadar" },
    { value: "Bauphal", label: "Bauphal" },
    { value: "Dashmina", label: "Dashmina" },
    { value: "Dumki", label: "Dumki" },
    { value: "Galachipa", label: "Galachipa" },
    { value: "Kalapara", label: "Kalapara" },
    { value: "Mirzaganj", label: "Mirzaganj" },
    { value: "Rangabali", label: "Rangabali" },
  ];
  const Pirojpur = [
    { value: "Pirojpur Sadar", label: "Pirojpur Sadar" },
    { value: "Bhandaria", label: "Bhandaria" },
    { value: "Kaukhali", label: "Kaukhali" },
    { value: "Mathbaria", label: "Mathbaria" },
    { value: "Nazirpur", label: "Nazirpur" },
    { value: "Nesarabad", label: "Nesarabad" },
    { value: "Zianagar", label: "Zianagar" },
  ];
  const Rajbari = [
    { value: "Rajbari Sadar", label: "Rajbari Sadar" },
    { value: "Baliakandi", label: "Baliakandi" },
    { value: "Goalandaghat", label: "Goalandaghat" },
    { value: "Pangsha", label: "Pangsha" },
    { value: "Kalukhali", label: "Kalukhali" },
  ];
  const Rajshahi = [
    { value: "Rajshahi Sadar", label: "Rajshahi Sadar" },
    { value: "Bagha", label: "Bagha" },
    { value: "Bagmara", label: "Bagmara" },
    { value: "Charghat", label: "Charghat" },
    { value: "Durgapur", label: "Durgapur" },
    { value: "Godagari", label: "Godagari" },
    { value: "Mohanpur", label: "Mohanpur" },
    { value: "Paba", label: "Paba" },
    { value: "Puthia", label: "Puthia" },
    { value: "Tanore", label: "Tanore" },
  ];
  const Rangamati = [
    { value: "Rangamati Sadar", label: "Rangamati Sadar" },
    { value: "Bagaichhari", label: "Bagaichhari" },
    { value: "Barkal", label: "Barkal" },
    { value: "Kaptai", label: "Kaptai" },
    { value: "Juraichhari", label: "Juraichhari" },
    { value: "Langadu", label: "Langadu" },
    { value: "Nannerchar", label: "Nannerchar" },
    { value: "Rajasthali", label: "Rajasthali" },
  ];
  const Rangpur = [
    { value: "Rangpur Sadar", label: "Rangpur Sadar" },
    { value: "Badarganj", label: "Badarganj" },
    { value: "Gangachara", label: "Gangachara" },
    { value: "Kaunia", label: "Kaunia" },
    { value: "Mithapukur", label: "Mithapukur" },
    { value: "Pirgachha", label: "Pirgachha" },
    { value: "Pirganj", label: "Pirganj" },
    { value: "Taraganj", label: "Taraganj" },
  ];
  const Satkhira = [
    { value: "Satkhira Sadar", label: "Satkhira Sadar" },
    { value: "Assasuni", label: "Assasuni" },
    { value: "Debhata", label: "Debhata" },
    { value: "Kaliganj", label: "Kaliganj" },
    { value: "Kolaroa", label: "Kolaroa" },
    { value: "Shyamnagar", label: "Shyamnagar" },
    { value: "Tala", label: "Tala" },
  ];
  const Shariatpur = [
    { value: "Shariatpur Sadar", label: "Shariatpur Sadar" },
    { value: "Bhedarganj", label: "Bhedarganj" },
    { value: "Damudya", label: "Damudya" },
    { value: "Gosairhat", label: "Gosairhat" },
    { value: "Naria", label: "Naria" },
    { value: "Zanjira", label: "Zanjira" },
  ];
  const Sherpur = [
    { value: "Sherpur Sadar", label: "Sherpur Sadar" },
    { value: "Jhenaigati", label: "Jhenaigati" },
    { value: "Nalitabari", label: "Nalitabari" },
    { value: "Sreebardi", label: "Sreebardi" },
  ];
  const Sirajganj = [
    { value: "Sirajganj Sadar", label: "Sirajganj Sadar" },
    { value: "Belkuchi", label: "Belkuchi" },
    { value: "Chauhali", label: "Chauhali" },
    { value: "Kamarkhanda", label: "Kamarkhanda" },
    { value: "Kazipur", label: "Kazipur" },
    { value: "Raiganj", label: "Raiganj" },
    { value: "Shahjadpur", label: "Shahjadpur" },
    { value: "Tarash", label: "Tarash" },
    { value: "Ullahpara", label: "Ullahpara" },
  ];
  const Sunamganj = [
    { value: "Sunamganj Sadar", label: "Sunamganj Sadar" },
    { value: "Bishwamvarpur", label: "Bishwamvarpur" },
    { value: "Chhatak", label: "Chhatak" },
    { value: "Derai", label: "Derai" },
    { value: "Dharampasha", label: "Dharampasha" },
    { value: "Dowarabazar", label: "Dowarabazar" },
    { value: "Jagannathpur", label: "Jagannathpur" },
    { value: "Jamalganj", label: "Jamalganj" },
    { value: "Sulla", label: "Sulla" },
    { value: "Tahirpur", label: "Tahirpur" },
  ];
  const Sylhet = [
    { value: "Sylhet Sadar", label: "Sylhet Sadar" },
    { value: "Balaganj", label: "Balaganj" },
    { value: "Beanibazar", label: "Beanibazar" },
    { value: "Bishwanath", label: "Bishwanath" },
    { value: "Companiganj", label: "Companiganj" },
    { value: "Fenchuganj", label: "Fenchuganj" },
    { value: "Golapganj", label: "Golapganj" },
    { value: "Gowainghat", label: "Gowainghat" },
    { value: "Jaintiapur", label: "Jaintiapur" },
    { value: "Kanaighat", label: "Kanaighat" },
    { value: "Zakiganj", label: "Zakiganj" },
  ];
  const Tangail = [
    { value: "Tangail Sadar", label: "Tangail Sadar" },
    { value: "Basail", label: "Basail" },
    { value: "Bhuapur", label: "Bhuapur" },
    { value: "Delduar", label: "Delduar" },
    { value: "Ghatail", label: "Ghatail" },
    { value: "Gopalpur", label: "Gopalpur" },
    { value: "Kalihati", label: "Kalihati" },
    { value: "Madhupur", label: "Madhupur" },
    { value: "Mirzapur", label: "Mirzapur" },
    { value: "Nagarpur", label: "Nagarpur" },
    { value: "Sakhipur", label: "Sakhipur" },
  ];
  const Thakurgaon = [
    { value: "Thakurgaon Sadar", label: "Thakurgaon Sadar" },
    { value: "Baliadangi", label: "Baliadangi" },
    { value: "Haripur", label: "Haripur" },
    { value: "Pirganj", label: "Pirganj" },
    { value: "Ranisankail", label: "Ranisankail" },
  ];

  return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
      <div className="w-full md:w-[800px] my-24 flex flex-col  rounded-lg ">
        <button
          onClick={() => onClose()}
          className="btn btn-circle btn-outline border-black text-blcak place-self-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Form Start */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-blue-900 text-white  overflow-x-auto  h-[90vh] p-10 rounded-md">
            <div className="text-white flex flex-col gap-3 mb-5">
              <h1 className="text-3xl font-pppins">
                Customer Details
              </h1>
              <p className="font-pppins">From Doorstep</p>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="input input-bordered"
                  name="from_address"
                  {...register("from_address", { required: true })}
                />
              </div>

              <p className="font-pppins ">To Doorstep</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-black mb-5">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered"
                  {...register("phone", { required: true })}
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
              </div>
            </div>

            <div className=" text-black mb-5">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Enter Customer’s Detailed Address"
                  className="input input-bordered"
                  {...register("to_address", { required: true })}
                />
              </div>
            </div>
            <div className="text-black grid grid-cols-2 gap-4">
              <div>
                <Select
                  options={district}
                  defaultValue={currentDistrict}
                  placeholder="Select Delivery District"
                  onChange={handleDistrictOnChange}
                  isSearchable
                />
              </div>

              <div>
                {currentDistrict === "Jamalpur" && (
                  <div>
                    <Select
                      options={Jamalpur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Dhaka" && (
                  <div>
                    <Select
                      options={Dhaka}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Bagerhat" && (
                  <div>
                    <Select
                      options={Bagerhat}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Bandarban" && (
                  <div>
                    <Select
                      options={Bandarban}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Barguna" && (
                  <div>
                    <Select
                      options={Barguna}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Barisal" && (
                  <div>
                    <Select
                      options={Barisal}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Bhola" && (
                  <div>
                    <Select
                      options={Bhola}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Bogra" && (
                  <div>
                    <Select
                      options={Bogra}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Brahmanbaria" && (
                  <div>
                    <Select
                      options={Brahmanbaria}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Chapai_Nawabganj" && (
                  <div>
                    <Select
                      options={Chapai_Nawabganj}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Chandpur" && (
                  <div>
                    <Select
                      options={Chandpur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Chattogram" && (
                  <div>
                    <Select
                      options={Chattogram}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Chuadanga" && (
                  <div>
                    <Select
                      options={Chuadanga}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Comilla" && (
                  <div>
                    <Select
                      options={Comilla}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Cox_Bazar" && (
                  <div>
                    <Select
                      options={Cox_Bazar}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Dinajpur" && (
                  <div>
                    <Select
                      options={Dinajpur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Faridpur" && (
                  <div>
                    <Select
                      options={Faridpur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Feni" && (
                  <div>
                    <Select
                      options={Feni}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Gaibandha" && (
                  <div>
                    <Select
                      options={Gaibandha}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Gazipur" && (
                  <div>
                    <Select
                      options={Gazipur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Gopalganj" && (
                  <div>
                    <Select
                      options={Gopalganj}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Habiganj" && (
                  <div>
                    <Select
                      options={Habiganj}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Jessore" && (
                  <div>
                    <Select
                      options={Jessore}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Jhenaidah" && (
                  <div>
                    <Select
                      options={Jhenaidah}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Jhalokati" && (
                  <div>
                    <Select
                      options={Jhalokati}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Joypurhat" && (
                  <div>
                    <Select
                      options={Joypurhat}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Khagrachhari" && (
                  <div>
                    <Select
                      options={Khagrachhari}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Kushtia" && (
                  <div>
                    <Select
                      options={Kushtia}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Khulna " && (
                  <div>
                    <Select
                      options={Khulna}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Kishoreganj  " && (
                  <div>
                    <Select
                      options={Kishoreganj}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Kurigram" && (
                  <div>
                    <Select
                      options={Kurigram}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Kishoreganj" && (
                  <div>
                    <Select
                      options={Kishoreganj}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Lakshmipur" && (
                  <div>
                    <Select
                      options={Lakshmipur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Lalmonirhat" && (
                  <div>
                    <Select
                      options={Lalmonirhat}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Madaripur" && (
                  <div>
                    <Select
                      options={Madaripur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Magura" && (
                  <div>
                    <Select
                      options={Magura}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Manikganj" && (
                  <div>
                    <Select
                      options={Manikganj}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Meherpur" && (
                  <div>
                    <Select
                      options={Meherpur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Moulvibazar" && (
                  <div>
                    <Select
                      options={Moulvibazar}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Munshiganj" && (
                  <div>
                    <Select
                      options={Munshiganj}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Mymensingh" && (
                  <div>
                    <Select
                      options={Mymensingh}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Naogaon" && (
                  <div>
                    <Select
                      options={Naogaon}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Narail" && (
                  <div>
                    <Select
                      options={Narail}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Narayanganj" && (
                  <div>
                    <Select
                      options={Narayanganj}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Narsingdi" && (
                  <div>
                    <Select
                      options={Narsingdi}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Natore" && (
                  <div>
                    <Select
                      options={Natore}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Netrokona" && (
                  <div>
                    <Select
                      options={Netrokona}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Nilphamari" && (
                  <div>
                    <Select
                      options={Nilphamari}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Noakhali" && (
                  <div>
                    <Select
                      options={Noakhali}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Pabna" && (
                  <div>
                    <Select
                      options={Pabna}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Panchagarh" && (
                  <div>
                    <Select
                      options={Panchagarh}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Patuakhali" && (
                  <div>
                    <Select
                      options={Patuakhali}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Pirojpur" && (
                  <div>
                    <Select
                      options={Pirojpur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Rajbari" && (
                  <div>
                    <Select
                      options={Rajbari}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Rajshahi" && (
                  <div>
                    <Select
                      options={Rajshahi}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Rangamati" && (
                  <div>
                    <Select
                      options={Rangamati}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Rangpur" && (
                  <div>
                    <Select
                      options={Rangpur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Satkhira" && (
                  <div>
                    <Select
                      options={Satkhira}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Shariatpur" && (
                  <div>
                    <Select
                      options={Shariatpur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Shariatpur" && (
                  <div>
                    <Select
                      options={Shariatpur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Sirajganj" && (
                  <div>
                    <Select
                      options={Sirajganj}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Sherpur" && (
                  <div>
                    <Select
                      options={Sherpur}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Sunamganj" && (
                  <div>
                    <Select
                      options={Sunamganj}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Sylhet" && (
                  <div>
                    <Select
                      options={Sylhet}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Tangail" && (
                  <div>
                    <Select
                      options={Sirajganj}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}

                {currentDistrict === "Thakurgaon" && (
                  <div>
                    <Select
                      options={Thakurgaon}
                      defaultValue="Select Delivery Thana"
                      onChange={handleThanaOnChange}
                      isSearchable
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <div>
                <h1 className="text-3xl font-pppins">
                  Parcel Details
                </h1>
              </div>
              <div>
                <div className="form-control text-black">
                  <input
                    type="text"
                    placeholder="Marchent Order ID"
                    className="input input-bordered"
                    {...register("marchent_id", { required: true })}

                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {currentThana ? (
                <>
                  <div className="form-control mt-5">
                    <input
                      onChange={handleParcelAmount}
                      type="text"
                      placeholder="Amount"
                      className="input input-bordered text-black"
                    // {...register("product_amount", { required: true })}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="form-control my-2">
                {currentDistrict === "Dhaka" && currentDistrict!="Dhaka_Sub_Area"   ?  (
                  <>
                    <div className="text-black">
                      <Select
                        options={deliveryChargeDhaka}
                        // defaultInputValue={deliveryChargeDhaka[0].label}
                        defaultValue="Select Product Weight"
                        onChange={handledelivarycharge}
                        isSearchable
                      />
                    </div>
                  </>
                ) : (
                  <>
                  </>
                )}
                {
                  currentDistrict!="Dhaka" && currentDistrict!="Dhaka_Sub_Area"?
                  <>
                   <div className="text-black">
                      <Select
                        options={deliveryChargeOthercity}
                        defaultValue="Select Product Weight"
                        onChange={handledelivarycharge}
                        isSearchable
                      />
                    </div>
                  </>:<></>
                }
              </div>
              {/* //dhaka sub Area */}
              <div>
                {currentDistrict === "Dhaka_Sub_Area" ?
                 <>
                  <div>
                    <Select
                      options={deliveryChargeDhakaSubArea}
                      defaultValue="Select Product Weight"
                      onChange={handledelivarycharge}
                      isSearchable
                    />
                  </div>
                 </>:<></>
                }
              </div>
            </div>
            <div className="my-4 font-pppins">
              <h1 className=" text-2xl mb-3">Charges:</h1>
              <div>
                Delivary Charge:{" "}
                {delivaryCharge == "" ? <>0.00</> : <>{delivaryCharge}</>} TK
              </div>
              <div>COD: {cod == "" ? <>0.00</> : <>{cod}</>} TK</div>
              <h1>--------------------------------</h1>
              <h1>Total Amount: {totalAmount} TK</h1>
            </div>
            <button className="btn btn-primary">Place Order</button>
            {/* <input type="submit" /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateParcel;
