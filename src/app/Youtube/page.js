'use client';

import React from 'react';
import Pagination from '@/Components/Pagination';

const Youtube = () => {
  return (
    <div className="content-html mt-8 mx-auto max-w-4xl p-6 bg-white text-gray-900 rounded-2xl shadow-md">
      <div className="heading mb-6">
        <h1 className="text-3xl font-bold text-orange-600 p-2 rounded">HTML YouTube Videos</h1>
      </div>

      <Pagination />
      
      <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-md border border-gray-300">
        <p className="mb-4">The easiest way to play videos in HTML is to use YouTube.</p>

        <h2 className="text-xl font-semibold mb-2">Struggling with Video Formats?</h2>
        <p className="mb-4">Converting videos to different formats can be difficult and time-consuming. An easier solution is to let YouTube play the videos in your web page.</p>

        <h2 className="text-xl font-semibold mb-2">YouTube Video ID</h2>
        <p className="mb-4">YouTube will display an ID (like <code className="bg-gray-200 p-1 rounded">tgbNymZ7vqY</code>) when you save (or play) a video. You can use this ID and refer to your video in the HTML code.</p>

        <h2 className="text-xl font-semibold mb-2">Playing a YouTube Video in HTML</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Upload the video to YouTube</li>
          <li>Take a note of the video ID</li>
          <li>Define an <code className="bg-gray-200 p-1 rounded">&lt;iframe&gt;</code> element in your web page</li>
          <li>Set the <code className="bg-gray-200 p-1 rounded">src</code> attribute to the video URL</li>
          <li>Specify width and height attributes for the player</li>
          <li>Add any other parameters to the URL</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Example</h2>
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <code>&lt;iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"&gt;&lt;/iframe&gt;</code>
        </div>

        <h2 className="text-xl font-semibold mb-2">YouTube Autoplay + Mute</h2>
        <p className="mb-4">You can let your video start playing automatically by adding <code className="bg-gray-200 p-1 rounded">autoplay=1</code>. However, muted autoplay is always allowed.</p>
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <code>&lt;iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"&gt;&lt;/iframe&gt;</code>
        </div>

        <h2 className="text-xl font-semibold mb-2">YouTube Playlist</h2>
        <p className="mb-4">A comma-separated list of videos to play in sequence.</p>

        <h2 className="text-xl font-semibold mb-2">YouTube Loop</h2>
        <p className="mb-4">Add <code className="bg-gray-200 p-1 rounded">playlist=videoID</code> and <code className="bg-gray-200 p-1 rounded">loop=1</code> to loop the video.</p>
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <code>&lt;iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"&gt;&lt;/iframe&gt;</code>
        </div>

        <h2 className="text-xl font-semibold mb-2">YouTube Controls</h2>
        <p className="mb-4">Use <code className="bg-gray-200 p-1 rounded">controls=0</code> to hide video controls.</p>
        <div className="bg-gray-200 p-4 rounded-md text-sm font-mono mb-4">
          <code>&lt;iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"&gt;&lt;/iframe&gt;</code>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
