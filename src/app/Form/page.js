'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Form = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-50 rounded-2xl shadow-md text-gray-900">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Form</h1>
      </div>

      <Pagination />

      <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
        <p className="mb-4">An HTML form is used to collect user input. The user input is most often sent to a server for processing.</p>
        
        <h2 className="text-xl font-semibold mb-2">The {'<form>'} Element</h2>
        <p className="mb-4">The HTML {'<form>'} element is used to create an HTML form for user input:</p>

        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <code>{`<form> ... form elements ... </form>`}</code>
        </div>

        <h2 className="text-xl font-semibold mb-2">Text Fields</h2>
        <p className="mb-4">The {'<input type="text">'} defines a single-line input field for text input.</p>

        <form className="space-y-4">
          <div>
            <label htmlFor="fname" className="block font-medium">First name:</label>
            <input type="text" id="fname" name="fname" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="lname" className="block font-medium">Last name:</label>
            <input type="text" id="lname" name="lname" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
        </form>

        <h2 className="text-xl font-semibold mt-6 mb-2">Radio Buttons</h2>
        <p className="mb-4">Radio buttons let a user select ONE of a limited number of choices.</p>
        
        <form className="space-y-2">
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-2" />
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input type="radio" id="css" name="fav_language" value="CSS" className="mr-2" />
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" className="mr-2" />
            <label htmlFor="javascript">JavaScript</label>
          </div>
        </form>

        <h2 className="text-xl font-semibold mt-6 mb-2">Checkboxes</h2>
        <p className="mb-4">Checkboxes let a user select ZERO or MORE options.</p>
        
        <form className="space-y-2">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="mr-2" />
            <label htmlFor="vehicle1">I have a bike</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className="mr-2" />
            <label htmlFor="vehicle2">I have a car</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className="mr-2" />
            <label htmlFor="vehicle3">I have a boat</label>
          </div>
        </form>

        <h2 className="text-xl font-semibold mt-6 mb-2">Submit Button</h2>
        <p className="mb-4">The {'<input type="submit">'} defines a button for submitting the form.</p>
        
        <form action="/action_page.php" className="space-y-4">
          <div>
            <label htmlFor="fname" className="block font-medium">First name:</label>
            <input type="text" id="fname" name="fname" defaultValue="John" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="lname" className="block font-medium">Last name:</label>
            <input type="text" id="lname" name="lname" defaultValue="Doe" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <input type="submit" value="Submit" className="px-4 py-2 bg-orange-600 text-white rounded-lg cursor-pointer hover:bg-orange-700" />
        </form>
      </div>
    </div>
  );
};

export default Form;
