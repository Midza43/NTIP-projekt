import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function List({ id, model, gorivo, transmisija, pogon, godiste, konjskihsnaga, obrtniMoment, boja, ECU, tuning, tuningStage, opis, onDelete, imageUrl }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="flex flex-inline bg-gray-200 shadow-md p-4 mb-4 rounded-md">
      <div className="bg-gray-200 shadow-md p-4 mb-4 rounded-md mx-auto w-full">
        <div className="flex items-center mb-4">
          <img src={"https://static.vecteezy.com/system/resources/previews/005/576/332/non_2x/car-icon-car-icon-car-icon-simple-sign-free-vector.jpg"} alt={`Slika za ${model}`} className="w-32 h-16 rounded-full mr-4" />
          <h2 className="text-xl font-bold mb-2" style={{ wordWrap: "break-word" }}>{model}</h2>
        </div>
        <div className={`details ${showDetails ? 'block' : 'hidden'}`}>
        <h3 className="text-xl font-bold mb-2" style={{ wordWrap: "break-word" }}>Gorivo: {gorivo} </h3>
          <h3 className="text-xl font-bold mb-2" style={{ wordWrap: "break-word" }}>Transmisija: {transmisija}</h3>
          <h3 className="text-xl font-bold mb-2" style={{ wordWrap: "break-word" }}>Pogon: {pogon}</h3>
          <h3 className="text-xl font-bold mb-2" style={{ wordWrap: "break-word" }}>Godiste: {godiste}</h3>
          <h3 className="text-xl font-bold mb-2" style={{ wordWrap: "break-word" }}>KonjskihSnaga: {konjskihsnaga}</h3>
          <h3 className="text-xl font-bold mb-2" style={{ wordWrap: "break-word" }}>ObrtniMoment: {obrtniMoment}</h3>
          <h3 className="text-xl font-bold mb-2" style={{ wordWrap: "break-word" }}>Boja: {boja}</h3>
          <h3 className="text-xl font-bold mb-2" style={{ wordWrap: "break-word" }}>ECU: {ECU}</h3>
          <h3 className="text-xl font-bold mb-2" style={{ wordWrap: "break-word" }}>Tuning: {tuning}</h3>
          <h3 className="text-xl font-bold mb-2" style={{ wordWrap: "break-word" }}>Tuning stage: {tuningStage}</h3>
          <h3 className="text-xl font-bold mb-2" style={{ wordWrap: "break-word" }}>Opis automobila:</h3>
          <p className="mt-2">{opis}</p>
        </div>
      </div>
      <div className='flex justify-end items-center m-2'>
        <button onClick={toggleDetails} className='bg-blue-200 rounded-md mr-2 p-4'>
          {showDetails ? 'Sakrij detalje' : 'Prikaži detalje'}
        </button>
        <Link to={`/edit-automobil/${id}`} className='bg-green-200 rounded-md mr-2 p-4'>
          Uredi
        </Link>
        <button className='bg-red-200 rounded-md p-4' onClick={() => onDelete(id)}>Obriši</button>
      </div>
    </div>
  );
};
