import React from 'react'
import Pagination from '@/Components/Pagination'

const Styles = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Styles</h1>
        </div>
    
        <Pagination />
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>The HTML Style Attribute</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The HTML style attribute is used to add styles to an element, such as color, font, size, and more.</li>   
                </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Background Color</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The CSS background-color property defines the background color for an HTML element.</li>
                </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Text Color</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The CSS color property defines the text color for an HTML element.</li>
                </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Fonts</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The CSS font-family property defines the font to be used for an HTML element.</li>
                </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Text Size</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The CSS font-size property defines the text size for an HTML element.</li>
                </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Text Alignment</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The CSS text-align property defines the horizontal text alignment for an HTML element.</li>
                </ul>
            </div>
        </div>
    )
}

export default Styles;
