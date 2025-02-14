import React from 'react';
import Pagination from '@/Components/Pagination';

const HtmlXhtml = () => {
  return (

    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
    <div className="heading mb-6">
      <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Versus XHTML</h1>
    </div>

    <Pagination />
      <div className="space-y-4">
        <p>XHTML is a stricter, more XML-based version of HTML.</p>

        <h2 className="text-2xl font-semibold text-black dark:text-gray-900">What is XHTML?</h2>
        <ul className="list-disc pl-6 space-y-2 text-orange-700">
          <li>XHTML stands for EXtensible HyperText Markup Language</li>
          <li>XHTML is a stricter, more XML-based version of HTML</li>
          <li>XHTML is HTML defined as an XML application</li>
          <li>XHTML is supported by all major browsers</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-900">Why XHTML?</h2>
        <p className=' text-orange-700'>XML is a markup language where all documents must be well-formed.</p>
        <p className=' text-orange-700'>XHTML was developed to make HTML more extensible and flexible to work with other data formats (such as XML).</p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-900">The Most Important Differences from HTML</h2>
        <ul className="list-disc pl-6 space-y-2  text-orange-700">
          <li><code>&lt;!DOCTYPE&gt;</code> is mandatory</li>
          <li>The <code>xmlns</code> attribute in <code>&lt;html&gt;</code> is mandatory</li>
          <li><code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;title&gt;</code>, and <code>&lt;body&gt;</code> are mandatory</li>
          <li>Elements must always be properly nested</li>
          <li>Elements must always be closed</li>
          <li>Elements must always be in lowercase</li>
          <li>Attribute names must always be in lowercase</li>
          <li>Attribute values must always be quoted</li>
          <li>Attribute minimization is forbidden</li>
        </ul>
      </div>
    </div>
  );
};

export default HtmlXhtml;
