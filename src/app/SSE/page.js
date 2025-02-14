'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const SSE = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-white text-gray-900 rounded-2xl shadow-md">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Server-Sent Events (SSE)</h1>
      </div>

      <Pagination />
      
      <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-xl font-semibold mb-2">Server-Side Code Example</h2>
        <p className="mb-4">For the example below to work, you need a server capable of sending data updates, such as PHP or ASP.</p>
        
        <h3 className="text-lg font-semibold mb-2">PHP Example</h3>
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <pre>{`<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('r');
echo "data: The server time is: {$time}\n\n";
flush();
?>`}</pre>
        </div>
        
        <h3 className="text-lg font-semibold mb-2">ASP Example</h3>
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <pre>{`<%
Response.ContentType = "text/event-stream"
Response.Expires = -1
Response.Write("data: The server time is: " & now())
Response.Flush()
%>`}</pre>
        </div>
        
        <h3 className="text-lg font-semibold mb-2">Code Explanation</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Set the <code>Content-Type</code> header to <code>text/event-stream</code>.</li>
          <li>Specify that the page should not cache.</li>
          <li>Output the data to send, always starting with <code>data:</code>.</li>
          <li>Flush the output data back to the web page.</li>
        </ul>
        
        <h3 className="text-lg font-semibold mb-2">The EventSource Object</h3>
        <p className="mb-4">The following events are available when working with the <code>EventSource</code> object:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li><code>onopen</code> - Triggered when a connection to the server is opened.</li>
          <li><code>onmessage</code> - Triggered when a message is received.</li>
          <li><code>onerror</code> - Triggered when an error occurs.</li>
        </ul>
      </div>
    </div>
  );
};

export default SSE;
