import React, { useState } from 'react'
import { loginUser } from '../utils/api';
import Auth from '../utils/auth';
import { motion } from "framer-motion";

export function Login() {
    const wrapper = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1,
                delay: 0.1
            }
        }
    };
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delay: 0.3
            }
        }
    };
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!formData.email) {
            setErrorMessage('Email is required');
            return;
        } else if (!formData.password) {
            setErrorMessage('Password is required');
            return;
        }

        try {
            const response = await loginUser(formData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }
            const { token, user } = await response.json();
            Auth.login(token);
            console.log(user, token);
        } catch (err) {
            console.error(err);
        }
        setFormData({
            email: '',
            password: '',
        });
    };

    const categories = [
        {
            categoryname: 'Your email',
            name: 'email',
            type: 'email',
            placeholder: 'name@company.com',
            value: formData.email
        },
        {
            categoryname: 'Password',
            name: 'password',
            type: 'password',
            placeholder: '••••••••',
            value: formData.password
        }
    ]
    return (
        <motion.div variants={wrapper} initial="hidden" animate="show" div className="login flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-auto">
            <motion.div variants={container} initial="hidden" animate="show" className="w-full bg-white rounded-[10px] shadow-lg sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-[165px] mb-[165px]">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h2 className="text-[25px] font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
                        Sign in to your account
                    </h2>
                        {categories.map((category) =>
                        (
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">

                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{category.categoryname}</label>
                                    <input value={category.value} name={category.name} type={category.type} placeholder={category.placeholder} onChange={handleInputChange} autocomplete="off" className="appearance-none block w-full bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                                </div>
                            </div>
                        )
                        )}
                        <div className="flex items-start">
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="text-sm font-medium text-slate-600">{errorMessage}</p>
                            </div>
                        )}
                        <button type='button' onClick={handleFormSubmit}
                            className="w-full h-11 rounded-[10px] gap-2 flex text-white bg-green-800 hover:bg-green-700 justify-center place-items-center text-sm">
                            Sign In
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="/signup" className="font-medium text-slate-600 hover:underline">Sign up</a>
                        </p>
                </div>
            </motion.div>
        </motion.div>
    );
}