'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Id = () => {
    return (
        <div className="mx-auto  mt-8 max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML ID Attribute</h1>
            </div>
            <Pagination />

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <p className="text-gray-700 mb-4">The HTML <code className="bg-gray-200 p-1 rounded">id</code> attribute is used to specify a unique id for an HTML element.</p>
                <p className="text-gray-700 mb-4">You cannot have more than one element with the same id in an HTML document.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">The id Attribute</h2>
                <p className="text-gray-700 mb-4">The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.</p>
                <p className="text-gray-700 mb-4">The id attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example</h2>
                <div className="bg-gray-800 text-white p-4 rounded-md text-sm font-mono overflow-x-auto">
                    <pre>{`<!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
</head>
<body>

<h1 id="myHeader">My Header</h1>

</body>
</html>`}</pre>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Difference Between Class and ID</h2>
                <p className="text-gray-700 mb-4">A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example</h2>
                <div className="bg-gray-800 text-white p-4 rounded-md text-sm font-mono overflow-x-auto">
                    <pre>{`<style>
/* Style the element with the id "myHeader" */
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}

/* Style all elements with the class name "city" */
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>

<!-- An element with a unique id -->
<h1 id="myHeader">My Cities</h1>

<!-- Multiple elements with same class -->
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>`}</pre>
                </div>
            </div>
        </div>
    );
};

export default Id;

