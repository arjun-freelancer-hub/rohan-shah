import React from 'react';

const AboutHero = ({ image, title, description }) => {
  return (
    <div className="mb-16">
      <div className="aspect-w-16 aspect-h-9 mb-8">
        <img
          src={image}
          alt={title}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
      <p className="text-xl text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AboutHero; 