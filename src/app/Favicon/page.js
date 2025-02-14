import React from 'react'
import Pagination from '@/Components/Pagination'

const Favicon= () => {
    return (
        <div className="content-html  mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Favicon</h1>
        </div>
    
        <Pagination />
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>How To Add a Favicon in HTML</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>A favicon is a small image displayed next to the page title in the browser tab.</li>
                    <li>You can use any image you like as your favicon. You can also create your own favicon on sites like https://www.favicon.cc.</li>
                    <li>A favicon image is displayed to the left of the page title in the browser tab, like this:</li>
                    <li>To add a favicon to your website, either save your favicon image to the root directory of your webserver, or create a folder in the root directory called images, and save your favicon image in this folder. A common name for a favicon image is "favicon.ico".</li>
                    <li>Next, add a <code>link</code> element to your "index.html" file, after the <code>link</code> element, like this:</li>
                </ul>
            </div>
           
       
          
        </div>
    )
}

export default Favicon;