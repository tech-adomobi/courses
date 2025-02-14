import React from 'react'
import Pagination from '@/Components/Pagination'

const Paragraph = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Formatting</h1>
        </div>
    
        <Pagination />
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML Formatting Elements</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li>HTML contains several elements for defining text with a special meaning.</li>
                <li className="mb-2">This text is <b className="font-bold">bold</b></li>
                <li className="mb-2">This text is <i className="italic">italic</i></li>
                <li className="mb-2">This is <sub className="text-sm align-sub">subscript</sub> and <sup className="text-sm align-super">superscript</sup></li>
                </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>HTML Formatting Elements</h2>
                <ul className="list-disc list-inside text-gray-700">
        <li><b className="font-bold">Bold text</b></li>
        <li><strong className="font-bold text-red-500">Important text</strong></li>
        <li><i className="italic">Italic text</i></li>
        <li><em className="italic text-blue-500">Emphasized text</em></li>
        <li><mark className="bg-yellow-300 px-1">Marked text</mark></li>
        <li><small className="text-sm">Smaller text</small></li>
        <li><del className="line-through">Deleted text</del></li>
        <li><ins className="underline">Inserted text</ins></li>
        <li><sub className="text-sm align-sub">Subscript text</sub></li>
        <li><sup className="text-sm align-super">Superscript text</sup></li>
    </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'> 
                <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Bold and Strong Elements</h2>
                <ul className='list-disc list-inside text-gray-600'>
                    <li className="mb-2"><b className="font-bold">This text is bold</b></li>
                    <li className="mb-2"><strong className="font-bold text-red-500">This text is important!</strong></li>
                </ul>
            </div>
         
        </div>
    )
}

export default Paragraph;

