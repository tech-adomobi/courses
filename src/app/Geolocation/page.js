'use client';

import React, { useEffect } from 'react';
import Pagination from '@/Components/Pagination';

const Geolocation = () => {
  
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
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Geolocation API</h1>
      </div>

      <Pagination />
      
      <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-md border border-gray-300">
        <p className="mb-4">The HTML Geolocation API is used to locate a user's position.</p>

        <h2 className="text-xl font-semibold mb-2">Locate the User's Position</h2>
        <p className="mb-4">Since this can compromise privacy, the position is not available unless the user approves it.</p>
        <p className="mb-4"><strong>Note:</strong> Geolocation is most accurate for devices with GPS, like smartphones.</p>

        <h2 className="text-xl font-semibold mb-2">Using HTML Geolocation</h2>
        <button 
          id="getLocationBtn"
          className="px-4 py-2 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600 transition">
          Get Location
        </button>
        <p id="demo" className="mt-4 text-lg font-semibold text-blue-600"></p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Handling Errors</h2>
        <p className="mb-4">The API includes an error handler to manage user permissions and location availability.</p>
      </div>
    </div>
  );
};

export default Geolocation;

