import React, { useState } from 'react';

const GalleryApp = () => {
  // Current page track karnay ka state
  const [page, setPage] = useState(1);

  // Har page ke liye random images generate ho rahi hain
  // Picsum ka link ab page number ke sath change hoga
  const images = [
    { id: 1, url: `https://picsum.photos/id/${page * 10 + 1}/600/400`, alt: 'Image 1' },
    { id: 2, url: `https://picsum.photos/id/${page * 10 + 2}/600/400`, alt: 'Image 2' },
    { id: 3, url: `https://picsum.photos/id/${page * 10 + 3}/600/400`, alt: 'Image 3' },
    { id: 4, url: `https://picsum.photos/id/${page * 10 + 4}/600/400`, alt: 'Image 4' },
    { id: 5, url: `https://picsum.photos/id/${page * 10 + 5}/600/400`, alt: 'Image 5' },
    { id: 6, url: `https://picsum.photos/id/${page * 10 + 6}/600/400`, alt: 'Image 6' },
  ];

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto bg-white rounded-md shadow-sm border-t-[6px] border-green-700">
        
        {/* Header */}
        <div className="pt-8 px-8 pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-800">Gallery App</h1>
            <p className="text-gray-500 mt-2 text-xl">Explore Page {page}</p>
          </div>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            Page {page}
          </span>
        </div>

        <div className="px-8"><hr className="border-gray-200" /></div>

        {/* Grid */}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div key={img.id} className="overflow-hidden rounded-lg bg-gray-200 aspect-video shadow-md group">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="p-8 border-t border-gray-100 flex items-center justify-center gap-4">
          <button 
            onClick={handlePrev}
            disabled={page === 1}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              page === 1 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 active:scale-95'
            }`}
          >
            Previous
          </button>

          <div className="flex items-center gap-2">
            <span className="w-10 h-10 flex items-center justify-center bg-green-700 text-white rounded-md font-bold">
              {page}
            </span>
          </div>

          <button 
            onClick={handleNext}
            className="px-6 py-2 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition-all active:scale-95 shadow-sm"
          >
            Next Page
          </button>
        </div>

      </div>
    </div>
  );
};

export default GalleryApp;