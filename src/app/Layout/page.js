'use client';

import React from "react";
import Link from "next/link";
import Pagination from '@/Components/Pagination';

const Layout = () => {
  return (
    <div className="content-html  mt-8 mx-auto max-w-4xl p-6 rounded-2xl shadow-md bg-white  dark:text-gray-100">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 p-2 rounded">HTML Layout</h1>
      </div>

      <Pagination />

      <p className="mb-4 text-black">Websites often display content in multiple columns (like a magazine or a newspaper).</p>

      <div className="grid md:grid-cols-3 gap-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
        <div>
          <h2 className="font-bold text-lg">Cities</h2>
          <ul>
            <li>London</li>
            <li>Paris</li>
            <li>Tokyo</li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="font-bold text-lg">London</h2>
          <p>
            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6 text-black ">HTML Layout Elements</h2>
      <ul className="list-disc list-inside mt-2 text-black">
        <li>&lt;header&gt; - Defines a header for a document</li>
        <li>&lt;nav&gt; - Defines navigation links</li>
        <li>&lt;section&gt; - Defines a section</li>
        <li>&lt;article&gt; - Defines self-contained content</li>
        <li>&lt;aside&gt; - Defines content aside</li>
        <li>&lt;footer&gt; - Defines a footer</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 text-black">HTML Layout Techniques</h2>
      <ul className="list-disc list-inside mt-2  text-black">
        <li><strong>CSS Framework:</strong> Use Bootstrap or Tailwind.</li>
        <li><strong>CSS Float:</strong> Uses float and clear properties.</li>
        <li><strong>CSS Flexbox:</strong> Ensures responsive layouts.</li>
        <li><strong>CSS Grid:</strong> Uses rows and columns.</li>
      </ul>
    </div>
  );
};

export default Layout;
