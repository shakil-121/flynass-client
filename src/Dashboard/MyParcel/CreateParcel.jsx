import Select from 'react-select'
import './CreateParcel.css'
import { useState } from "react";

const CreateParcel = ({ isVisible, onClose, user }) => {
    const [currentDistrict, setCurrentDistrict] = useState(null);
    const [CurrentThana, setCurrentThana] = useState(null);
    const [cod, setCod] = useState(0);
    if (!isVisible) return null;


    const handleDistrictOnChange = (e) => {
        const selectDistrict = e.target.value;
        setDistrict(selectDistrict);
        // Reset sub-category when category changes
        setSubCategory('');
        setCod('');
    };

    // const handleThanaOnChange = (e) => {
    //     const selectedSubCategory = e.target.value;
    //     setSubCategory(selectedSubCategory);
    // };

    // const handleParcelAmount = (event) => {
    //     const codAmount = (event.target.value);
    //     const COD = codAmount / 100;


    //     if (district == 'Dhaka') {
    //         setCod(0)
    //     }
    //     else {
    //         setCod(COD)
    //     }
    //     setAmount(codAmount);

    // };

    

    const district = [
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
        { value: "Thakurgaon", label: "Thakurgaon" }
    ];

    // ALL Thana information
    const Jamalpur = [
        { value: "Jamalpur-Sadar", label: "Jamalpur-Sadar" },
        { value: "Madarganj", label: "Madarganj" },
        { value: "Melandaha", label: "Melandaha" },
        { value: "Sarishabari ", label: "Sarishabari " },
        { value: "Baksiganj ", label: "Baksiganj " },
        { value: "Islampur  ", label: "Islampur  " },
        { value: "Dewanganj", label: "Dewanganj" },
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
        { value: "Wari", label: "Wari" }
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
        { value: "Sarankhola", label: "Sarankhola" }
    ];

    const Bandarban = [
        { value: "Bandarban Sadar", label: "Bandarban Sadar" },
        { value: "Thanchi", label: "Thanchi" },
        { value: "Lama", label: "Lama" },
        { value: "Naikhongchhari", label: "Naikhongchhari" },
        { value: "Ali Kadam", label: "Ali Kadam" },
        { value: "Rowangchhari", label: "Rowangchhari" },
        { value: "Ruma", label: "Ruma" }
    ];

    const Barguna = [
        { value: "Barguna Sadar", label: "Barguna Sadar" },
        { value: "Amtali", label: "Amtali" },
        { value: "Bamna", label: "Bamna" },
        { value: "Betagi", label: "Betagi" },
        { value: "Patharghata", label: "Patharghata" },
        { value: "Taltali", label: "Taltali" },
        { value: "Lalmohan", label: "Lalmohan" }
    ]

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
        { value: "Wazirpur", label: "Wazirpur" }
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
        { value: "Monpura", label: "Monpura" }
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
        { value: "Dhupchanchia", label: "Dhupchanchia" }
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
        { value: "Ashuganj Port", label: "Ashuganj Port" }
    ];

    const Bholahat = [
        { value: "Chapai Nawabganj Sadar", label: "Chapai Nawabganj Sadar" },
        { value: "Bholahat", label: "Bholahat" },
        { value: "Gomastapur", label: "Gomastapur" },
        { value: "Nachole", label: "Nachole" },
        { value: "Shibganj", label: "Shibganj" },
        { value: "Rohanpur", label: "Rohanpur" },
        { value: "Niamatpur", label: "Niamatpur" }
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
        { value: "Matlab Dakhshin", label: "Matlab Dakhshin" }
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
        { value: "Pahartali", label: "Pahartali" }
    ];

    const Chuadanga = [
        { value: "Chuadanga Sadar", label: "Chuadanga Sadar" },
        { value: "Alamdanga", label: "Alamdanga" },
        { value: "Damurhuda", label: "Damurhuda" },
        { value: "Jibannagar", label: "Jibannagar" }
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
        { value: "Titas", label: "Titas" }
    ];

    const Cox_Bazar = [
    { value: "Cox's Bazar Sadar", label: "Cox's Bazar Sadar" },
    { value: "Chakaria", label: "Chakaria" },
    { value: "Kutubdia", label: "Kutubdia" },
    { value: "Maheshkhali", label: "Maheshkhali" },
    { value: "Ramu", label: "Ramu" },
    { value: "Teknaf", label: "Teknaf" },
    { value: "Ukhia", label: "Ukhia" }
    ];

return (
    <div className='fixed inset-0 md:left-1/4  bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-full md:w-[800px] flex flex-col  rounded-lg'>
            <button onClick={() => onClose()} className="btn btn-circle btn-outline border-[#E4D804] text-white place-self-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {/* Form Start */}
            <div className='text-black grid grid-cols-2'>
                <div>
                    <Select
                        options={district}
                        defaultValue={currentDistrict}
                        placeholder='Select Delivery District'
                        onChange={setCurrentDistrict}
                        isSearchable
                    />
                </div>
                <div>
                    {
                        currentDistrict?.value === "Jamalpur" && (
                            <div>
                                <Select
                                    options={Jamalpur}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Dhaka" && (
                            <div>
                                <Select
                                    options={Dhaka}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Bagerhat" && (
                            <div>
                                <Select
                                    options={Bagerhat}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Bandarban" && (
                            <div>
                                <Select
                                    options={Bandarban}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Barguna" && (
                            <div>
                                <Select
                                    options={Barguna}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Barisal" && (
                            <div>
                                <Select
                                    options={Barisal}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Bhola" && (
                            <div>
                                <Select
                                    options={Bhola}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Bogra" && (
                            <div>
                                <Select
                                    options={Bogra}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Brahmanbaria" && (
                            <div>
                                <Select
                                    options={Brahmanbaria}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Bholahat" && (
                            <div>
                                <Select
                                    options={Bholahat}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Chandpur" && (
                            <div>
                                <Select
                                    options={Chandpur}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Chattogram" && (
                            <div>
                                <Select
                                    options={Chattogram}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Chuadanga" && (
                            <div>
                                <Select
                                    options={Chuadanga}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Comilla" && (
                            <div>
                                <Select
                                    options={Comilla}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }

                    {
                        currentDistrict?.value === "Cox_Bazar" && (
                            <div>
                                <Select
                                    options={Cox_Bazar}
                                    defaultValue='Select Delivery Thana'
                                    onChange={setCurrentThana}
                                    isSearchable
                                />
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    </div>
);
};

export default CreateParcel;