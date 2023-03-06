import React from "react";
import { Link } from "react-router-dom";
import { GiStripedSun } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export function Nav() {
    const categories = [
        {
            name: 'Home',
            link: '/home'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
        {
            name: 'Help & Support',
            link: '#'
        },
        {
            name: 'Login',
            link: '/login'
        },
        {
            name: 'Sign Up',
            link: '/signup'
        },
    ];
    return (
        <div className="flex justify-between items-center p-[48px] bg-grey h-[100px] shadow-lg w-full">
            <h1 className="ml-2 uppercase font-bold text-slate-600 cursor-pointer">
                <Link to='/home'><strong className="flex items-center text-green-800 gap-2">Dream<GiStripedSun className="text-slate-600" alt='logo icon'/>Trip</strong></Link></h1>
            <div className="flex gap-8 list-none">
            {categories.map((category) =>
                (
                <li className="text-slate-600 hover:text-black cursor-pointer"><Link to={category.link}>{category.name}</Link></li>
                )
            )}
                <li className="flex items-center gap-2 text-slate-600 hover:text-black cursor-pointer"><AiOutlineShoppingCart />Checkout</li>
            </div>
        </div>
    );
}