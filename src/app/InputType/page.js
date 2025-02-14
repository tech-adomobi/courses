'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const InputType = () => {
  return (
    <div className="content-html  mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
    <div className="heading mb-6">
      <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Input Type</h1>
    </div>

    <Pagination />

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 border border-gray-200 dark:border-gray-700">
        <p className="mb-4">This chapter describes the different types of the HTML <code className="text-red-500">&lt;input&gt;</code> element.</p>

        <div className="space-y-6">
          {/* Text Input */}
          <div>
            <label htmlFor="fname" className="block font-semibold mb-2">First Name:</label>
            <input type="text" id="fname" name="fname" className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Enter first name" />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="pwd" className="block font-semibold mb-2">Password:</label>
            <input type="password" id="pwd" name="pwd" className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Enter password" />
          </div>

          {/* Submit Button */}
          <div>
            <input type="submit" value="Submit" className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600" />
          </div>

          {/* Radio Buttons */}
          <fieldset className="border p-4 rounded-md">
            <legend className="font-semibold">Choose your favorite Web language:</legend>
            <label className="block">
              <input type="radio" name="fav_language" value="HTML" className="mr-2" /> HTML
            </label>
            <label className="block">
              <input type="radio" name="fav_language" value="CSS" className="mr-2" /> CSS
            </label>
            <label className="block">
              <input type="radio" name="fav_language" value="JavaScript" className="mr-2" /> JavaScript
            </label>
          </fieldset>

          {/* Checkbox */}
          <fieldset className="border p-4 rounded-md">
            <legend className="font-semibold">Select your vehicles:</legend>
            <label className="block">
              <input type="checkbox" name="vehicle1" value="Bike" className="mr-2" /> I have a bike
            </label>
            <label className="block">
              <input type="checkbox" name="vehicle2" value="Car" className="mr-2" /> I have a car
            </label>
          </fieldset>

          {/* Color Picker */}
          <div>
            <label htmlFor="favcolor" className="block font-semibold mb-2">Select your favorite color:</label>
            <input type="color" id="favcolor" name="favcolor" className="w-12 h-8 border dark:border-gray-600 rounded-md" />
          </div>

          {/* Date Picker */}
          <div>
            <label htmlFor="birthday" className="block font-semibold mb-2">Birthday:</label>
            <input type="date" id="birthday" name="birthday" className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block font-semibold mb-2">Enter your email:</label>
            <input type="email" id="email" name="email" className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="example@mail.com" />
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="file" className="block font-semibold mb-2">Upload a file:</label>
            <input type="file" id="file" name="file" className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          {/* Search Input */}
          <div>
            <label htmlFor="search" className="block font-semibold mb-2">Search:</label>
            <input type="search" id="search" name="search" className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Search here..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputType;
