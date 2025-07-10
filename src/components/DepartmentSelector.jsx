import React from 'react';

function DepartmentSelector({ departments, selected, onSelect }) {
  return (
    <div className="flex space-x-2 overflow-x-auto">
      {departments.map((dept) => (
        <button
          key={dept}
          onClick={() => onSelect(dept)}
          className={`px-3 py-1 rounded border whitespace-nowrap ${
            selected === dept ? 'bg-blue-500 text-white' : 'bg-white'
          }`}
        >
          {dept}
        </button>
      ))}
    </div>
  );
}

export default DepartmentSelector;
