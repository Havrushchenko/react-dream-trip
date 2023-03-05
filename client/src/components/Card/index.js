import React from "react";
import { IoIosAirplane } from 'react-icons/io'
import { MdAirplaneTicket } from 'react-icons/md'

export function Card() {
    return (
        <div class="flex justify-center">
        <div class="result-card-wrapper w-2/4 bg-white flex flex-col rounded-[10px] overflow-hidden shadow-lg">
            <div class="flex flex-row items-baseline flex-nowrap bg-grey p-2">
                <IoIosAirplane className="icon"/>
                <h1 class="ml-2 uppercase font-bold text-slate-600">departure</h1>
                <p class="departure-date ml-2 font-normal text-slate-600"></p>
            </div>
            <div class="mt-2 flex justify-start bg-white p-2">
                <div class="flex items-center mx-2 ml-6 h8 px-2 flex-row rounded-full bg-grey p-1">
                <MdAirplaneTicket className="icon"/>
                    <p class="font-normal text-sm ml-1 text-slate-600">Economy</p>
                </div>
            </div>
            <div class="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
                <div class="flex flex-row place-items-center p-2">
                    <div class="flex flex-col ml-2">
                        <p class="text-xs text-slate-600 font-bold">Flight Number</p>
                        <p class="flight-number text-xs text-slate-600"></p>
                    </div>
                </div>

                <div class="flex flex-col p-2">
                    <p class="departure-time font-bold"></p>
                    <p class="departure-city text-slate-600"></p>
                    <p class="departure-airport text-slate-600 font-bold"></p>
                </div>
                <div class="flex flex-col flex-wrap p-2">
                    <p class="destination-time font-bold"></p>
                    <p class="destination-city text-slate-600"></p>
                    <p class="destination-airport text-slate-600 font-bold"></p>
                </div>
            </div>
            <div class="mt-4 bg-grey flex flex-row flex-wrap md:flex-nowrap justify-end items-baseline">
                <div class="flex items-center mx-6 py-4 flex-row flex-wrap">
                <MdAirplaneTicket className="icon text-[25px]"/>
                    <div class="text-sm mx-2 flex flex-col">
                        <p class="">Standard Ticket</p>
                        <p class="result-card-price font-bold"></p>
                        <p class="text-xs text-slate-600">Price per adult</p>
                    </div>
                    <button
                        class="w-32 h-11 rounded-[10px] flex border-solid border text-white bg-green-800 hover:bg-green-700 mx-2 justify-center place-items-center text-sm">
                        <div class="">Book</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}