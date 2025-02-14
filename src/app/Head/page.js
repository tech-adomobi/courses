'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Head = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-white text-gray-200 rounded-2xl shadow-md">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-500 p-2 rounded">HTML - The Head Element</h1>
      </div>

      <Pagination />
      <p className="mb-4 text-lg text-black">The HTML <code className="text-orange-400">&lt;head&gt;</code> element is a container for the following elements: <code className="text-orange-400">&lt;title&gt;</code>, <code className="text-orange-400">&lt;style&gt;</code>, <code className="text-orange-400">&lt;meta&gt;</code>, <code className="text-orange-400">&lt;link&gt;</code>, <code className="text-orange-400">&lt;script&gt;</code>, and <code className="text-orange-400">&lt;base&gt;</code>.</p>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">The HTML <code>&lt;head&gt;</code> Element</h2>
        <p className="text-gray-300">The <code>&lt;head&gt;</code> element is a container for metadata (data about data) and is placed between the <code>&lt;html&gt;</code> tag and the <code>&lt;body&gt;</code> tag.</p>
      </div>

      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">A Simple HTML Document:</h2>
        <pre className="bg-gray-700 p-4 rounded-md text-sm text-green-400 overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
  <title>A Meaningful Page Title</title>
</head>
<body>
  The content of the document......
</body>
</html>`}
        </pre>
      </div>

      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">The HTML <code>&lt;meta&gt;</code> Element</h2>
        <p className="text-gray-300">The <code>&lt;meta&gt;</code> element is used to define metadata like character set, page description, keywords, and viewport settings.</p>
      </div>

      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">Example of <code>&lt;meta&gt;</code> tags:</h2>
        <pre className="bg-gray-700 p-4 rounded-md text-sm text-green-400 overflow-x-auto">
{`<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="John Doe">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
        </pre>
      </div>
    </div>
  );
};

export default Head;
