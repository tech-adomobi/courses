'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Classes = () => {
    return (
        <div className="mx-auto mt-8 max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Classes</h1>
            </div>
            <Pagination />

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 p-1 rounded">class</code> attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class.
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">The Syntax For Class</h2>
                <p className="text-gray-700">To create a class, write a period (.) character, followed by a class name. Then, define the CSS properties within curly braces {}.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Multiple Classes</h2>
                <p className="text-gray-700">HTML elements can belong to more than one class. To define multiple classes, separate the class names with a space, e.g. <code className="bg-gray-200 p-1 rounded">&lt;div class="city main"&gt;</code>. The element will be styled according to all the classes specified.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Different Elements Can Share Same Class</h2>
                <p className="text-gray-700">Different HTML elements can point to the same class name. In the following example, both <code className="bg-gray-200 p-1 rounded">&lt;h2&gt;</code> and <code className="bg-gray-200 p-1 rounded">&lt;p&gt;</code> point to the "city" class and will share the same style.</p>
            </div>
        </div>
    );
};

export default Classes;

