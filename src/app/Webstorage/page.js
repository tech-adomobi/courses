// 'use client';

// import React, { useState } from 'react';
// import Pagination from '@/Components/Pagination';

// const WebStorage = () => {
//   const [localValue, setLocalValue] = useState(localStorage.getItem('lastname') || '');
//   const [sessionValue, setSessionValue] = useState(sessionStorage.getItem('clickcount') || 0);

//   const storeLocalStorage = () => {
//     localStorage.setItem("lastname", "Smith");
//     setLocalValue("Smith");
//   };

//   const removeLocalStorage = () => {
//     localStorage.removeItem("lastname");
//     setLocalValue('');
//   };

//   const incrementSessionStorage = () => {
//     const count = sessionStorage.getItem("clickcount") ? Number(sessionStorage.getItem("clickcount")) + 1 : 1;
//     sessionStorage.setItem("clickcount", count);
//     setSessionValue(count);
//   };

//   return (
//     <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-white text-gray-900 rounded-2xl shadow-md">
//       <div className="heading mb-6">
//         <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Web Storage API</h1>
//       </div>

//       <Pagination />
      
//       <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-md border border-gray-300">
//         <h2 className="text-xl font-semibold mb-2">What is HTML Web Storage?</h2>
//         <p className="mb-4">With web storage, web applications can store data locally within the user's browser. Unlike cookies, it provides a larger storage limit and does not send data to the server.</p>

//         <h3 className="text-lg font-semibold mb-2">Web Storage Objects</h3>
//         <ul className="list-disc list-inside mb-4 space-y-2">
//           <li><strong>localStorage</strong> - Stores data with no expiration date.</li>
//           <li><strong>sessionStorage</strong> - Stores data for one session (deleted when the browser tab is closed).</li>
//         </ul>

//         <h3 className="text-lg font-semibold mb-2">Checking Browser Support</h3>
//         <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
//           <pre>{`if (typeof(Storage) !== "undefined") {
//   // Code for localStorage/sessionStorage.
// } else {
//   console.log("No Web Storage support.");
// }`}</pre>
//         </div>

//         <h3 className="text-lg font-semibold mb-2">Interactive localStorage Example</h3>
//         <div className="mb-4">
//           <button onClick={storeLocalStorage} className="px-4 py-2 bg-green-500 text-white rounded-md mr-2">Store Data</button>
//           <button onClick={removeLocalStorage} className="px-4 py-2 bg-red-500 text-white rounded-md">Remove Data</button>
//         </div>
//         <p className="font-semibold">Stored Value: <span className="text-blue-600">{localValue || "No Data"}</span></p>

//         <h3 className="text-lg font-semibold mt-6 mb-2">Interactive sessionStorage Example</h3>
//         <div className="mb-4">
//           <button onClick={incrementSessionStorage} className="px-4 py-2 bg-blue-500 text-white rounded-md">Click to Increment</button>
//         </div>
//         <p className="font-semibold">Click Count (Session): <span className="text-blue-600">{sessionValue}</span></p>

//       </div>
//     </div>
//   );
// };

// export default WebStorage;

