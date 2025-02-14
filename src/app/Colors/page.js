import React from 'react'
import Pagination from '@/Components/Pagination'

const Colors = () => {
    return (
        <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Colors</h1>
        </div>
    
        <Pagination />

            {/* Color Names Section */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Color Names</h2>
                <p className="text-gray-600">
                    HTML colors can be specified using predefined names:
                </p>
                <div className="grid grid-cols-4 gap-3 mt-3">
                    {["tomato", "orange", "dodgerblue", "mediumseagreen", "gray", "slateblue", "violet", "lightgray"].map((color) => (
                        <div key={color} className={`p-3 text-white text-center rounded`} style={{ backgroundColor: color }}>
                            {color}
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Color Section */}
            <div className="bg-white p-5 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Background Color</h2>
                <h1 className="bg-blue-500 text-white p-3 rounded">Hello World</h1>
                <p className="bg-red-500 text-white p-3 mt-3 rounded">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
                </p>
            </div>

            {/* Text Color Section */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Text Color</h2>
                <h1 className="text-red-500">Hello World</h1>
                <p className="text-blue-500">Lorem ipsum dolor sit amet...</p>
                <p className="text-green-500">Ut wisi enim ad minim veniam...</p>
            </div>

            {/* Border Color Section */}
            <div className="bg-white p-5 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Border Color</h2>
                <h1 className="border-2 border-red-500 p-3 rounded">Hello World</h1>
                <h1 className="border-2 border-blue-500 p-3 mt-3 rounded">Hello World</h1>
                <h1 className="border-2 border-violet-500 p-3 mt-3 rounded">Hello World</h1>
            </div>

            {/* Color Values Section */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Color Values</h2>
                <p className="text-gray-600">Colors can be specified using RGB, HEX, HSL, RGBA, and HSLA values:</p>

                <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="p-3 text-white text-center rounded" style={{ backgroundColor: "rgb(255, 99, 71)" }}>
                        rgb(255, 99, 71)
                    </div>
                    <div className="p-3 text-white text-center rounded" style={{ backgroundColor: "#ff6347" }}>
                        #ff6347
                    </div>
                    <div className="p-3 text-white text-center rounded" style={{ backgroundColor: "hsl(9, 100%, 64%)" }}>
                        hsl(9, 100%, 64%)
                    </div>
                    <div className="p-3 text-white text-center rounded" style={{ backgroundColor: "rgba(255, 99, 71, 0.5)" }}>
                        rgba(255, 99, 71, 0.5)
                    </div>
                    <div className="p-3 text-white text-center rounded" style={{ backgroundColor: "hsla(9, 100%, 64%, 0.5)" }}>
                        hsla(9, 100%, 64%, 0.5)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Colors
