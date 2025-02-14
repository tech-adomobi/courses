'use client';
import Link from 'next/link';
import Pagination from '@/Components/Pagination';
// import HTMLCompiler from '@/Components/HtmlCompiler';

const HomePage = () => {
  return (
    <div className='content-html mt-8 max-w-4xl mx-auto p-6 space-y-8 bg-gray-50 rounded-lg shadow-lg'>
      <div className='heading'>
        <h1 className='text-3xl font-bold text-orange-600'>HTML Tutorial</h1>
      </div>
      <Pagination />
      {/* Added mt-6 for extra spacing below the pagination */}
      <div className='definition text-gray-700 space-y-4 mt-6'>
        <p className='text-lg'>HTML is the standard markup language for Web pages.</p>
        <p className='text-lg'>With HTML you can create your own Website.</p>
        <p className='text-lg'>HTML is easy to learn - You will enjoy it!</p>
        <button className='button bg-orange-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-200'>
          Start Learning HTML Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;

