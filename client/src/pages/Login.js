import React, { useState } from 'react'
import { loginUser } from '../utils/api';
import Auth from '../utils/auth';

export function Login() {
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

    const sections = [
        {
            name: 'Your email',
            type: 'email',
            placeholder: 'name@company.com'
        },
        {
            name: 'Password',
            type: 'password',
            placeholder: '••••••••',
        }
    ]
    return (
        <div className="signup flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-[150px] mb-[150px]">
            <div className="w-full bg-white rounded-[10px] shadow-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h2 className="text-[25px] font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
                        Sign in to your account
                    </h2>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-slate-600">Your email</label>
                            <input value={formData.email} name='email' type='email' placeholder='name@company.com' onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></input>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-slate-600">Password</label>
                            <input value={formData.password} name='password' type='password' placeholder='••••••••' onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></input>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                            </div>
                            <div className="ml-3 text-sm">
                                <label for="terms" className="font-light text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
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
                    </form>
                </div>
            </div>
        </div>
    );
}