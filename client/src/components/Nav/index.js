import React from "react";
import { GiStripedSun } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export function Nav() {
    const categories = [
        {
            name: 'Home'
        },
        {
            name: 'Contact'
        },
        {
            name: 'Help & Support'
        },
        {
            name: 'Login'
        },
        {
            name: 'Sign Up'
        },
    ];
    return (
        <div className="flex justify-between items-center p-[48px] bg-grey h-[100px] shadow-lg fixed w-full mt-[-150px] z-50">
            <h1 className="ml-2 uppercase font-bold text-slate-600 cursor-pointer">
                <strong className="flex items-center text-green-800 gap-2">Dream<GiStripedSun className="text-slate-600" alt='logo icon'/>Trip</strong></h1>
            <div className="flex gap-8 list-none">
            {categories.map((category) =>
                (
                <li className="text-slate-600 hover:text-black cursor-pointer" key={category.name}><span>{category.name}</span></li>
                )
            )}
                <li className="flex items-center gap-2 text-slate-600 hover:text-black cursor-pointer"><AiOutlineShoppingCart />Checkout</li>
            </div>
        </div>
    );
}