'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Symbols = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Symbols</h1>
        </div>
    
        <Pagination />

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <p className="text-gray-700 mb-4">
                    Symbols or letters that are not present on your keyboard can be added to HTML using entities.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-3">HTML Symbol Entities</h2>
                <p className="text-gray-700 mb-4">
                    Many mathematical, technical, and currency symbols are not present on a normal keyboard.
                </p>

                <p className="text-gray-700 mb-4">
                    To add such symbols to an HTML page, you can use the entity name or the entity number (a decimal or a hexadecimal reference) for the symbol:
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">Example</h3>
                <div className="bg-gray-100 p-4 rounded-md shadow-inner border border-gray-300 text-gray-800">
                    <p className="mb-2">&lt;p&gt;I will display &amp;euro;&lt;/p&gt;</p>
                    <p className="mb-2">&lt;p&gt;I will display &amp;#8364;&lt;/p&gt;</p>
                    <p>&lt;p&gt;I will display &amp;#x20AC;&lt;/p&gt;</p>
                </div>

                <p className="text-gray-700 mt-4">
                    Will display as:
                </p>
                <div className="bg-gray-200 p-4 rounded-md shadow-inner text-lg font-semibold text-gray-900">
                    <p>I will display €</p>
                    <p>I will display €</p>
                    <p>I will display €</p>
                </div>
            </div>
        </div>
    );
};

export default Symbols;
