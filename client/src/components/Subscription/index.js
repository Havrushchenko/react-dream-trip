import React from "react";
import { FaRegPaperPlane } from 'react-icons/fa';

export function Subscription() {
    return (
        <div className="subscription-wrapper flex flex-col items-center justify-center bg-cover h-[400px] w-[100%] object-contain text-white">
            <h2 className="text-[25px]">Subscribe to our newsletter</h2>
            <p className="mb-[10px] ">Receive exclusive deals and offers straight to your inbox</p>
            <div className="search-form flex justify-between items-center rounded-[10px] 
        gap-[10px] bg-blured shadow-lg shadow-greyIsh-700">
                <div className='flex gap-2 items-center'>
                    <input type='text' className='flex justify-center bg-transparent focus:outline-none
    w-[100%] text-white text-sm ml-[40px]' placeholder='Enter Email Address' />
                </div>
                <button
                    className="w-32 h-11 rounded-r-[10px] gap-2 flex text-white bg-green-800 hover:bg-green-700 justify-center place-items-center text-sm">
                    <FaRegPaperPlane className='' />Send
                </button>
            </div>
            </div>
            );
}