import React from "react";
import Link from "next/link";
import Pagination from '@/Components/Pagination'

const Links = () => {
  return (
    <div className="content-html  mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Links</h1>
        </div>
    
        <Pagination />

      {/* Introduction */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">What are Links?</h2>
        <p className="text-gray-600">
          Links (or hyperlinks) allow users to navigate from one page to another.
          They can be **text, images, or buttons**.
        </p>
      </div>

      {/* Basic Link Example */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Basic HTML Link</h2>
        <p className="text-gray-600">A simple text hyperlink:</p>
        <div className="mt-3">
          <Link href="https://www.w3schools.com" className="text-blue-500 underline">
            Visit W3Schools
          </Link>
        </div>
      </div>

      {/* Link with Target Attribute */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Open Link in New Tab</h2>
        <p className="text-gray-600">Use <code>target="_blank"</code> to open in a new tab:</p>
        <div className="mt-3">
          <a href="https://www.w3schools.com" target="_blank" className="text-blue-500 underline">
            Open W3Schools in New Tab
          </a>
        </div>
      </div>

      {/* Absolute vs. Relative Links */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Absolute vs. Relative Links</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li><strong>Absolute:</strong> Full URL (e.g., <code>https://www.example.com</code>)</li>
          <li><strong>Relative:</strong> Path within the same site (e.g., <code>/about</code>)</li>
        </ul>
        <div className="mt-3">
          <p className="text-blue-500 underline">Absolute:</p>
          <a href="https://www.google.com" className="text-blue-500 underline">Google</a>
          <p className="mt-2 text-green-500 underline">Relative:</p>
          <Link href="/about" className="text-green-500 underline">Go to About Page</Link>
        </div>
      </div>

      {/* Image as a Link */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Using an Image as a Link</h2>
        <p className="text-gray-600">Click the image below to go to the homepage:</p>
        <div className="mt-3">
          <Link href="/">
            <img
              src="https://via.placeholder.com/100"
              alt="Home"
              className="w-24 h-24 border rounded-lg hover:opacity-80"
            />
          </Link>
        </div>
      </div>

      {/* Email Link */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Email Link</h2>
        <p className="text-gray-600">Opens the default email client:</p>
        <div className="mt-3">
          <a href="mailto:someone@example.com" className="text-blue-500 underline">
            Send Email
          </a>
        </div>
      </div>

      {/* Button as a Link */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Button as a Link</h2>
        <p className="text-gray-600">Use JavaScript or Next.js routing for navigation:</p>
        <div className="mt-3">
          <Link href="/contact">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Go to Contact Page
            </button>
          </Link>
        </div>
      </div>

      {/* Tooltip using Title Attribute */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Tooltip on Hover</h2>
        <p className="text-gray-600">Hover over the link to see extra info:</p>
        <div className="mt-3">
          <a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section" className="text-blue-500 underline">
            HTML Tutorial
          </a>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Summary</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Use <code>{'<a>'}</code> for links.</li>
          <li>Use <code>href</code> to define the URL.</li>
          <li>Use <code>target="_blank"</code> to open in a new tab.</li>
          <li>Use <code>mailto:</code> for email links.</li>
          <li>Use <code>{'<img>'}</code> inside <code>{'<a>'}</code> to create image links.</li>
          <li>Use Next.js <code>{'<Link>'}</code> for better performance.</li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
