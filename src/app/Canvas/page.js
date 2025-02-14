'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Canvas = () => {
    return (
        <div className="mx-auto mt-8 max-w-4xl p-6 bg-white rounded-2xl shadow-md text-black">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Canvas Graphics</h1>
            </div>
            <Pagination />

            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-300">
                <h2 className="text-2xl font-semibold mb-4">HTML &lt;canvas&gt; Element – Basics for Beginners</h2>
                <p className="mb-4">The HTML &lt;canvas&gt; element is used to draw graphics on a web page using JavaScript. It provides a blank slate where you can create drawings, charts, animations, and even games.</p>
                
                <h3 className="text-xl font-semibold mt-4">1. Basic Structure of &lt;canvas&gt;</h3>
                <p className="mb-4">The &lt;canvas&gt; element itself is just a container; it requires JavaScript to actually draw anything.</p>
                
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
                    <pre className="overflow-auto text-sm">
                        {`<canvas id="myCanvas" width="400" height="200" style="border:1px solid black;"></canvas>
<script>
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 200, 100);
</script>`}
                    </pre>
                </div>
                
                <h3 className="text-xl font-semibold mt-4">2. Common Canvas Methods</h3>
                <ul className="list-disc list-inside mb-4">
                    <li><code>fillRect(x, y, width, height)</code> - Draws a filled rectangle.</li>
                    <li><code>strokeRect(x, y, width, height)</code> - Draws a rectangle outline.</li>
                    <li><code>clearRect(x, y, width, height)</code> - Clears a part of the canvas.</li>
                    <li><code>beginPath()</code> - Starts a new drawing path.</li>
                    <li><code>moveTo(x, y)</code> - Moves the pen to a specific location.</li>
                    <li><code>lineTo(x, y)</code> - Draws a line from the current position.</li>
                    <li><code>stroke()</code> - Renders the outline of a shape.</li>
                    <li><code>arc(x, y, radius, startAngle, endAngle)</code> - Draws an arc (used for circles).</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-4">3. Drawing a Line</h3>
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
                    <pre className="overflow-auto text-sm">
                        {`ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 150);
ctx.stroke();`}
                    </pre>
                </div>
                
                <h3 className="text-xl font-semibold mt-4">4. Drawing a Circle</h3>
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    <pre className="overflow-auto text-sm">
                        {`ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.stroke();`}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Canvas;

