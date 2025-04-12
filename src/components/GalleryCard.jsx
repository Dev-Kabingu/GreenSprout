
import React from 'react';

const GalleryCard = ({ imgSrc, altText }) => {
  return (
    <div className="bg-gray-50 p-2 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img src={imgSrc} alt={altText} className="w-full h-64 object-cover" />
    </div>
  );
};

export default GalleryCard;
