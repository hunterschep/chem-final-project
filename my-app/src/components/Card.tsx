import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {imageSrc && (
        <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card; 