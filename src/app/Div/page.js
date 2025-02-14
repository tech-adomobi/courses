'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Div = () => {
    return (
        <div className="mx-auto mt-8 max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Div Element</h1>
            </div>
            <Pagination />

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <p className="text-gray-700 mb-4">The <code className="bg-gray-200 p-1 rounded">&lt;div&gt;</code> element is used as a container for other HTML elements.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example: A &lt;div&gt; Element</h2>
                <div className="border p-4 bg-gray-500 rounded-md">Lorem Ipsum <div className="text-blue-600 font-bold">I am a div</div> dolor sit amet.</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Center Align a &lt;div&gt; Element</h2>
                <div className="w-72 mx-auto bg-gray-800 p-4 rounded-md">Centered Div Content</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Multiple &lt;div&gt; Elements</h2>
                <div className="space-y-4">
                    <div className="bg-gray-900 p-4 rounded-md">
                        <h3 className="text-lg font-semibold">London</h3>
                        <p>London is the capital city of England.</p>
                        <p>London has over 9 million inhabitants.</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-md">
                        <h3 className="text-lg font-semibold">Oslo</h3>
                        <p>Oslo is the capital city of Norway.</p>
                        <p>Oslo has over 700,000 inhabitants.</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-md">
                        <h3 className="text-lg font-semibold">Rome</h3>
                        <p>Rome is the capital city of Italy.</p>
                        <p>Rome has over 4 million inhabitants.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Aligning &lt;div&gt; Elements Side by Side</h2>
                <div className="flex space-x-4">
                    <div className="w-1/3 bg-gray-800 p-4 rounded-md">London</div>
                    <div className="w-1/3 bg-gray-800 p-4 rounded-md">Oslo</div>
                    <div className="w-1/3 bg-gray-800 p-4 rounded-md">Rome</div>
                </div>
            </div>
        </div>
    );
};

export default Div;