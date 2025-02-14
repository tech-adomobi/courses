import React from 'react'
import Pagination from '@/Components/Pagination'

const Pagetitle = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Page Title</h1>
        </div>
    
        <Pagination />
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>The Title Element</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>Every web page should have a page title to describe the meaning of the page.</li>
                    <li>The <code>title</code> element adds a title to your page:</li>
                </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>What is a Good Title?</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The title should describe the content and the meaning of the page.</li>
                    <li>The page title is very important for search engine optimization (SEO). </li> <li>The text is used by search engine algorithms to decide the order when listing pages in search results.</li>
                    <ul className='list-disc list-inside text-gray-600'>
                        <li>defines a title in the browser toolbar</li>
                        <li>provides a title for the page when it is added to favorites</li>
                          <li>displays a title for the page in search engine-results</li>
                    </ul>
                    <li>With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.</li>
                    <li>The browser will automatically remove any extra spaces and lines when the page is displayed.</li>
                </ul>
            </div>
            
          
        </div>
    )
}

export default Pagetitle;
