import { useState } from 'react';
import { motion } from "framer-motion";
import { createMessage } from '../utils/api';

export function Contact() {
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
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!formData.firstname) {
            setErrorMessage('First Name is required');
            return;
        } else if (!formData.lastname) {
            setErrorMessage('Last Name is required');
            return;
        } else if (!formData.email) {
            setErrorMessage('E-mail is required');
            return;
        } else if (!formData.subject) {
            setErrorMessage('Subject is required');
            return;
        } else if (!formData.message) {
            setErrorMessage('Message is required');
            return;
        } setErrorMessage('Your message has been sent. Thank you!')

        try {
            const response = await createMessage(formData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            subject: '',
            message: ''
        });
    };
    const usercategories = [
        {
            categoryname: 'First Name',
            name: 'firstname',
            type: 'text',
            placeholder: 'Jane',
            value: formData.firstname
        },
        {
            categoryname: 'Last Name',
            name: 'lastname',
            type: 'text',
            placeholder: 'Doe',
            value: formData.lastname
        },
    ];
    const contactcategories = [
        {
            categoryname: 'E-mail',
            name: 'email',
            type: 'email',
            placeholder: 'name@company.com',
            value: formData.email
        },
        {
            categoryname: 'Subject',
            name: 'subject',
            type: 'text',
            placeholder: 'Let us know how we can hellp you',
            value: formData.subject
        },
    ];
    const messages = [
        {
            categoryname: 'Message',
            name: 'message',
            type: 'message',
            placeholder: 'Write your message',
            value: formData.message
        },
    ];
    return (
        <>
            <motion.div variants={wrapper} initial="hidden" animate="show" className="contact flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <motion.div variants={container} initial="hidden" animate="show" className="w-full bg-white rounded-[10px] shadow-lg sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-[85px] mb-[85px]">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h2 className="text-[25px] font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
                            Contact Us
                        </h2>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            {usercategories.map((usercategory) =>
                            (
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        {usercategory.categoryname}
                                    </label>
                                    <input value={usercategory.value} name={usercategory.name} type={usercategory.type} placeholder={usercategory.placeholder} onChange={handleInputChange} autocomplete="off" class="appearance-none block w-full text-sm bg-gray-50 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                                </div>
                            )
                            )}
                        </div>
                        {contactcategories.map((contactcategory) =>
                        (
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        {contactcategory.categoryname}
                                    </label>
                                    <input value={contactcategory.value} name={contactcategory.name} type={contactcategory.type} placeholder={contactcategory.placeholder} onChange={handleInputChange} autocomplete="off" class="appearance-none block w-full bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                                </div>
                            </div>
                        )
                        )}
                        {messages.map((message) =>
                        (
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        {message.categoryname}
                                    </label>
                                    <textarea value={message.value} name={message.name} type={message.type} placeholder={message.placeholder} onChange={handleInputChange} class="appearance-none block w-full bg-gray-50 text-sm text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="3" style={{ resize: 'none' }}></textarea>
                                </div>
                            </div>
                        )
                        )}
                        {errorMessage && (
                            <div>
                                <p className="text-sm font-medium text-slate-600">{errorMessage}</p>
                            </div>
                        )}
                        <button type='button' onClick={handleFormSubmit}
                            className="w-full h-11 rounded-[10px] gap-2 flex text-white bg-green-800 hover:bg-green-700 justify-center place-items-center text-sm">
                            Send your message
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

