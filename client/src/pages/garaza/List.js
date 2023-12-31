import React from 'react';
import {Link} from 'react-router-dom'

export default function List ({ id, model, gorivo, transmisija, pogon, opis }) {
  return (
    <div className="flex flex-inline bg-gray-200 shadow-md p-4 mb-4 rounded-md">
    <div className="bg-gray-200 shadow-md p-4 mb-4 rounded-md mx-auto w-full">
      <h2 className="text-xl font-bold mb-2" style={{wordWrap: "break-word"}}>{model}</h2>
      <h3 className="text-xl font-bold mb-2" style={{wordWrap: "break-word"}}>Gorivo: {gorivo}  </h3>      
      <h3 className="text-xl font-bold mb-2" style={{wordWrap: "break-word"}}>Transmisija: {transmisija}</h3>      
      <h3 className="text-xl font-bold mb-2" style={{wordWrap: "break-word"}}>Pogon: {pogon}</h3>
      <h3 className="text-xl font-bold mb-2" style={{wordWrap: "break-word"}}>Opis automobila:</h3>
      <p className="mt-2">{opis}</p>
    </div>
    <div className='flex justify-end items-center m-2'>
        <Link to={`/edit-automobil/${id}`}  className='bg-green-200 rounded-md p-4'>
          Uredi
        </Link>
      </div>
    </div>
    
    
  );
};

