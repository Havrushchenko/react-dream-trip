import React, { useState } from "react";
import { IoIosAirplane } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCalendar3Week } from 'react-icons/bs'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import backgroundVideo from '../../assets/img/background-video.mp4';
import { findFlightout } from '../../utils/api';

export function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const inputs = [
        {
            placeholder: 'Departure City'
        },
        {
            placeholder: 'Destination City'
        }
    ];
    const [formData, setFormData] = useState({
		departure_city: '',
		destination_city: ''
	});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();    
        try {
            const response = await findFlightout(formData);
      
            if (!response.ok) {
              throw new Error('something went wrong!');
            } 
            const flightouts = await response.json();
            console.log(flightouts);
          } catch (err) {
            console.error(err);
          }
      };

    return (
        <div className="flex flex-col items-center justify-center shadow-lg mx-[50px] my-[50px] mt-[50px]">
            <video className="video rounded-[10px] h-[500px] w-[100%] object-cover" src={backgroundVideo} muted autoPlay loop />
            <div className="absolute mt-[-200px]">
                <h2 className="text-[25px] font-bold leading-tight tracking-tight text-green-800 text-center">Book cheep flights<span className="text-white"> other sites simply can't find</span></h2>
            </div>
            <div className="grid absolute gp-10 bg-grey rounded-[10px] shadow-lg">
                <form action className=" flex m-[50px] items-center justify-center">
                    <div className="flex justify-between items-center rounded-[10px] 
gap-[10px] bg-white shadow-lg shadow-greyIsh-700">
                            <div className='flex gap-2 items-center'>
                                <IoIosAirplane className='text-[25px] ml-[10px]' />
                                <input value={formData.departure_city} onChange={handleInputChange} name='departure_city' type='text' className='bg-transparent focus:outline-none
w-[100%] text-sm' placeholder='' />
                            </div>
                            <div className='flex gap-2 items-center'>
                                <IoIosAirplane className='text-[25px] ml-[10px]' />
                                <input value={formData.destination_city} onChange={handleInputChange} name='destination_city' type='text' className='bg-transparent focus:outline-none
w-[100%] text-sm' placeholder='' />
                            </div>
                        <div className='flex gap-2 items-center'>
                            <BsCalendar3Week className='text-[25px]' />
                            <DatePicker className='bg-transparent focus:outline-none
w-[100%] text-sm' placeholderText="Select a weekday" onChange={(date) => setStartDate(date)} />
                        </div>
                        <button type='button' onClick={handleFormSubmit}
                            className="flex w-32 h-11 rounded-r-[10px] gap-2 text-white bg-green-800 hover:bg-green-700 justify-center place-items-center text-sm">
                            <AiOutlineSearch className='' />
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}