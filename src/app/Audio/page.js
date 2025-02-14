'use client';

import React from "react";
import Pagination from '@/Components/Pagination';

const Audio = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-gray-100 text-gray-900 rounded-2xl shadow-md">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML Audio</h1>
      </div>

      <Pagination />

      {/* Introduction */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6 border border-gray-200">
        <p className="mb-4">The HTML <code>&lt;audio&gt;</code> element is used to play an audio file on a web page.</p>

        <h2 className="text-xl font-semibold mb-2">The HTML <code>&lt;audio&gt;</code> Element</h2>
        <p className="mb-4">To play an audio file in HTML, use the <code>&lt;audio&gt;</code> element:</p>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 mb-4">
          <audio controls>
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <h2 className="text-xl font-semibold mb-2">HTML Audio - How It Works</h2>
        <p className="mb-4">The <code>controls</code> attribute adds audio controls, like play, pause, and volume.</p>

        <h2 className="text-xl font-semibold mb-2">HTML <code>&lt;audio&gt;</code> Autoplay</h2>
        <p className="mb-4">To start an audio file automatically, use the <code>autoplay</code> attribute:</p>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 mb-4">
          <audio controls autoPlay muted>
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <h2 className="text-xl font-semibold mb-2">HTML Audio Formats</h2>
        <p className="mb-4">There are three supported audio formats: MP3, WAV, and OGG.</p>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Browser</th>
              <th className="border border-gray-300 p-2">MP3</th>
              <th className="border border-gray-300 p-2">WAV</th>
              <th className="border border-gray-300 p-2">OGG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Edge/IE</td>
              <td className="border border-gray-300 p-2">YES</td>
              <td className="border border-gray-300 p-2">YES*</td>
              <td className="border border-gray-300 p-2">YES*</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Chrome</td>
              <td className="border border-gray-300 p-2">YES</td>
              <td className="border border-gray-300 p-2">YES</td>
              <td className="border border-gray-300 p-2">YES</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-semibold mt-4">HTML Audio Tags</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><code>&lt;audio&gt;</code> - Defines sound content</li>
          <li><code>&lt;source&gt;</code> - Defines multiple media resources</li>
        </ul>
      </div>
    </div>
  );
};

export default Audio;
