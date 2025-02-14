'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const FormElement = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-50 rounded-2xl shadow-md text-gray-900">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Form Elements</h1>
      </div>

      <Pagination />

      <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
        <p className="mb-4">This chapter describes all the different HTML form elements.</p>

        <h2 className="text-xl font-semibold mb-2">The {'<form>'} Elements</h2>
        <p className="mb-4">The HTML {'<form>'} element can contain one or more of the following form elements:</p>

        <ul className="list-disc list-inside mb-4">
          <li>{'<input>'}</li>
          <li>{'<label>'}</li>
          <li>{'<select>'}</li>
          <li>{'<textarea>'}</li>
          <li>{'<button>'}</li>
          <li>{'<fieldset>'}</li>
          <li>{'<legend>'}</li>
          <li>{'<datalist>'}</li>
          <li>{'<output>'}</li>
          <li>{'<option>'}</li>
          <li>{'<optgroup>'}</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">The {'<input>'} Element</h2>
        <p className="mb-4">One of the most used form elements is the {'<input>'} element.</p>

        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <label htmlFor="fname" className="block font-medium">First name:</label>
          <input type="text" id="fname" name="fname" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <h2 className="text-xl font-semibold mb-2">The {'<select>'} Element</h2>
        <p className="mb-4">The {'<select>'} element defines a drop-down list:</p>

        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <label htmlFor="cars" className="block font-medium">Choose a car:</label>
          <select id="cars" name="cars" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <h2 className="text-xl font-semibold mb-2">The {'<textarea>'} Element</h2>
        <p className="mb-4">Defines a multi-line input field.</p>

        <textarea name="message" className="w-full p-2 border border-gray-300 rounded-md" rows="4" defaultValue="The cat was playing in the garden."></textarea>

        <h2 className="text-xl font-semibold mt-6 mb-2">The {'<button>'} Element</h2>
        <p className="mb-4">Defines a clickable button:</p>

        <button type="button" className="px-4 py-2 bg-orange-600 text-white rounded-lg cursor-pointer hover:bg-orange-700">Click Me!</button>
      </div>
    </div>
  );
};

export default FormElement;
