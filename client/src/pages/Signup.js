import React from "react";

export function Signup() {
    const sections = [
        {
            name: 'Your email',
            type: 'email',
            placeholder: 'name@company.com'
        },
        {
            name: 'Your name',
            type: 'name',
            placeholder: '••••••••',
        },
        {
            name: 'Password',
            type: 'password',
            placeholder: '••••••••',
        }
    ]
    return (
        <div className="signup flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-[100px] mb-[100px]">
            <div className="w-full bg-white rounded-[10px] shadow-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h2 className="text-[25px] font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
                        Create and account
                    </h2>
                    <form className="space-y-4 md:space-y-6" action="#">
                        {sections.map((section) =>
                        (
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-600">{section.name}</label>
                                <input type={section.type} placeholder={section.placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></input>
                            </div>
                        ))
                        }
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                            </div>
                            <div className="ml-3 text-sm">
                                <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-slate-600 hover:underline" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button
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