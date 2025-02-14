'use client';
import React from 'react'
import Link from 'next/link';
import Pagination from '@/Components/Pagination';

const Attribute = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Attributes</h1>
        </div>
  
        <Pagination />
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML Attributes</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>All HTML elements can have attributes.</li>
                    <li>Attributes provide additional information about elements.</li>
                    <li>Attributes usually come in name/value pairs like: name="value".</li>
                </ul>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>The href Attribute</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The (a) tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to.</li>
                </ul>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>The src Attribute</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The (img) tag is used to embed an image in an HTML page.</li>
                    <li>The src attribute specifies the path to the image to be displayed.</li>
                </ul>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML Attributes Explanation</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>Web pages can be created and modified by using professional HTML editors.</li>
                    <li>However, for learning HTML, we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</li>
                    <li>Using a simple text editor is a good way to learn HTML.</li>
                    <li>Follow the steps below to create your first web page with Notepad or TextEdit.</li>
                    <li>There are two ways to specify the URL in the <code>src</code> attribute:</li>
                    <ul className='ml-6 list-disc list-inside'>
                        <li><strong>Absolute URL</strong> - Links to an external image that is hosted on another website. Example: <code>src="https://www.w3schools.com/images/img_girl.jpg"</code>.</li>
                        <ul className='ml-6 list-disc list-inside'>
                            <li>External images might be under copyright. If you do not get permission to use it, you may be in violation of copyright laws.</li>
                            <li>External images can suddenly be removed or changed.</li>
                        </ul>
                        <li><strong>Relative URL</strong> - Links to an image that is hosted within the website. Example: <code>src="img_girl.jpg"</code>.</li>
                    </ul>
                    <li><strong>Tip:</strong> It is almost always best to use relative URLs. They will not break if you change domains.</li>
                </ul>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>The width and height Attributes</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The (img) tag should also contain the width and height attributes, which specify the width and height of the image (in pixels).</li>
                </ul>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>The alt Attribute</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The required alt attribute for the (img) tag specifies an alternate text for an image if the image cannot be displayed.</li>
                    <li>This can be due to a slow connection, an error in the src attribute, or if the user uses a screen reader.</li>
                </ul>
            </div>
        </div>
    )
}

export default Attribute;