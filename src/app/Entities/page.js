'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Entities = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Entities</h1>
        </div>
    
        <Pagination />

            <div className='bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-800'>HTML Element</h2>
                <ul className='list-disc list-inside text-gray-700 space-y-2'>
                    <li>HTML (HyperText Markup Language) elements are the building blocks of web pages.</li>
                    <li>An HTML element consists of a start tag, content, and an end tag (except for self-closing elements).</li>
                    <li>Elements define the structure and content of a web page, such as headings, paragraphs, images, links, and more.</li>
                </ul>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200 text-gray-800'>
                <h2 className='text-2xl font-semibold mb-4'>Reserved Characters in HTML</h2>
                <p className='mb-2'>Reserved characters in HTML must be replaced with entities:</p>
                <ul className='list-disc list-inside space-y-2'>
                    <li>&lt; (less than) = &amp;lt;</li>
                    <li>&gt; (greater than) = &amp;gt;</li>
                </ul>
                <p className='mt-4 mb-2'>Some characters are reserved in HTML. If you use the less than (&lt;) or greater than (&gt;) signs in your HTML text, the browser might mix them with tags.</p>
                <p className='mb-2'>Entity names or entity numbers can be used to display reserved HTML characters.</p>
                <p className='mb-2'><strong>Entity names look like this:</strong></p>
                <p className='bg-gray-100 p-2 rounded'>&amp;entity_name;</p>
                <p className='mt-2'><strong>Entity numbers look like this:</strong></p>
                <p className='bg-gray-100 p-2 rounded'>&#entity_number;</p>
                <p className='mt-4'>To display a less than sign (&lt;) we must write: <code className='bg-gray-100 p-1 rounded'>&amp;lt;</code> or <code className='bg-gray-100 p-1 rounded'>&#60;</code>.</p>
            </div>
        </div>
    );
};

export default Entities;


