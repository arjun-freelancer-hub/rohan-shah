import React from 'react';

const Biography = ({ content }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Biography</h2>
      <div className="text-gray-600 space-y-4">
        {content}
      </div>
    </div>
  );
};

export default Biography; 