import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const SingelDesktopView = ({ userData }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { avatar, email, first_name, last_name, _id } = userData
    return (
        <div data-aos="fade-right" class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
            <div class="flex justify-end px-4 pt-4">
                <button id="dropdownButton" data-dropdown-toggle="dropdown" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </button>
                <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">

                </div>
            </div>
            <div class="flex flex-col items-center pb-10">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={avatar} alt="Bonnie" />
                <h5 class="mb-1 text-xl font-medium  text-gray-500">{first_name + last_name}</h5>
                <span class="text-sm text-gray-500">{email}</span>
                <div class="flex mt-4 space-x-3 lg:mt-6">
                    <Link to={`/update/${_id}`} href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</Link>

                </div>
            </div>
        </div>
    );
};

export default SingelDesktopView;