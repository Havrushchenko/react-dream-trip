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
        subject: '',
        message: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!formData.subject) {
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
            const message = await response.json();
            console.log(message);
        } catch (err) {
            console.error(err);
        }
        setFormData({
            subject: '',
            message: '',
        });
    };

    return (
        <>
            <motion.div variants={wrapper} initial="hidden" animate="show" className="contact flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <motion.div variants={container} initial="hidden" animate="show" className="w-full bg-white rounded-[10px] shadow-lg sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-[180px] mb-[175px]">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h2 className="text-[25px] font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
                            Contact Us
                        </h2>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-600">Subject</label>
                                <input value={formData.subject} onChange={handleInputChange} name="subject" placeholder="Let us know how we can hellp you" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></input>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-sm font-medium text-slate-600">Your message</label>
                                <textarea value={formData.message} onChange={handleInputChange} name="message" placeholder="Leave a comment..." rows="3" style={{ resize: 'none' }} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></textarea>
                            </div>
                            {errorMessage && (
                            <div>
                                <p className="text-sm font-medium text-slate-600">{errorMessage}</p>
                            </div>
                        )}
                            <button type='button' onClick={handleFormSubmit}
                                className="w-full h-11 rounded-[10px] gap-2 flex text-white bg-green-800 hover:bg-green-700 justify-center place-items-center text-sm">
                                Send your message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

