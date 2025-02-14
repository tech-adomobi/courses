'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const InputAttribute = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-50 text-gray-900 rounded-2xl shadow-md">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Input Attributes</h1>
      </div>

      <Pagination />

      <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
        <p className="mb-4">This chapter describes the different attributes for the HTML <code className="text-red-500">&lt;input&gt;</code> element.</p>

        <div className="space-y-6">
          {/* Value Attribute */}
          <div>
            <label htmlFor="fname" className="block font-semibold mb-2">First Name:</label>
            <input type="text" id="fname" name="fname" defaultValue="John" className="w-full p-2 border rounded-md bg-gray-100 text-gray-900" />
          </div>

          {/* Readonly Attribute */}
          <div>
            <label htmlFor="lname" className="block font-semibold mb-2">Last Name (Read-Only):</label>
            <input type="text" id="lname" name="lname" defaultValue="Doe" readOnly className="w-full p-2 border rounded-md bg-gray-200 text-gray-900" />
          </div>

          {/* Disabled Attribute */}
          <div>
            <label htmlFor="disabled" className="block font-semibold mb-2">Disabled Input:</label>
            <input type="text" id="disabled" name="disabled" defaultValue="Cannot Edit" disabled className="w-full p-2 border rounded-md bg-gray-300 text-gray-500 cursor-not-allowed" />
          </div>

          {/* Placeholder Attribute */}
          <div>
            <label htmlFor="phone" className="block font-semibold mb-2">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="123-45-678" className="w-full p-2 border rounded-md bg-gray-100 text-gray-900" />
          </div>

          {/* Required Attribute */}
          <div>
            <label htmlFor="username" className="block font-semibold mb-2">Username (Required):</label>
            <input type="text" id="username" name="username" required className="w-full p-2 border rounded-md bg-gray-100 text-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputAttribute;
