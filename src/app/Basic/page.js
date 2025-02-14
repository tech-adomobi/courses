'use client';

import React from 'react'
import Pagination from '@/Components/Pagination'

const Basic = () => {
    return (
        <div className="content-html mx-auto mt-8 max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Basic</h1>
        </div>
  
        <Pagination />
            <div className='mb-8'>
                <h2 className='text-2xl font-semibold text-gray-700 mb-3'>HTML Documents</h2>
                <ul className='list-disc list-inside space-y-2 text-gray-600'>
                    <li>All HTML documents must start with a document type declaration: <code className='bg-gray-200 px-1 rounded'>&lt;!DOCTYPE html&gt;</code></li>
                    <li>The HTML document itself begins with <code className='bg-gray-200 px-1 rounded'>&lt;html&gt;</code> and ends with <code className='bg-gray-200 px-1 rounded'>&lt;/html&gt;</code>.</li>
                    <li>The visible part of the HTML document is between <code className='bg-gray-200 px-1 rounded'>&lt;body&gt;</code> and <code className='bg-gray-200 px-1 rounded'>&lt;/body&gt;</code>.</li>
                </ul>
            </div>
            <div className='mb-8'>
                <h2 className='text-2xl font-semibold text-gray-700 mb-3'>HTML Headings</h2>
                <ul className='list-disc list-inside space-y-2 text-gray-600'>
                    <li>HTML headings are defined with the <code className='bg-gray-200 px-1 rounded'>&lt;h1&gt;</code> to <code className='bg-gray-200 px-1 rounded'>&lt;h6&gt;</code> tags.</li>
                    <li><code className='bg-gray-200 px-1 rounded'>&lt;h1&gt;</code> defines the most important heading, while <code className='bg-gray-200 px-1 rounded'>&lt;h6&gt;</code> defines the least important heading.</li>
                </ul>
            </div>
            <div className='mb-8'>
                <h2 className='text-2xl font-semibold text-gray-700 mb-3'>HTML Paragraph</h2>
                <ul className='list-disc list-inside space-y-2 text-gray-600'>
                    <li>HTML paragraphs are defined with the <code className='bg-gray-200 px-1 rounded'>&lt;p&gt;</code> tag.</li>
                </ul>
            </div>
            <div className='mb-8'>
                <h2 className='text-2xl font-semibold text-gray-700 mb-3'>HTML Link</h2>
                <ul className='list-disc list-inside space-y-2 text-gray-600'>
                    <li>HTML links are defined with the <code className='bg-gray-200 px-1 rounded'>&lt;a&gt;</code> tag.</li>
                    <li>The link's destination is specified in the <code className='bg-gray-200 px-1 rounded'>href</code> attribute.</li>
                    <li>Attributes provide additional information about HTML elements.</li>
                </ul>
            </div>
            <div className='mb-8'>
                <h2 className='text-2xl font-semibold text-gray-700 mb-3'>HTML Image</h2>
                <ul className='list-disc list-inside space-y-2 text-gray-600'>
                    <li>HTML images are defined with the <code className='bg-gray-200 px-1 rounded'>&lt;img&gt;</code> tag.</li>
                    <li>The source file (<code className='bg-gray-200 px-1 rounded'>src</code>), alternative text (<code className='bg-gray-200 px-1 rounded'>alt</code>), width, and height are provided as attributes.</li>
                </ul>
            </div>
        </div>
    )
}

export default Basic;