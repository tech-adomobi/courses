'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Computercode = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
    <div className="heading mb-6">
      <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Computer Code Elements</h1>
    </div>

    <Pagination />
      
      <p className="mb-4 text-gray-700">
        HTML provides several elements to display computer code, ensuring proper formatting and readability for developers.
      </p>
      
      <div className="bg-gray-900 text-white p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Key HTML Code Elements</h2>
        <ul className="list-disc list-inside">
          <li><code>&lt;code&gt;</code> - Inline code snippet</li>
          <li><code>&lt;pre&gt;</code> - Preformatted text block</li>
          <li><code>&lt;kbd&gt;</code> - Keyboard input</li>
          <li><code>&lt;samp&gt;</code> - Sample output</li>
          <li><code>&lt;var&gt;</code> - Variable in programming</li>
        </ul>
      </div>

      <div className="my-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Example Usage</h2>
        <div className="bg-gray-900 text-white p-4 rounded-lg">
          <pre className="whitespace-pre-wrap p-2 bg-gray-800 rounded">&lt;pre&gt;
 
&lt;/pre&gt;</pre>
        </div>
      </div>

    </div>
  );
};

export default Computercode;
