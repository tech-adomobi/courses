'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Responsive = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
    <div className="heading mb-6">
      <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Paragraph</h1>
    </div>

    <Pagination />
      
      <p className="mb-4 text-gray-700">
        Responsive Web Design (RWD) is an approach that makes web pages look good on all devices by automatically adjusting layouts, images, and navigation to fit different screen sizes.
      </p>
      
      <div className="bg-gray-900 text-white p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Key Techniques for Responsive Web Design</h2>
        <ul className="list-disc list-inside">
          <li>Viewport Meta Tag</li>
          <li>Flexible Layouts (Using % or flexbox/grid)</li>
          <li>Responsive Images</li>
          <li>Media Queries (CSS)</li>
        </ul>
      </div>

      <div className="my-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Example: A Simple Responsive Web Page</h2>
        <div className="bg-gray-900 text-white p-4 rounded-lg">
          <p className="text-sm">On desktop, the three content boxes appear in a row. On mobile devices, they adjust to full width.</p>
        </div>
      </div>

      <div className="container flex flex-wrap justify-center gap-4 my-6">
        <div className="bg-gray-800 text-white p-6 w-1/3 min-w-[250px] text-center rounded-lg">Content Box 1</div>
        <div className="bg-gray-800 text-white p-6 w-1/3 min-w-[250px] text-center rounded-lg">Content Box 2</div>
        <div className="bg-gray-800 text-white p-6 w-1/3 min-w-[250px] text-center rounded-lg">Content Box 3</div>
      </div>

   
    </div>
  );
};

export default Responsive;
