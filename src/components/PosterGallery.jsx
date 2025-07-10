import React from 'react';

const dummyPosters = [
  '/posters/poster1.jpg',
  '/posters/poster2.jpg',
  '/posters/poster3.jpg',
  '/posters/poster4.jpg',
];

function PosterGallery() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">포스터</h2>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {dummyPosters.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`poster-${idx}`}
            className="rounded shadow object-cover w-full h-40"
          />
        ))}
      </div>
    </div>
  );
}

export default PosterGallery;
