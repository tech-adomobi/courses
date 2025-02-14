'use client';
import React from 'react';
import Link from 'next/link';
import Pagination from '@/Components/Pagination';

const Introduction = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Introduction</h1>
      </div>

      <Pagination />

      <div className="definition mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 bg-yellow-200 p-2 rounded">What is HTML?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 bg-yellow-100 p-4 rounded">
          <li>HTML stands for Hyper Text Markup Language</li>
          <li>HTML is the standard markup language for creating Web pages</li>
          <li>HTML describes the structure of a Web page</li>
          <li>HTML consists of a series of elements</li>
          <li>HTML elements tell the browser how to display the content</li>
          <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
        </ul>
      </div>

      <div className="example">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 bg-yellow-200 p-2 rounded">A Simple Example</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 bg-yellow-100 p-4 rounded">
          <li>The DOCTYPE html declaration defines that this document is an HTML5 document</li>
          <li>The html element is the root element of an HTML page</li>
          <li>The head element contains meta information about the HTML page</li>
          <li>The title element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
          <li>The body element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
          <li>The h1 element defines a large heading</li>
          <li>The p element defines a paragraph</li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;








