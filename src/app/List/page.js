'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const List = () => {
    return (
        <div className="mx-auto max-w-4xl mt-8 p-6 bg-gray-100 rounded-2xl shadow-md">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Lists</h1>
            </div>
            <Pagination />
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Overview</h2>
                <p className='text-gray-600'>HTML lists allow web developers to group a set of related items in lists.</p>
            </div>
            
            <div className='bg-gray-500 p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Unordered HTML List</h2>
                <p className='text-black mb-4'>An unordered list starts with the <code>&lt;ul&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag.</p>
                <ul className='list-disc list-inside bg-black p-4 rounded-md'>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
            
            <div className='bg-gray-500 p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Ordered HTML List</h2>
                <p className='text-black mb-4'>An ordered list starts with the <code>&lt;ol&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag.</p>
                <ol className='list-decimal list-inside bg-black p-4 rounded-md'>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ol>
            </div>
        </div>
    );
};

export default List;
