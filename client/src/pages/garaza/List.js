import React from 'react';

export default function List ({ model, gorivo, opis }) {
  return (
    <div className="bg-gray-200 shadow-md p-4 mb-4 rounded-md mx-auto">
      <h2 className="text-xl font-bold mb-2" style={{wordWrap: "break-word"}}>{model}</h2>
      <p className="text-gray-600">{gorivo}</p>
      <p className="mt-2">{opis}</p>
    </div>
  );
};

