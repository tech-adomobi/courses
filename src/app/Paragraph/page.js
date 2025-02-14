import React from 'react'
import Pagination from '@/Components/Pagination'

const Paragraph = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Paragraph</h1>
        </div>
    
        <Pagination />
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML Paragraphs</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The HTML <code>p</code> element defines a paragraph.</li>
                    <li>A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.</li>
                </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML Display</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>You cannot be sure how HTML will be displayed.</li>
                    <li>Large or small screens, and resized windows will create different results.</li>
                    <li>With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.</li>
                    <li>The browser will automatically remove any extra spaces and lines when the page is displayed.</li>
                </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML Horizontal Rules</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The <code>hr</code> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.</li>
                    <li>The <code>hr</code> element is used to separate content (or define a change) in an HTML page.</li>
                </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML Line Breaks</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>The HTML <code>br</code> element defines a line break.</li>
                    <li>Use <code>br</code> if you want a line break (a new line) without starting a new paragraph.</li>
                </ul>
            </div>
        </div>
    )
}

export default Paragraph;

