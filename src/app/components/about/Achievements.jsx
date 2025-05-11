import React from 'react';

const Achievements = ({ achievements }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements; 