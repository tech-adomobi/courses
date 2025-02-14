'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Blockinline = () => {
    return (
        <div className="mx-auto mt-8 max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Block & Inline</h1>
            </div>
            <Pagination />
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 text-gray-700">
                <p className="mb-4">lockEvery HTML element has a default display value, depending on what type of element it is.</p>
                <p className="mb-4">The two most common display values are <span className="font-semibold">block</span> and <span className="font-semibold">inline</span>.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Block-level Elements</h2>
                <p className="mb-4 text-gray-700">A block-level element always starts on a new line, and browsers automatically add some space (a margin) before and after the element.</p>
                <p className="mb-4 text-gray-700">A block-level element always takes up the full width available.</p>
                <p className="mb-4 text-gray-700">Two commonly used block elements are:</p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                    <li><code className="bg-gray-200 p-1 rounded">&lt;p&gt;</code> - Paragraph</li>
                    <li><code className="bg-gray-200 p-1 rounded">&lt;div&gt;</code> - Division/Section</li>
                </ul>
                <pre className="bg-gray-800 text-white text-sm font-mono p-3 rounded overflow-x-auto">
{`<p>Hello World</p>
<div>Hello World</div>`}
                </pre>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Inline Elements</h2>
                <p className="mb-4  text-gray-700">An inline element does not start on a new line and only takes up as much width as necessary.</p>
                <p className="mb-4  text-gray-700">Example:</p>
                <pre className="bg-gray-800 text-white text-sm font-mono p-3 rounded overflow-x-auto">
{`<span>Hello World</span>`}
                </pre>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-orange-700 ">The <code className="bg-gray-800 p-1 rounded">&lt;div&gt;</code> Element</h2>
                <p className="mb-4 text-orange-700" >The <code className="bg-blue-700 p-1 rounded">&lt;div&gt;</code> element is often used as a container for other HTML elements.</p>
                <pre className="bg-gray-800 text-white text-sm font-mono p-3 rounded overflow-x-auto">
{`<div class="bg-black text-white p-5">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>`}
                </pre>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">The <code className="bg-gray-200 p-1 rounded">&lt;span&gt;</code> Element</h2>
                <p className="mb-4  text-gray-700">The <code className="bg-gray-200 p-1 rounded">&lt;span&gt;</code> element is an inline container used to mark up a part of a text.</p>
                <pre className="bg-gray-800 text-white text-sm font-mono p-3 rounded overflow-x-auto">
{`<p>My mother has <span style="color:blue;font-weight:bold;">blue</span> eyes.</p>`}
                </pre>
            </div>
        </div>
    );
};

export default Blockinline;
