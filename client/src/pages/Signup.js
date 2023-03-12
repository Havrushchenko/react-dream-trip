import React, { useState } from 'react'
import { createUser } from '../utils/api';
import Auth from '../utils/auth';
import { motion } from "framer-motion"

export function Signup() {
    const wrapper = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1,
                delay: 0.5
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
        username: '',
		email: '',
		password: ''
	});
    const [errorMessage, setErrorMessage] = useState('');

	const handleInputChange = (e) => {
		setFormData(previousState => ({ ...previousState, [e.target.name]: e.target.value }))
	}
    
	const handleFormSubmit = async (e) => {
		e.preventDefault();  
        if (!formData.username) {
            setErrorMessage('Name is required');
            return;
        } else if (!formData.email) {
            setErrorMessage('Email is required');
            return;
        } else if (!formData.password) {
            setErrorMessage('Password is required');
            return;
        }
          
        try {
            const response = await createUser(formData);
      
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
            username: '',
            email: '',
            password: '',
          });
	}

	return (
        <motion.div variants={wrapper} initial="hidden" animate="show"  className="signup flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <motion.div variants={container} initial="hidden" animate="show" className="w-full bg-white rounded-[10px] shadow-lg sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-[120px] mb-[120px]">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h2 className="text-[25px] font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
                        Create an account
                    </h2>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-slate-600">Your name</label>
                            <input value={formData.username} name='username' type='text' placeholder='••••••••' onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></input>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-slate-600">Your email</label>
                            <input value={formData.email} name='email' type='email' placeholder='name@company.com' onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></input>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-slate-600">Password</label>
                            <input value={formData.password} name='password' type='password' placeholder='••••••••' onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></input>
                        </div>
                        <div className="flex items-start">
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="text-sm font-medium text-slate-600">{errorMessage}</p>
                            </div>
                        )}
                        <button type='button' onClick={handleFormSubmit}
                            className="w-full h-11 rounded-[10px] gap-2 flex text-white bg-green-800 hover:bg-green-700 justify-center place-items-center text-sm">
                            Create an account
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="/login" className="font-medium text-slate-600 hover:underline">Login here</a>
                        </p>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    );
}