'use client';
import React from 'react'

import Pagination from '@/Components/Pagination'

const Comments = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-grays-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Comments</h1>
        </div>
    
        <Pagination />

            {/* Definition Section */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">HTML Comment Tag</h2>
                <p className="text-gray-600">
                    HTML comments are not displayed in the browser, but they can help document your HTML source code.
                </p>
                <div className="bg-gray-800 text-white text-sm font-mono p-3 rounded mt-3">
                    <code>&lt;!-- Write your comments here --&gt;</code>
                </div>
                <p className="text-gray-600 mt-3">
                    Notice that there is an exclamation point (<code className="bg-gray-200 px-1 rounded">!</code>) in the start tag, but not in the end tag.
                </p>
            </div>

            {/* Adding Comments Section */}
            <div className="bg-white p-5 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Add Comments</h2>
                <p className="text-gray-600">
                    With comments, you can place notifications and reminders in your HTML code:
                </p>
                <div className="bg-gray-800 text-white text-sm font-mono p-3 rounded mt-3">
                    <code>
                        &lt;!-- This is a comment --&gt;
                        <br />
                        <br />
                        &lt;p&gt;This is a paragraph.&lt;/p&gt;
                        <br />
                        <br />
                        &lt;!-- Remember to add more information here --&gt;
                    </code>
                </div>
            </div>

            {/* Hiding Content Section */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Hide Content</h2>
                <p className="text-gray-600">
                    Comments can be used to hide content temporarily:
                </p>
                <div className="bg-gray-800 text-white text-sm font-mono p-3 rounded mt-3">
                    <code>
                        &lt;p&gt;This is a paragraph.&lt;/p&gt;
                        <br />
                        &lt;!-- &lt;p&gt;This is another paragraph&lt;/p&gt; --&gt;
                        <br />
                        &lt;p&gt;This is a paragraph too.&lt;/p&gt;
                    </code>
                </div>
            </div>

            {/* Hiding Multiple Lines */}
            <div className="bg-white p-5 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Hide a Section of HTML Code</h2>
                <p className="text-gray-600">
                    Everything between the <code className="bg-gray-200 px-1 rounded">&lt;!--</code> and <code className="bg-gray-200 px-1 rounded">--&gt;</code> will be hidden from display.
                </p>
                <div className="bg-gray-800 text-white text-sm font-mono p-3 rounded mt-3">
                    <code>
                        &lt;p&gt;This is a paragraph.&lt;/p&gt;
                        <br />
                        &lt;!--
                        <br />
                        &lt;p&gt;Look at this cool image:&lt;/p&gt;
                        <br />
                        &lt;img border="0" src="pic_trulli.jpg" alt="Trulli"&gt;
                        <br />
                        --&gt;
                        <br />
                        &lt;p&gt;This is a paragraph too.&lt;/p&gt;
                    </code>
                </div>
            </div>

            {/* Hide Inline Content */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Hide Inline Content</h2>
                <p className="text-gray-600">
                    Comments can be used to hide parts in the middle of the HTML code:
                </p>
                <div className="bg-gray-800 text-white text-sm font-mono p-3 rounded mt-3">
                    <code>
                        &lt;p&gt;This &lt;!-- great text --&gt; is a paragraph.&lt;/p&gt;
                    </code>
                </div>
            </div>
        </div>
    )
}

export default Comments






