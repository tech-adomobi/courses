import React from "react";
import Link from "next/link";
import Pagination from '@/Components/Pagination'

const JavaScript_html = () => {
  return (
   
    <div className="content-html mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
    <div className="heading mb-6">
      <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Javascript</h1>
    </div>

    <Pagination />
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-gray-700 mb-4">JavaScript makes HTML pages more dynamic and interactive.</p>
      </div>

    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example</h2>
        <div className="bg-gray-800 text-white p-4 rounded-md text-sm font-mono overflow-x-auto">
          <pre>{`<button onclick="document.getElementById('demo').innerHTML = Date()">Click me to display Date and Time</button>`}</pre>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example</h2>
        <div className="bg-gray-800 text-white p-4 rounded-md text-sm font-mono overflow-x-auto">
          <pre>{`<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>`}</pre>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">A Taste of JavaScript</h2>
        <p className="text-gray-700 mb-4">Here are some examples of what JavaScript can do:</p>
        <div className="bg-gray-800 text-white p-4 rounded-md text-sm font-mono overflow-x-auto">
          <pre>{`document.getElementById("demo").innerHTML = "Hello JavaScript!";`}</pre>
          <pre>{`document.getElementById("demo").style.fontSize = "25px";`}</pre>
          <pre>{`document.getElementById("image").src = "picture.gif";`}</pre>
        </div>
      </div>



  </div>
  );
};

export default JavaScript_html;
