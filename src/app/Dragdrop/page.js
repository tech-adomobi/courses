'use client';

import React, { useEffect } from 'react';
import Pagination from '@/Components/Pagination';

const Dragdrop = () => {
  
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
      }
    };

    const showPosition = (position) => {
      document.getElementById("demo").innerHTML = 
        `Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude}`;
    };

    const showError = (error) => {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          document.getElementById("demo").innerHTML = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          document.getElementById("demo").innerHTML = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          document.getElementById("demo").innerHTML = "The request to get user location timed out.";
          break;
        case error.UNKNOWN_ERROR:
          document.getElementById("demo").innerHTML = "An unknown error occurred.";
          break;
      }
    };

    document.getElementById("getLocationBtn")?.addEventListener("click", getLocation);
  }, []);

  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-white text-gray-900 rounded-2xl shadow-md">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Drag and Drop API</h1>
      </div>

      <Pagination />
      
      <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-xl font-semibold mb-2">HTML Geolocation API</h2>
        <p className="mb-4">The HTML Geolocation API is used to locate a user's position.</p>

        <button 
          id="getLocationBtn"
          className="px-4 py-2 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600 transition">
          Get Location
        </button>
        <p id="demo" className="mt-4 text-lg font-semibold text-blue-600"></p>

        <h2 className="text-xl font-semibold mb-2 mt-6">HTML Drag and Drop API</h2>
        <p className="mb-4">In HTML, any element can be dragged and dropped.</p>

        <h3 className="text-lg font-semibold mb-2">Drag and Drop Example</h3>
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <pre>{`
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
          `}</pre>
        </div>

        <h3 className="text-lg font-semibold mb-2">Make an Element Draggable</h3>
        <p className="mb-4">To make an element draggable, set the draggable attribute to true:</p>
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <pre>{`<img draggable="true">`}</pre>
        </div>

        <h3 className="text-lg font-semibold mb-2">Drop Handling</h3>
        <p className="mb-4">When the dragged data is dropped, a drop event occurs.</p>
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <pre>{`
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
          `}</pre>
        </div>
      </div>
    </div>
  );
}
export default Dragdrop;
