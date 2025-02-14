'use client';

import React from 'react';
import Link from 'next/link';
import Pagination from '@/Components/Pagination';

const Editors = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
    <div className="heading mb-6">
      <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Editors</h1>
    </div>

    <Pagination />

      
      <div className='bg-blue-300 p-6 rounded-lg shadow-md mt-6'>
        <h2 className='text-2xl font-semibold text-gray-700 mb-4'>HTML Using Notepad or TextEdit</h2>
        <ul className='list-disc list-inside space-y-2 text-gray-600'>
          <li>Web pages can be created and modified by using professional HTML editors.</li>
          <li>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</li>
          <li>We believe that using a simple text editor is a good way to learn HTML.</li>
          <li>Follow the steps below to create your first web page with Notepad or TextEdit.</li>
        </ul>
      </div>
    </div>
  );
};

export default Editors;
