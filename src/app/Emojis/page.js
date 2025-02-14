'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Emojis = () => {
    return (
        <div className="content-html  mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">Using Emojis in HTML</h1>
        </div>
    
        <Pagination />
            
            <div className='bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200'>
                <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Introduction to HTML Emojis</h2>
                <p className='text-gray-700 mb-4'>Emojis are a fun and expressive way to enhance web content. In HTML, emojis can be added using Unicode character codes or emoji entities.</p>
                
                <h3 className='text-xl font-semibold text-gray-800 mb-3'>1️⃣ What are HTML Emojis?</h3>
                <p className='text-gray-700 mb-4'>HTML emojis are small digital icons that represent emotions, objects, and symbols. They help make web pages more engaging and visually appealing.</p>
                <p className='text-gray-800 text-lg font-medium'>🔹 Example: 😊 👍 ❤️ 🚀</p>
                
                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>2️⃣ How to Add Emojis in HTML?</h3>
                <h4 className='text-lg font-semibold text-gray-700'>Method 1: Using Unicode</h4>
                <p className='text-gray-700 mb-2'>Each emoji has a unique Unicode value, which can be used in HTML by adding <code className='bg-gray-200 p-1 rounded'>&#x</code> followed by the Unicode.</p>
                <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-4'>
                    <code className='text-blue-600'>&lt;p&gt;Smile Emoji: &#x1F604;&lt;/p&gt;</code>
                </pre>
                <p className='text-gray-800'>🔹 Output: 😄</p>
                
                <h4 className='text-lg font-semibold text-gray-700 mt-4'>Method 2: Copy-Paste Directly</h4>
                <p className='text-gray-700 mb-2'>You can also directly copy and paste emojis into your HTML file.</p>
                <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-4'>
                    <code className='text-blue-600'>&lt;p&gt;Welcome to our website! 😊🚀&lt;/p&gt;</code>
                </pre>
                <p className='text-gray-800'>🔹 Output: Welcome to our website! 😊🚀</p>
                
                <h4 className='text-lg font-semibold text-gray-700 mt-4'>Method 3: Using Emoji Entities</h4>
                <p className='text-gray-700 mb-2'>Some emojis have special HTML entities.</p>
                <pre className='bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-4'>
                    <code className='text-blue-600'>&lt;p&gt;Heart Symbol: &amp;hearts;&lt;/p&gt;</code>
                </pre>
                <p className='text-gray-800'>🔹 Output: ♥</p>
                
                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>3️⃣ Why Use Emojis in HTML?</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2'>
                    <li>✔ Improves User Engagement 🧑‍💻</li>
                    <li>✔ Expresses Emotions Easily 😊</li>
                    <li>✔ Enhances Readability 📖</li>
                </ul>
                
                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>4️⃣ Where to Use Emojis?</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2'>
                    <li>✅ Social Media Posts 📱</li>
                    <li>✅ Blog Titles 📝</li>
                    <li>✅ User Feedback Forms ⭐</li>
                    <li>✅ Error Messages ⚠</li>
                </ul>
                
                <h3 className='text-xl font-semibold text-gray-800 mt-6 mb-3'>Conclusion</h3>
                <p className='text-gray-700'>Emojis make web pages more interactive and visually appealing. You can use Unicode, copy-paste, or HTML entities to add them to your website. 🎉</p>
            </div>
        </div>
    );
}

export default Emojis;

