'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const InputFormAttribute = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-50 text-gray-900 rounded-2xl shadow-md">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Input form* Attributes</h1>
      </div>

      <Pagination />

      <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
        <p className="mb-4">This chapter describes the different form attributes for the HTML <code className="text-red-500">&lt;input&gt;</code> element.</p>

        <div className="space-y-6">
          {/* Form Attribute */}
          <div>
            <label htmlFor="lname" className="block font-semibold mb-2">Last Name (Linked to Form 1):</label>
            <input type="text" id="lname" name="lname" form="form1" className="w-full p-2 border rounded-md bg-gray-100 text-gray-900" />
          </div>

          {/* Form Action Attribute */}
          <div>
            <label className="block font-semibold mb-2">Submit Buttons with Different Actions:</label>
            <input type="submit" value="Submit" className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600" />
            <input type="submit" formAction="/action_page2.php" value="Submit as Admin" className="px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-600 ml-2" />
          </div>

          {/* Form EncType Attribute */}
          <div>
            <label className="block font-semibold mb-2">Submit with Different Encoding:</label>
            <input type="submit" formEncType="multipart/form-data" value="Submit as Multipart/form-data" className="px-4 py-2 bg-purple-500 text-white rounded-md cursor-pointer hover:bg-purple-600" />
          </div>

          {/* Form Method Attribute */}
          <div>
            <label className="block font-semibold mb-2">Submit with Different Methods:</label>
            <input type="submit" formMethod="post" value="Submit using POST" className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600" />
          </div>

          {/* Form Target Attribute */}
          <div>
            <label className="block font-semibold mb-2">Submit with Target Attribute:</label>
            <input type="submit" formTarget="_blank" value="Submit to a new tab" className="px-4 py-2 bg-yellow-500 text-white rounded-md cursor-pointer hover:bg-yellow-600" />
          </div>

          {/* Form No Validate Attribute */}
          <div>
            <label className="block font-semibold mb-2">Submit Without Validation:</label>
            <input type="submit" formNoValidate value="Submit without validation" className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer hover:bg-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFormAttribute;

