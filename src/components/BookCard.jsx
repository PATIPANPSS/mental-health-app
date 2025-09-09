import React from "react";

const BookCard = ({ title, bookLink, imageUrl }) => {
  return (
    <a
      href={bookLink}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 rounded-xl shadow-md border border-gray-200 bg-white transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg flex flex-col justify-between cursor-pointer"
    >
      <div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-min h-min object-cover rounded-lg mb-4 shadow-sm"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x200/cccccc/333333?text=No+Image'; }}
          />
        )}
        <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>
      </div>
    </a>
  );
};

export default BookCard;
