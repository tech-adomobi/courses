'use client';
import React from 'react';
import Pagination from '@/Components/Pagination';

const Filepath = () => {
  return (
    <div className="mx-auto mt-8 max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">
          HTML File Paths
        </h1>
      </div>
      <Pagination />

      <div className="mt-4 space-y-4">
        <p className='text-black'> 
          A file path describes the location of a file in a web site's folder
          structure.
        </p>

        <h2 className="text-2xl font-semibold mt-4 text-black">File Path Examples</h2>
        <div className="overflow-x-auto" >
          <table className="min-w-full bg-gray-300 text-black border border-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300 text-black">Path</th>
                <th className="px-4 py-2 border border-gray-300 text-black">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-black">
                <td className="px-4 py-2 border border-gray-300">
                  <code>&lt;img src="picture.jpg"&gt;</code>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  The "picture.jpg" file is located in the same folder as the
                  current page
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  <code>&lt;img src="images/picture.jpg"&gt;</code>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  The "picture.jpg" file is located in the images folder in the
                  current folder
                </td>
              </tr>
              <tr className="bg-white text-black">
                <td className="px-4 py-2 border border-gray-300">
                  <code>&lt;img src="/images/picture.jpg"&gt;</code>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  The "picture.jpg" file is located in the images folder at the
                  root of the current web
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  <code>&lt;img src="../picture.jpg"&gt;</code>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  The "picture.jpg" file is located in the folder one level up from
                  the current folder
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-6 text-black">HTML File Paths</h2>
        <p className='text-black'>
          File paths are used when linking to external files, such as web pages,
          images, style sheets, and JavaScripts.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-black">Absolute File Paths</h3>
        <p className='text-black'>An absolute file path is the full URL to a file:</p>
        <div className="bg-gray-200 p-4 rounded">
          <p className='text-black'>
            <code>
              &lt;img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain"&gt;
            </code>
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-4 text-black">Relative File Paths</h3>
        <p  className='text-black'>A relative file path points to a file relative to the current page.</p>
        <p  className='text-black'>
          Example: the file path points to a file in the images folder located at
          the root of the current web:
        </p>
        <div className="bg-gray-200 p-4 rounded">
          <p  className='text-black'>
            <code>&lt;img src="/images/picture.jpg" alt="Mountain"&gt;</code>
          </p>
        </div>
        <p className='text-black'>
          Example: the file path points to a file in the images folder located in
          the current folder:
        </p>
        <div className="bg-gray-200 p-4 rounded">
          <p className='text-black'>
            <code>&lt;img src="images/picture.jpg" alt="Mountain"&gt;</code>
          </p>
        </div>
        <p className='text-black'>
          Example: the file path points to a file in the images folder located in
          the folder one level up from the current folder:
        </p>
        <div className="bg-gray-200 p-4 rounded">
          <p className='text-black'>
            <code>&lt;img src="../images/picture.jpg" alt="Mountain"&gt;</code>
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-4 text-black">Best Practice</h3>
        <p className='text-black'>
          It is best practice to use relative file paths (if possible). When using
          relative file paths, your web pages will not be bound to your current base
          URL. All links will work on your own computer (localhost) as well as on your
          current and future public domains.
        </p>
      </div>
    </div>
  );
};

export default Filepath;
