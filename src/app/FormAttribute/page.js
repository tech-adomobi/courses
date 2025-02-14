'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const FormAttribute = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-50 rounded-2xl shadow-md text-gray-900">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Form Attributes</h1>
      </div>

      <Pagination />

      <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
        <p className="mb-4">This chapter describes the different attributes for the HTML {'<form>'} element.</p>

        <h2 className="text-xl font-semibold mb-2">The Action Attribute</h2>
        <p className="mb-4">The action attribute defines the action to be performed when the form is submitted.</p>
        
        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <code>{`<form action="/action_page.php"> ... </form>`}</code>
        </div>

        <h2 className="text-xl font-semibold mb-2">The Target Attribute</h2>
        <p className="mb-4">The target attribute specifies where to display the response received after submitting the form.</p>
        
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Value</th>
              <th className="border border-gray-300 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">_blank</td>
              <td className="border border-gray-300 p-2">Opens in a new tab</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">_self</td>
              <td className="border border-gray-300 p-2">Opens in the current window</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-semibold mb-2">The Method Attribute</h2>
        <p className="mb-4">The method attribute specifies the HTTP method used to submit the form data.</p>

        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <code>{`<form action="/action_page.php" method="post">`}</code>
        </div>

        <h2 className="text-xl font-semibold mb-2">The Autocomplete Attribute</h2>
        <p className="mb-4">Specifies whether a form should have autocomplete enabled.</p>

        <h2 className="text-xl font-semibold mb-2">The Novalidate Attribute</h2>
        <p className="mb-4">Prevents validation when submitting the form.</p>

        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <code>{`<form action="/action_page.php" novalidate>`}</code>
        </div>
      </div>
    </div>
  );
};

export default FormAttribute;
