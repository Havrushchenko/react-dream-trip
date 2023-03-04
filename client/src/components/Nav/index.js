import React from "react";
import { GiStripedSun } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export function Nav() {
    return (
        <div className="flex justify-between items-center p-[3rem] bg-greyIsh h-[100px] shadow-lg w-full">
            <h1 className="ml-2 uppercase font-bold text-slate-600 cursor-pointer">
                <strong className="flex items-center text-green-800 gap-2">Dream<GiStripedSun className="text-[#6f6f6f]" />Trip</strong></h1>
            <div className="flex gap-8 list-none">
                <li className="menuList text-slate-600 hover:text-black cursor-pointer">Home</li>
                <li className="menuList text-slate-600 hover:text-black cursor-pointer">Contact</li>
                <li className="menuList text-slate-600 hover:text-black cursor-pointer">Help & Support</li>
                <li className="menuList text-slate-600 hover:text-black cursor-pointer">Login</li>
                <li className="menuList text-slate-600 hover:text-black cursor-pointer">Sign Up</li>
                <li className="menuList flex items-center gap-2 text-slate-600 hover:text-black"><AiOutlineShoppingCart />Checkout</li>
            </div>
        </div>
    );
}