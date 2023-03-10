// import React from "react";
import { Link } from "react-router-dom";
import { GiStripedSun } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from "react";

export function Nav() {
    const [navbar, setNavbar] = useState(false);
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
        <nav className="">
            <div className="justify-between mx-auto sm:pl-[48px] sm:pr-[48px] sm:pt-[5px] sm:pb-[5px] md:items-center md:flex md:px-[48px] bg-grey shadow-lg">
                <div>
                    <div className="flex items-center justify-between md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h1 className="uppercase font-bold text-slate-600 cursor-pointer">
                                <Link to='/home'><strong className="flex items-center text-green-800 sm:pr-10 gap-2">Dream<GiStripedSun className="text-slate-600" alt='logo icon' />Trip</strong></Link></h1>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="text-slate-600 rounded-md itemx-center outline-none hover:text-black cursor-pointer"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <GrClose />
                                ) : (
                                    <RxHamburgerMenu />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <div className="items-center justify-center gap-5 space-y-8 md:flex md:space-x-6 md:space-y-0 list-none">
                            {categories.map((category) =>
                            (
                                <li className="text-slate-600 hover:text-black cursor-pointer"><Link to={category.link}>{category.name}</Link></li>
                            )
                            )}
                            <li className="flex items-center gap-2 text-slate-600 hover:text-black cursor-pointer"><AiOutlineShoppingCart />Checkout</li>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}