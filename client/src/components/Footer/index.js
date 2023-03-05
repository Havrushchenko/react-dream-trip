import React from "react";
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import github from '../../assets/icons/github.png';
const year = new Date().getFullYear();

export function Footer() {
    const companies = [
        {
            name: 'About'
        },
        {
            name: 'Careers'
        },
        {
            name: 'Brand Center'
        },
        {
            name: 'Blog'
        }
    ];
    const helps = [
        {
            name: 'Discord Server'
        },
        {
            name: 'Contact Us'
        }
    ];
    const legals = [
        {
            name: 'Privacy Policy'
        },
        {
            name: 'Licensing'
        },
        {
            name: 'Terms & Conditions'
        }
    ];
    const icons = [
        {
            name: facebook,
            link: '#',
        },
        {
            name: instagram,
            link: '#',
        },
        {
            name: github,
            link: '#',
        },
    ]
    return (
        <footer className="">
            <div className="flex justify-around grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 w-full bg-grey">
                <div>
                    <h2 className="mb-6 uppercase font-bold text-slate-600 uppercase">Company</h2>
                    <ul className="text-slate-600">
                        {companies.map((company) =>
                        (
                            <li className="mb-4">
                                <a href="#" className="hover:text-black">{company.name}</a>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 uppercase font-bold text-slate-600 uppercase">Help & Support</h2>
                    <ul className="text-slate-600">
                        {helps.map((help) =>
                        (
                            <li className="mb-4">
                                <a href="#" className="hover:text-black">{help.name}</a>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 uppercase font-bold text-slate-600 uppercase">Legal</h2>
                    <ul className="text-slate-600">
                        {legals.map((legal) =>
                        (
                            <li className="mb-4">
                                <a href="#" className="hover:text-black">{legal.name}</a>
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </div>
            <div className="px-[46px] py-[46px] bg-white md:flex md:items-center md:justify-between">
                <span className="text-sm text-slate-600 sm:text-center">{`${year} ©. All Rights Reserved`}
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                    {icons.map((icon) =>
                    (
                        <a href="#" className="">
                            <img src={icon.name} className="w-4 h-4 bg-dark" alt='social media icon' />
                        </a>
                    )
                    )}
                </div>
            </div>
        </footer>
    );
}