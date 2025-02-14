'use client';

import React from "react";
import Link from "next/link";
import Pagination from '@/Components/Pagination';

const Media = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-white text-black rounded-2xl shadow-md">
        <div className="heading mb-6">
          <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Multimedia</h1>
        </div>
    
        <Pagination />

        {/* Introduction */}
        <div className="bg-white p-5 rounded-lg shadow-md mb-6 border border-gray-200">
          <p className="mb-4 font-semibold">Multimedia on the web includes sound, music, videos, movies, and animations.</p>

          <h2 className="text-2xl font-bold text-blue-600 mb-2">What is Multimedia?</h2>
          <p className="mb-4">Multimedia comes in many different formats. It can be almost anything you can hear or see, like images, music, sound, videos, records, films, animations, and more.</p>

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
              <tr>
                <td className="border border-gray-300 p-2">MP3</td>
                <td className="border border-gray-300 p-2">.mp3</td>
                <td className="border border-gray-300 p-2">Most popular format for music players.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">WAV</td>
                <td className="border border-gray-300 p-2">.wav</td>
                <td className="border border-gray-300 p-2">High-quality audio format, supported by HTML.</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-blue-600 mb-2">Common Audio Formats</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>MP3:</strong> Best format for compressed recorded music.</li>
            <li><strong>WAV:</strong> High-quality format, supported by HTML.</li>
            <li><strong>AAC:</strong> Default format for Apple iTunes.</li>
            <li><strong>Ogg:</strong> Open-source format, supported by HTML.</li>
          </ul>
        </div>
    </div>
  );
};

export default Media;
