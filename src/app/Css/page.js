import React from 'react'
import Pagination from '@/Components/Pagination'

const Css = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Styles - CSS</h1>
        </div>
    
        <Pagination />

            
      {/* What is CSS */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">What is CSS?</h2>
        <p className="text-gray-600">
          CSS (Cascading Style Sheets) is used to design web pages by applying styles to elements.
          With CSS, you can control colors, fonts, spacing, layout, and more.
        </p>
      </div>

      {/* CSS Types */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Ways to Add CSS</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li><strong>Inline CSS:</strong> Uses the <code>style</code> attribute inside elements.</li>
          <li><strong>Internal CSS:</strong> Defined inside a <code>{'<style>'}</code> tag.</li>
          <li><strong>External CSS:</strong> Uses a separate stylesheet linked via <code>{'<link>'}</code>.</li>
        </ul>
      </div>

      {/* Inline CSS Example */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Inline CSS</h2>
        <p className="text-gray-600">Applying styles directly using the <code>style</code> attribute.</p>
        <div className="mt-3">
          <h1 className="text-blue-500">A Blue Heading</h1>
          <p className="text-red-500">A Red Paragraph.</p>
        </div>
      </div>

      {/* Tailwind Example */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Using Tailwind CSS</h2>
        <p className="text-gray-600">With Tailwind, you can apply styles using utility classes:</p>
        <div className="bg-blue-100 p-3 rounded mt-3">
          <h1 className="text-blue-500 text-xl font-bold">This is a styled heading</h1>
          <p className="text-red-500 text-lg">This is a styled paragraph.</p>
        </div>
      </div>

      {/* External CSS Example */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">External CSS</h2>
        <p className="text-gray-600">
          You can link an external CSS file using:
        </p>
        <code className="block bg-gray-200 p-3 rounded mt-3">
          {'<link rel="stylesheet" href="styles.css">'}
        </code>
      </div>

      {/* CSS Properties */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Common CSS Properties</h2>
        <ul className="list-disc pl-6 text-gray-600 mt-3">
          <li><strong>Color:</strong> Defines text color.</li>
          <li><strong>Font-Family:</strong> Defines the font type.</li>
          <li><strong>Font-Size:</strong> Defines text size.</li>
          <li><strong>Border:</strong> Defines element borders.</li>
          <li><strong>Padding:</strong> Adds space inside borders.</li>
          <li><strong>Margin:</strong> Adds space outside borders.</li>
        </ul>
      </div>

      {/* Tailwind Example - Borders & Spacing */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Example with Borders & Spacing</h2>
        <div className="border-2 border-blue-500 p-3 rounded text-blue-500 font-serif text-3xl">
          Styled Heading
        </div>
        <p className="border-2 border-red-500 p-3 mt-3 text-red-500 font-mono text-lg">
          Styled Paragraph with Padding and Margin.
        </p>
      </div>
        </div>
    )
}

export default Css





