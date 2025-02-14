'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Webworkers = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-white text-gray-900 rounded-2xl shadow-md">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Web Workers</h1>
      </div>

      <Pagination />
      
      <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-xl font-semibold mb-2">What is a Web Worker?</h2>
        <p className="mb-4">A web worker is a JavaScript running in the background, without affecting the performance of the page.</p>

        <h3 className="text-lg font-semibold mb-2">Why Use Web Workers?</h3>
        <p className="mb-4">When executing scripts in an HTML page, the page becomes unresponsive until the script is finished. Web workers allow JavaScript to run independently without blocking the main thread.</p>

        <h3 className="text-lg font-semibold mb-2">Checking Web Worker Support</h3>
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <pre>{`if (typeof(Worker) !== "undefined") {
  console.log("Web Worker supported.");
} else {
  console.log("No Web Worker support.");
}`}</pre>
        </div>

        <h3 className="text-lg font-semibold mb-2">Creating a Web Worker</h3>
        <p className="mb-4">Create a separate JavaScript file (e.g., <code>worker.js</code>) with the following code:</p>
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <pre>{`let i = 0;
function timedCount() {
  i++;
  postMessage(i);
  setTimeout(timedCount, 500);
}
timedCount();`}</pre>
        </div>

        <h3 className="text-lg font-semibold mb-2">Using the Web Worker</h3>
        <p className="mb-4">In your main HTML file, initialize and interact with the worker:</p>
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <pre>{`let w;
function startWorker() {
  if (typeof(Worker) !== "undefined") {
    if (!w) {
      w = new Worker("worker.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerText = event.data;
    };
  } else {
    document.getElementById("result").innerText = "No Web Worker support.";
  }
}
function stopWorker() {
  if (w) {
    w.terminate();
    w = undefined;
  }
}`}</pre>
        </div>

        <h3 className="text-lg font-semibold mb-2">Web Workers and the DOM</h3>
        <p className="mb-4">Web workers run in a separate thread and do not have access to:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>The <code>window</code> object</li>
          <li>The <code>document</code> object</li>
          <li>The <code>parent</code> object</li>
        </ul>
      </div>
    </div>
  );
};

export default Webworkers;
