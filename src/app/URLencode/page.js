'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const URLencode = () => {
  return (
    <div className="mx-auto mt-8 max-w-4xl p-6 bg-white text-gray-900 rounded-2xl shadow-md">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">
          HTML Uniform Resource Locators
        </h1>
      </div>

      <Pagination />

      <p className="text-gray-800 mb-4">
        A URL is another word for a web address.
      </p>

      <p className="text-gray-800 mb-4">
        A URL can be composed of words (e.g. <span className="font-semibold">w3schools.com</span>), or an Internet Protocol (IP) address (e.g. <span className="font-semibold">192.68.20.50</span>).
      </p>

      <p className="text-gray-800 mb-4">
        Most people enter the name when surfing, because names are easier to remember than numbers.
      </p>

      <h2 className="text-2xl font-semibold text-orange-500 mb-3">URL - Uniform Resource Locator</h2>

      <p className="text-gray-800 mb-4">
        Web browsers request pages from web servers by using a URL.
      </p>

      <p className="text-gray-800 mb-4">
        A Uniform Resource Locator (URL) is used to address a document (or other data) on the web.
      </p>

      <p className="text-gray-800 mb-4">
        A web address like <code className="bg-gray-300 p-1 rounded">https://www.w3schools.com/html/default.asp</code> follows these syntax rules:
      </p>

      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <code className="block text-gray-900">
          scheme://prefix.domain:port/path/filename
        </code>
      </div>

      <h3 className="text-xl font-semibold text-orange-400 mb-2">Explanation:</h3>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li><strong>scheme</strong> - defines the type of Internet service (most common is http or https)</li>
        <li><strong>prefix</strong> - defines a domain prefix (default for http is www)</li>
        <li><strong>domain</strong> - defines the Internet domain name (like w3schools.com)</li>
        <li><strong>port</strong> - defines the port number at the host (default for http is 80)</li>
        <li><strong>path</strong> - defines a path at the server (If omitted: the root directory of the site)</li>
        <li><strong>filename</strong> - defines the name of a document or resource</li>
      </ul>
    </div>
  );
};

export default URLencode;
