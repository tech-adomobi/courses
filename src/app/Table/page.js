'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Table = () => {
    return (
        <div className="mx-auto max-w-4xl mt-8 p-6 bg-gray-100 rounded-2xl shadow-md">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Table</h1>
            </div>
            <Pagination />
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML Tables – A Brief Overview</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>An HTML table is used to display tabular data in rows and columns.</li>
                </ul>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Basic Table Structure</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The <code>&lt;table&gt;</code> element creates a table. A table consists of:</li>
                    <li>Rows <code>&lt;tr&gt;</code> – Table rows</li>
                    <li>Columns <code>&lt;td&gt;</code> – Table data cells</li>
                    <li>Headers <code>&lt;th&gt;</code> – Table header cells</li>
                </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Example: Simple Table</h2>
                <pre className="bg-gray-800 text-white text-sm font-mono p-3 rounded overflow-x-auto">
                    {`<table class="border border-collapse w-full">
    <thead>
        <tr class="bg-gray-200">
            <th class="border p-2">Name</th>
            <th class="border p-2">Age</th>
            <th class="border p-2">City</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border p-2">Alice</td>
            <td class="border p-2">25</td>
            <td class="border p-2">New York</td>
        </tr>
        <tr>
            <td class="border p-2">Bob</td>
            <td class="border p-2">30</td>
            <td class="border p-2">Los Angeles</td>
        </tr>
    </tbody>
</table>`}
                </pre>
            </div>
  
            <div className="bg-gray-400 p-5 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-black mb-3">Output</h2>
                <table className="border border-collapse w-full">
                    <thead>
                        <tr className="bg-black">
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Age</th>
                            <th className="border p-2">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">Alice</td>
                            <td className="border p-2">25</td>
                            <td className="border p-2">New York</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Bob</td>
                            <td className="border p-2">30</td>
                            <td className="border p-2">Los Angeles</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Table Attributes</h2>
                <ul className='list-disc list-inside text-gray-600'>
                <li>border – Adds a border around the table (not recommended in modern HTML; use CSS instead).</li>
                <li>cellpadding – Adds space inside table cells.</li>
                <li>cellspacing – Adds space between table cells.</li>
                </ul>
            </div>

         
        </div>
    );
};

export default Table;

