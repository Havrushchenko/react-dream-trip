import React from "react";
import { IoIosAirplane } from 'react-icons/io'
import { MdAirplaneTicket } from 'react-icons/md'

export function Card() {
    return (
        <div className="flex justify-center">
            <div className="result-card-wrapper w-2/4 bg-white flex flex-col rounded-[10px] overflow-hidden shadow-lg mb-[50px]">
                <div className="flex flex-row items-baseline flex-nowrap bg-grey p-2">
                    <IoIosAirplane className="icon" />
                    <h1 className="ml-2 uppercase font-bold text-slate-600">Departure</h1>
                    <p className="departure-date ml-2 font-normal text-slate-600"></p>
                </div>
                <div className="mt-2 flex justify-start bg-white p-2">
                    <div className="flex items-center mx-2 ml-6 h8 px-2 flex-row rounded-full bg-grey p-1">
                        <MdAirplaneTicket className="icon" />
                        <p className="font-normal text-sm ml-1 text-slate-600">Economy</p>
                    </div>
                </div>
                <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
                    <div className="flex flex-row place-items-center p-2">
                        <div className="flex flex-col ml-2">
                            <p className="text-xs text-slate-600 font-bold">Flight Number</p>
                            <p className="flight-number text-xs text-slate-600"></p>
                        </div>
                    </div>

                    <div className="flex flex-col p-2">
                        <p className="departure-time font-bold"></p>
                        <p className="departure-city text-slate-600"></p>
                        <p className="departure-airport text-slate-600 font-bold"></p>
                    </div>
                    <div className="flex flex-col flex-wrap p-2">
                        <p className="destination-time font-bold"></p>
                        <p className="destination-city text-slate-600"></p>
                        <p className="destination-airport text-slate-600 font-bold"></p>
                    </div>
                </div>
                <div className="mt-4 bg-grey flex flex-row flex-wrap md:flex-nowrap justify-end items-baseline">
                    <div className="flex items-center mx-6 py-4 flex-row flex-wrap">
                        <MdAirplaneTicket className="icon text-[25px]" />
                        <div className="text-sm mx-2 flex flex-col">
                            <p className="">Standard Ticket</p>
                            <p className="result-card-price font-bold"></p>
                            <p className="text-xs text-slate-600">Price per adult</p>
                        </div>
                        <button
                            className="w-32 h-11 rounded-[10px] flex border-solid border text-white bg-green-800 hover:bg-green-700 mx-2 justify-center place-items-center text-sm">
                            Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}