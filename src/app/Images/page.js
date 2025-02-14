import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from '@/Components/Pagination'


const Images = () => {
  return (
    <div className="content-html  mt-8 mx-auto max-w-4xl p-6 bg-gray-100 rounded-2xl shadow-md">
    <div className="heading mb-6">
      <h1 className="text-3xl font-bold text-orange-600  p-2 rounded">HTML Images</h1>
    </div>

    <Pagination />

      {/* Introduction */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">What are Images?</h2>
        <p className="text-gray-600">
          Images enhance the visual appeal of a website. They can be **static, animated, or even clickable**.
        </p>
      </div>

      {/* Basic Image Example */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Basic HTML Image</h2>
        <p className="text-gray-600">An image with <code>src</code> and <code>alt</code> attributes:</p>
        <div className="mt-3 flex justify-center">
          <Image src="/images/sample1.jpg" alt="Sample Image" width={300} height={200} className="rounded-lg shadow" />
        </div>
      </div>

      {/* Image with Absolute URL */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Image from an External URL</h2>
        <p className="text-gray-600">Use an absolute URL to load images from another website:</p>
        <div className="mt-3 flex justify-center">
          <Image
            src="/images/sample2.jpg"
            alt="W3Schools Logo"
            width={200}
            height={100}
            className="rounded-lg shadow"
          />
        </div>
      </div>

      {/* Image with Width & Height */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Set Image Width & Height</h2>
        <p className="text-gray-600">Define image size using the <code>width</code> and <code>height</code> attributes:</p>
        <div className="mt-3 flex justify-center">
          <Image src="/images/sample3.jpg" alt="Resized Image" width={150} height={150} className="rounded-lg" />
        </div>
      </div>

      {/* Responsive Image */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Responsive Images</h2>
        <p className="text-gray-600">Make images responsive with Tailwind's <code>w-full</code>:</p>
        <div className="mt-3">
          <Image src="/images/sample1.jpg" alt="Responsive Image" width={500} height={300} className="w-full rounded-lg" />
        </div>
      </div>

      {/* Image as a Link */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Image as a Link</h2>
        <p className="text-gray-600">Click the image to go to the homepage:</p>
        <div className="mt-3 flex justify-center">
          <Link href="/">
            <Image src="/images/sample1.jpg" alt="Clickable Image" width={200} height={150} className="rounded-lg cursor-pointer hover:opacity-80" />
          </Link>
        </div>
      </div>

      {/* Animated Image */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Animated Image (GIF)</h2>
        <p className="text-gray-600">Use GIF images to add animation:</p>
        <div className="mt-3 flex justify-center">
          <Image src="/images/good-morning.gif" alt="Animated GIF" width={100} height={100} className="rounded-lg" />
        </div>
      </div>

     

      {/* Final Summary */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Summary</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Use <code>{'<img>'}</code> or Next.js <code>{'<Image>'}</code> for optimized images.</li>
          <li>Set image paths with <code>src</code> (local or absolute URLs).</li>
          <li>Use <code>alt</code> for accessibility.</li>
          <li>Use Tailwind classes for styling and responsiveness.</li>
          <li>Use images inside <code>{'<a>'}</code> for clickable links.</li>
          <li>Use GIFs for animations.</li>
          <li>Float images using <code>float-left</code> and <code>float-right</code>.</li>
        </ul>
      </div>
    </div>
  );
};

export default Images;
