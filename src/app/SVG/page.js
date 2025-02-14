'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const SVG = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-white text-black rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML SVG Graphics</h1>
        </div>
    
        <Pagination />

        <p className="mb-4 font-semibold">Here’s a beginner-friendly explanation of SVG (Scalable Vector Graphics) along with a graphical representation:</p>

        <h2 className="text-2xl font-bold text-blue-600 mb-2">What is SVG?</h2>
        <p className="mb-4">SVG (Scalable Vector Graphics) is an XML-based format for defining vector-based graphics that can be scaled without losing quality. It is commonly used for icons, logos, and illustrations on the web.</p>

        <h2 className="text-2xl font-bold text-blue-600 mb-2">Key Features of SVG</h2>
        <ul className="list-disc list-inside mb-4">
          <li>✔️ <span className="font-semibold">Scalable</span> - No pixelation when resized</li>
          <li>✔️ <span className="font-semibold">Lightweight</span> - Smaller file sizes than images</li>
          <li>✔️ <span className="font-semibold">Editable</span> - Can be modified with code (HTML, CSS, JavaScript)</li>
          <li>✔️ <span className="font-semibold">Interactive</span> - Supports animations and event handling</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-600 mb-2">Basic SVG Elements</h2>
        <table className="w-full border-collapse border border-gray-300 text-left mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Element</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">&lt;circle&gt;</td>
              <td className="border border-gray-300 p-2">Draws a circle</td>
              <td className="border border-gray-300 p-2">🔵</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">&lt;rect&gt;</td>
              <td className="border border-gray-300 p-2">Draws a rectangle</td>
              <td className="border border-gray-300 p-2">🟥</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">&lt;line&gt;</td>
              <td className="border border-gray-300 p-2">Draws a line</td>
              <td className="border border-gray-300 p-2">➖</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">&lt;polygon&gt;</td>
              <td className="border border-gray-300 p-2">Creates a shape with multiple points</td>
              <td className="border border-gray-300 p-2">🔺</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">&lt;text&gt;</td>
              <td className="border border-gray-300 p-2">Adds text inside an SVG</td>
              <td className="border border-gray-300 p-2">🅰</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-bold text-blue-600 mb-2">Example of a Simple SVG:</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`<svg width="200" height="200">
  <rect x="10" y="10" width="50" height="50" fill="blue"/>
  <circle cx="100" cy="100" r="40" fill="red"/>
  <line x1="10" y1="150" x2="190" y2="150" stroke="black" stroke-width="2"/>
  <text x="50" y="190" font-size="16" fill="green">Hello SVG</text>
</svg>`}
        </pre>

        <h2 className="text-2xl font-bold text-blue-600 mb-2">SVG vs PNG/JPG</h2>
        <table className="w-full border-collapse border border-gray-300 text-left mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Feature</th>
              <th className="border border-gray-300 p-2">SVG</th>
              <th className="border border-gray-300 p-2">PNG/JPG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Scalability</td>
              <td className="border border-gray-300 p-2">✅ Yes</td>
              <td className="border border-gray-300 p-2">❌ No (pixelates)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Editable with Code</td>
              <td className="border border-gray-300 p-2">✅ Yes</td>
              <td className="border border-gray-300 p-2">❌ No</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">File Size</td>
              <td className="border border-gray-300 p-2">🔽 Small (for simple shapes)</td>
              <td className="border border-gray-300 p-2">🔼 Large (for complex images)</td>
            </tr>
          </tbody>
        </table>
      </div>

  );
}

export default SVG;
