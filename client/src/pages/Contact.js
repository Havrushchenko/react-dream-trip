import { useState } from 'react';

export function Contact() {
    const [userSubject, setUserSubject] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'userSubject') {
            setUserSubject(inputValue);
        } else {
            setUserMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!userSubject) {
            setErrorMessage('Subject is required');
            return;
        } else if (!userMessage) {
            setErrorMessage('Message is required');
            return;
        }
        setErrorMessage(`Your message has been sent`);
        setUserSubject('');
        setUserMessage('');
        setUserMessage('');
    };

    return (
        <>
            <div className="signup flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-[165px] mb-[165px]">
                <div className="w-full bg-white rounded-[10px] shadow-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h2 className="text-[25px] font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
                            Contact Us
                        </h2>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-600">Subject</label>
                                <input value={userSubject} onChange={handleInputChange} name="userSubject" placeholder="Let us know how we can hellp you" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></input>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-sm font-medium text-slate-600">Your message</label>
                                <textarea value={userMessage} onChange={handleInputChange} name="textarea" placeholder="Leave a comment..." rows="3" style={{ resize: 'none' }} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></textarea>
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
                </div>
            </div>
        </>
    );
}

