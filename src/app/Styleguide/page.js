'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Styleguide = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Style Guide</h1>
        </div>
    
        <Pagination />

            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200'>
                <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Consistent, Clean, and Readable HTML</h2>
                <p className='text-gray-700 mb-4'>Maintaining clean and structured HTML improves readability and ensures better maintenance.</p>

                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>1️⃣ Always Declare Document Type</h3>
                <p className='text-gray-700 mb-4'>Always declare the document type as the first line in your document.</p>
                <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto'>
                    <code className='text-blue-600'>&lt;!DOCTYPE html&gt;</code>
                </pre>
                
                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>2️⃣ Use Lowercase Element and Attribute Names</h3>
                <p className='text-gray-700 mb-4'>HTML allows uppercase letters, but lowercase is preferred for better readability.</p>
                <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto'>
                    <code className='text-green-600'>&lt;body&gt;&lt;p&gt;This is a paragraph.&lt;/p&gt;&lt;/body&gt;</code>
                </pre>

                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>3️⃣ Always Close HTML Elements</h3>
                <p className='text-gray-700 mb-4'>Properly closing elements improves consistency.</p>

                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>4️⃣ Quote Attribute Values</h3>
                <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto'>
                    <code className='text-blue-600'>&lt;a href="https://example.com"&gt;Visit&lt;/a&gt;</code>
                </pre>

                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>5️⃣ Always Specify alt, width, and height for Images</h3>
                <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto'>
                    <code className='text-blue-600'>&lt;img src="image.jpg" alt="Description" width="200" height="200"&gt;</code>
                </pre>

                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>6️⃣ Avoid Spaces Around Equal Signs</h3>
                <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto'>
                    <code className='text-green-600'>&lt;link rel="stylesheet" href="styles.css"&gt;</code>
                </pre>
                
                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>7️⃣ Never Skip the &lt;title&gt; Element</h3>
                <p className='text-gray-700'>The &lt;title&gt; tag is important for SEO and user experience.</p>
                <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto'>
                    <code className='text-blue-600'>&lt;title&gt;HTML Style Guide&lt;/title&gt;</code>
                </pre>
                
                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>8️⃣ Use the &lt;html&gt; and &lt;body&gt; Tags</h3>
                <p className='text-gray-700'>Although optional, always include these tags to ensure consistency.</p>

                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>9️⃣ Add the lang Attribute</h3>
                <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto'>
                    <code className='text-blue-600'>&lt;html lang="en"&gt;</code>
                </pre>
            </div>
        </div>
    );
}

export default Styleguide;


