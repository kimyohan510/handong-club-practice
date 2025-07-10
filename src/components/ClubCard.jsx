import React from 'react';

function ClubCard({ club }) {
  return (
    <a href={club.link} className="block border rounded p-4 hover:shadow">
      <div className="font-bold mb-2">{club.name}</div>
      <p className="text-sm text-gray-600">{club.description}</p>
    </a>
  );
}

export default ClubCard;
