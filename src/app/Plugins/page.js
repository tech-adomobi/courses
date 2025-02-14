'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Plugins = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-white text-gray-900 rounded-2xl shadow-md">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Plug-ins</h1>
      </div>

      <Pagination />
      
      <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-md border border-gray-300">
        <p className="mb-4">Plug-ins are computer programs that extend the standard functionality of the browser.</p>
        
        <h2 className="text-xl font-semibold mb-2">Plug-ins</h2>
        <p className="mb-4">Plug-ins were designed to be used for many different purposes:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>To run Java applets</li>
          <li>To run Microsoft ActiveX controls</li>
          <li>To display Flash movies</li>
          <li>To display maps</li>
          <li>To scan for viruses</li>
          <li>To verify a bank ID</li>
        </ul>
        
        <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
          <strong>Warning!</strong>
          <p>Most browsers no longer support Java Applets and Plug-ins.</p>
          <p>ActiveX controls are no longer supported in any browsers.</p>
          <p>The support for Shockwave Flash has also been turned off in modern browsers.</p>
        </div>
        
        <h2 className="text-xl font-semibold mb-2">The &lt;object&gt; Element</h2>
        <p className="mb-4">The &lt;object&gt; element is supported by all browsers and defines an embedded object within an HTML document.</p>
        <p className="mb-4">It was designed to embed plug-ins (like Java applets, PDF readers, and Flash Players) in web pages, but can also be used to include HTML in HTML:</p>
        
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <code>&lt;object width="100%" height="500px" data="snippet.html"&gt;&lt;/object&gt;</code>
        </div>
        
        <h2 className="text-xl font-semibold mb-2">The &lt;embed&gt; Element</h2>
        <p className="mb-4">The &lt;embed&gt; element is supported in all major browsers and also defines an embedded object within an HTML document.</p>
        <p className="mb-4">Web browsers have supported the &lt;embed&gt; element for a long time. However, it has not been a part of the HTML specification before HTML5.</p>
      </div>
    </div>
  );
};

export default Plugins;
