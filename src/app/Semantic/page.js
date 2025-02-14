'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Semantic = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-white text-gray-900 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Semantic Elements</h1>
        </div>
    
        <Pagination />

            <div className="space-y-4">
                <p className="text-lg">Semantic elements = elements with a meaning.</p>

                <h2 className="text-2xl font-semibold text-gray-800">What are Semantic Elements?</h2>
                <p>A semantic element clearly describes its meaning to both the browser and the developer.</p>
                
                <h3 className="text-xl font-semibold text-gray-800">Examples:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Non-semantic elements: <code className="bg-gray-300 p-1 rounded">&lt;div&gt;</code> and <code className="bg-gray-300 p-1 rounded">&lt;span&gt;</code></li>
                    <li>Semantic elements: <code className="bg-gray-300 p-1 rounded">&lt;img&gt;</code>, <code className="bg-gray-300 p-1 rounded">&lt;table&gt;</code>, <code className="bg-gray-300 p-1 rounded">&lt;article&gt;</code></li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800">Semantic Elements in HTML</h2>
                <p>Common semantic elements:</p>
                <div className="grid grid-cols-2 gap-2 bg-gray-200 p-4 rounded">
                    <span className="bg-gray-400 p-1 rounded">&lt;article&gt;</span>
                    <span className="bg-gray-400 p-1 rounded">&lt;aside&gt;</span>
                    <span className="bg-gray-400 p-1 rounded">&lt;details&gt;</span>
                    <span className="bg-gray-400 p-1 rounded">&lt;figcaption&gt;</span>
                    <span className="bg-gray-400 p-1 rounded">&lt;figure&gt;</span>
                    <span className="bg-gray-400 p-1 rounded">&lt;footer&gt;</span>
                    <span className="bg-gray-400 p-1 rounded">&lt;header&gt;</span>
                    <span className="bg-gray-400 p-1 rounded">&lt;main&gt;</span>
                    <span className="bg-gray-400 p-1 rounded">&lt;mark&gt;</span>
                    <span className="bg-gray-400 p-1 rounded">&lt;nav&gt;</span>
                    <span className="bg-gray-400 p-1 rounded">&lt;section&gt;</span>
                    <span className="bg-gray-400 p-1 rounded">&lt;summary&gt;</span>
                    <span className="bg-gray-400 p-1 rounded">&lt;time&gt;</span>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800">Key HTML Semantic Elements</h2>
                <div className="space-y-4">
                    <div className="bg-gray-200 p-4 rounded">
                        <h3 className="text-xl font-semibold">&lt;section&gt; Element</h3>
                        <p>Defines a section in a document, useful for grouping content thematically.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded">
                        <h3 className="text-xl font-semibold">&lt;article&gt; Element</h3>
                        <p>Specifies independent, self-contained content like blog posts or news articles.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded">
                        <h3 className="text-xl font-semibold">&lt;header&gt; Element</h3>
                        <p>Represents introductory content or navigation links.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded">
                        <h3 className="text-xl font-semibold">&lt;footer&gt; Element</h3>
                        <p>Defines a footer for a document or section, including metadata like copyrights.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded">
                        <h3 className="text-xl font-semibold">&lt;nav&gt; Element</h3>
                        <p>Defines major navigation links.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded">
                        <h3 className="text-xl font-semibold">&lt;aside&gt; Element</h3>
                        <p>Defines content aside from the main content, like a sidebar.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded">
                        <h3 className="text-xl font-semibold">&lt;figure&gt; and &lt;figcaption&gt; Elements</h3>
                        <p>Used for self-contained content like images and diagrams with captions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Semantic;

