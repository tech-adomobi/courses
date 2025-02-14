'use client';

import React from "react";
import Link from "next/link";
import Pagination from '@/Components/Pagination';

const Video = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-white text-black rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Video</h1>
        </div>
    
        <Pagination />

        {/* Introduction */}
        <div className="bg-white p-5 rounded-lg shadow-md mb-6 border border-gray-200">
          <p className="mb-4 font-semibold">The HTML<code>video </code>  element is used to show a video on a web page.</p>

          <h2 className="text-2xl font-bold text-blue-600 mb-2">What is Multimedia?</h2>
          <p className="mb-4">Multimedia comes in many different formats. It can be almost anything you can hear or see, like images, music, sound, videos, records, films, animations, and more.</p>

          <h2 className="text-2xl font-bold text-blue-600 mb-2">HTML Video</h2>
          <p className="mb-4">HTML allows you to embed video content using the <code className="text-red-500">&lt;video&gt;</code> element. It supports multiple video formats such as MP4, WebM, and Ogg.</p>

          <h3 className="text-xl font-bold text-blue-500 mb-2">Basic Video Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>`}
          </pre>

          <h3 className="text-xl font-bold text-blue-500 mb-2">Video Attributes</h3>
          <ul className="list-disc list-inside mb-4">
            <li><strong>controls:</strong> Displays play, pause, and volume controls.</li>
            <li><strong>autoplay:</strong> Starts playing the video automatically (not recommended for usability).</li>
            <li><strong>loop:</strong> Repeats the video once it ends.</li>
            <li><strong>muted:</strong> Starts the video with sound turned off.</li>
            <li><strong>poster:</strong> Specifies an image to be shown before the video starts playing.</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-600 mb-2">Multimedia Formats</h2>
          <table className="w-full border-collapse border border-gray-300 text-left mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Format</th>
                <th className="border border-gray-300 p-2">File Extension</th>
                <th className="border border-gray-300 p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">MPEG</td>
                <td className="border border-gray-300 p-2">.mpg, .mpeg</td>
                <td className="border border-gray-300 p-2">First popular video format, not supported anymore in HTML.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">MP4</td>
                <td className="border border-gray-300 p-2">.mp4</td>
                <td className="border border-gray-300 p-2">Most widely supported format for video.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">WebM</td>
                <td className="border border-gray-300 p-2">.webm</td>
                <td className="border border-gray-300 p-2">Optimized for web, supported by all modern browsers.</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Video;

