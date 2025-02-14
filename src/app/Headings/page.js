import React from 'react'
import Pagination from '@/Components/Pagination'

const Headings = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Headings</h1>
        </div>
    
        <Pagination />
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML Headings</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>HTML headings are titles or subtitles that you want to display on a webpage.</li>
                    <li>HTML headings are defined with the (h1) to (h6) tags.</li>
                    <li>(h1) defines the most important heading. (h6) defines the least important heading.</li>
                </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Headings Are Important</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>Search engines use the headings to index the structure and content of your web pages.</li>
                    <li>Users often skim a page by its headings. It is important to use headings to show the document structure.</li>
                    <li>(h1) headings should be used for main headings, followed by h2 headings, then the less important h3, and so on.</li>
                </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Bigger Headings</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>Each HTML heading has a default size. However, you can specify the size for any heading with the style attribute, using the CSS font-size property.</li>
                </ul>
            </div>
        </div>
    )
}

export default Headings;

