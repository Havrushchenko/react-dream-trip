import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiStripedSun } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Auth from '../../utils/auth';
import { motion, useScroll } from "framer-motion";


export function Nav() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    function update() {
        if (scrollY?.current < scrollY?.prev) {
            setHidden(false);
        } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
            setHidden(true);
        }
    }
    useEffect(() => {
        return scrollY.onChange(() => update());
    });
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -25 }
    };
    const [navbar, setNavbar] = useState(false);
    const categories = [
        {
            name: 'Home',
            link: '/home'
        },
        {
            name: 'Help & Support',
            link: '#'
        },
    ];
    const autorisations = [
        {
            name: 'Login',
            link: '/login'
        },
        {
            name: 'Signup',
            link: '/signup'
        },
    ];
    return (
        <motion.div className="" variants={variants} animate={hidden ? "hidden" : "visible"}
            transition={{ ease: [0., 0.25, 0.3, 1], duration: 0.6 }}>
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
                            {Auth.loggedIn() ? (
                                <>
                                <li className="text-slate-600 hover:text-black cursor-pointer"><Link to='/contact'>Contact</Link></li>
                                    <li>
                                        <button className="text-slate-600 hover:text-black cursor-pointer" onClick={Auth.logout}>Logout</button>     
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-600 hover:text-black cursor-pointer"><AiOutlineShoppingCart />Cart</li>

                                </>
                            ) : (
                                <>
                                    {autorisations.map((category) =>
                                    (
                                        <li className="text-slate-600 hover:text-black cursor-pointer"><Link to={category.link}>{category.name}</Link></li>
                                    )
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}