import React from 'react';
import ClubCard from './ClubCard';

function ClubList({ clubs }) {
  if (!clubs || clubs.length === 0) return null;
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {clubs.map((club) => (
        <ClubCard key={club.name} club={club} />
      ))}
    </div>
  );
}

export default ClubList;
