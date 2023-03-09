import React, { useState, useEffect } from 'react'
import axios from "axios";
import { getAllUsers } from '../utils/api';
import { createUser } from '../utils/api';
import Auth from '../utils/auth';

export function Signup() {
	const [formData, setFormData] = useState({
        username: '',
		email: '',
		password: ''
	});

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}
    
	const handleFormSubmit = async (e) => {
		e.preventDefault();    
        const response = await createUser(formData);
        if (!response.ok) {
            throw new Error('something went wrong!');
          }
        const data = await response.json();
        console.log(data);
		console.log('formData', formData)

        setFormData({
            username: '',
            email: '',
            password: '',
        })
	}

	return (
        <div className="signup flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-[100px] mb-[100px]">
            <div className="w-full bg-white rounded-[10px] shadow-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                            </div>
                            <div className="ml-3 text-sm">
                                <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-slate-600 hover:underline" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        {/* {errorMessage && (
                            <div>
                                <p className="text-sm font-medium text-slate-600">{errorMessage}</p>
                            </div>
                        )} */}
                        <button type='button' onClick={handleFormSubmit}
                            className="w-full h-11 rounded-[10px] gap-2 flex text-white bg-green-800 hover:bg-green-700 justify-center place-items-center text-sm">
                            Create an account
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="/login" className="font-medium text-slate-600 hover:underline">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}





// import React, { useState } from 'react';
// import { createUser } from '../utils/API';
// import Auth from '../utils/auth';

// export function Signup() {
// const sections = [
//     {
//         name: 'Your name',
//         type: 'email',
//         placeholder: '••••••••',
//     },
//     {
//         name: 'Your email',
//         type: 'email',
//         placeholder: 'name@company.com',
//     },
//     {
//         name: 'Password',
//         type: 'password',
//         placeholder: '••••••••',
//     }
// ];
// const [username, setUserName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [errorMessage, setErrorMessage] = useState('');
// const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === 'username') {
//         setUserName(inputValue);
//     } else if (inputType === 'email') {
//         setEmail(inputValue);
//     } else if (inputType === 'password') {
//         setPassword(inputValue);
//     }
// };
// const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     console.log(username, email, password)
//     if (!username) {
//         setErrorMessage('Name is required');
//         return;
//     } else if (!email) {
//         setErrorMessage('Email is required');
//         return;
//     } else if (!password) {
//         setErrorMessage('Password is required');
//         return;
//     }
//     alert(`Hello`);
//     setUserName('');
//     setEmail('');
//     setPassword('');
// };
//     return (
//         <div className="signup flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-[100px] mb-[100px]">
//             <div className="w-full bg-white rounded-[10px] shadow-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//                 <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                     <h2 className="text-[25px] font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
//                         Create an account
//                     </h2>
//                     <form className="space-y-4 md:space-y-6" action="#">
//                         <div>
//                             <label className="block mb-2 text-sm font-medium text-slate-600">Your name</label>
//                             <input value={username} name='username' type='text' placeholder='••••••••' onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></input>
//                         </div>
//                         <div>
//                             <label className="block mb-2 text-sm font-medium text-slate-600">Your email</label>
//                             <input value={email} name='email' type='email' placeholder='name@company.com' onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></input>
//                         </div>
//                         <div>
//                             <label className="block mb-2 text-sm font-medium text-slate-600">Password</label>
//                             <input value={password} name='password' type='password' placeholder='••••••••' onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></input>
//                         </div>
//                         <div className="flex items-start">
//                             <div className="flex items-center h-5">
//                                 <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
//                             </div>
//                             <div className="ml-3 text-sm">
//                                 <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-slate-600 hover:underline" href="#">Terms and Conditions</a></label>
//                             </div>
//                         </div>
//                         {errorMessage && (
//                             <div>
//                                 <p className="text-sm font-medium text-slate-600">{errorMessage}</p>
//                             </div>
//                         )}
//                         <button type='button' onClick={handleFormSubmit}
//                             className="w-full h-11 rounded-[10px] gap-2 flex text-white bg-green-800 hover:bg-green-700 justify-center place-items-center text-sm">
//                             Create an account
//                         </button>
//                         <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                             Already have an account? <a href="/login" className="font-medium text-slate-600 hover:underline">Login here</a>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const [formState, setFormState] = useState({ username: '', email: '', password: '' });
// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormState({
//     ...formState,
//     [name]: value,
//   });
// };

// const handleFormSubmit = async e => {
// e.preventDefault();
// try {
//   const { data } = await createUser({
//     variables: { ...formState }
//   });
//   console.log(data);
// } catch (e) {
//   console.error(e);
// }
// };




// const sections = [
//     {
//         name: 'Your name',
//         type: 'email',
//         placeholder: '••••••••',
//     },
//     {
//         name: 'Your email',
//         type: 'email',
//         placeholder: 'name@company.com',
//     },
//     {
//         name: 'Password',
//         type: 'password',
//         placeholder: '••••••••',
//     }
// ];
// const [username, setUserName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [errorMessage, setErrorMessage] = useState('');

// const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === 'username') {
//         setUserName(inputValue);
//     } else if (inputType === 'email') {
//         setEmail(inputValue);
//     } else if (inputType === 'password') {
//         setPassword(inputValue);
//     }
// };

// const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     console.log(username, email, password)
//     if (!username) {
//         setErrorMessage('Name is required');
//         return;
//     } else if (!email) {
//         setErrorMessage('Email is required');
//         return;
//     } else if (!password) {
//         setErrorMessage('Password is required');
//         return;
//     }
//     alert(`Hello`);
//     setUserName('');
//     setEmail('');
//     setPassword('');
// };


// const [formState, setFormState] = useState({ username: '', email: '', password: '' });
// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormState({
//     ...formState,
//     [name]: value,
//   });
// };

// const handleFormSubmit = async e => {
// e.preventDefault();
// try {
//   const { data } = await createUser({
//     variables: { ...formState }
//   });
//   console.log(data);
// } catch (e) {
//   console.error(e);
// }
// };


