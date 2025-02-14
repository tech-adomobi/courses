'use client';

import React from 'react'
import Pagination from '@/Components/Pagination'

const Elements = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Elements</h1>
        </div>
    
        <Pagination />
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML Element</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>HTML (HyperText Markup Language) elements are the building blocks of web pages.</li>
                    <li>An HTML element consists of a start tag, content, and an end tag (except for self-closing elements).</li>
                    <li>Elements define the structure and content of a web page, such as headings, paragraphs, images, links, and more.</li>
                </ul>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Nested HTML Elements</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>HTML elements can be nested (this means that elements can contain other elements).</li>
                    <li>All HTML documents consist of nested HTML elements.</li>
                </ul>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML Paragraph</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>HTML paragraphs are defined with the P tag:</li>
                    <li>The following example contains four HTML elements (html, body, h1, and p):</li>
                </ul>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Empty HTML Elements</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>HTML elements with no content are called empty elements.</li>
                    <li>The br tag defines a line break and is an empty element without a closing tag.</li>
                </ul>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML is Not Case Sensitive</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>HTML tags are not case-sensitive: (P) means the same as (p).</li>
                    <li>The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML and demands lowercase for stricter document types like XHTML.</li>
                </ul>
            </div>
        </div>
    )
}

export default Elements;
