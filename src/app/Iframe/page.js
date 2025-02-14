'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Iframe = () => {
    return (
        <div className="mx-auto mt-8 max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Iframe</h1>
            </div>
            <Pagination />

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <p className="text-gray-700 mb-4">An HTML <code className="bg-gray-200 p-1 rounded">iframe</code> is used to display a web page within a web page.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">HTML Iframe Syntax</h2>
                <p className="text-gray-700 mb-4">The HTML <code className="bg-gray-200 p-1 rounded">&lt;iframe&gt;</code> tag specifies an inline frame.</p>
                <p className="text-gray-700 mb-4">An inline frame is used to embed another document within the current HTML document.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example</h2>
                <div className="bg-gray-800 text-white p-4 rounded-md text-sm font-mono overflow-x-auto">
                    <pre>{`<iframe src="demo_iframe.htm" title="Iframe Example"></iframe>`}</pre>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Set Height and Width</h2>
                <div className="bg-gray-800 text-white p-4 rounded-md text-sm font-mono overflow-x-auto">
                    <pre>{`<iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>`}</pre>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Remove the Border</h2>
                <div className="bg-gray-800 text-white p-4 rounded-md text-sm font-mono overflow-x-auto">
                    <pre>{`<iframe src="demo_iframe.htm" style="border:none;" title="Iframe Example"></iframe>`}</pre>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Target for a Link</h2>
                <div className="bg-gray-800 text-white p-4 rounded-md text-sm font-mono overflow-x-auto">
                    <pre>{`<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>

<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>`}</pre>
                </div>
            </div>
        </div>
    );
};

export default Iframe;