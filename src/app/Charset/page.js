'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Charset = () => {
    return (
        <div className="content-html mx-auto mt-8 max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Encoding (Character Sets)</h1>
        </div>
    
        <Pagination />
            <div className='bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200'>
                <p className='text-gray-700 mb-4'>To display an HTML page correctly, a web browser must know which character set to use.</p>
                
                <h2 className='text-2xl font-semibold text-gray-800 mb-3'>The HTML charset Attribute</h2>
                <p className='text-gray-700 mb-4'>The character set is specified in the <code className='bg-gray-200 p-1 rounded'>&lt;meta&gt;</code> tag:</p>
                <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-4'>
                    <code className='text-blue-600'>&lt;meta charset="UTF-8"&gt;</code>
                </pre>
                <p className='text-gray-700 mb-4'>The HTML5 specification encourages web developers to use the UTF-8 character set, which covers almost all characters and symbols in the world.</p>

                <h2 className='text-2xl font-semibold text-gray-800 mb-3'>Character Sets</h2>
                <ul className='list-disc list-inside text-gray-700 space-y-2'>
                    <li><span className='font-semibold'>ASCII:</span> First character encoding standard, defining 128 characters.</li>
                    <li><span className='font-semibold'>ANSI:</span> Original Windows character set (Windows-1252).</li>
                    <li><span className='font-semibold'>ISO-8859-1:</span> Default for HTML 4, supported 256 characters.</li>
                    <li><span className='font-semibold'>UTF-8:</span> Modern encoding supporting over 10,000 characters.</li>
                </ul>

                <h2 className='text-2xl font-semibold text-gray-800 mt-6 mb-3'>Examples</h2>
                <div className='space-y-4'>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-700'>UTF-8 Encoding</h3>
                        <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto'>
                            <code className='text-blue-600'>&lt;meta charset="UTF-8"&gt;</code>
                        </pre>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-700'>ISO-8859-1 Encoding</h3>
                        <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto'>
                            <code className='text-blue-600'>&lt;meta charset="ISO-8859-1"&gt;</code>
                        </pre>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-700'>Windows-1252 Encoding</h3>
                        <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto'>
                            <code className='text-blue-600'>&lt;meta charset="Windows-1252"&gt;</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charset;