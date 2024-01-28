import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function AddAutomobil() {
  const [newAutomobil, setNewAutomobil] = useState({
    model: '',
    gorivo: '',
    transmisija: '',
    pogon: '',
    godiste: '',
    konjskihSnaga:'',
    obrtniMoment:'',
    boja:'',
    ecu:'',
    tuning:'',
    tuningStage:'',
    opis: '',
  });

  const handleGorivoChange = (e) => {
    setNewAutomobil({ ...newAutomobil, gorivo: e.target.value });
  };

  const handleTransmisijaChange = (e) => {
    setNewAutomobil({ ...newAutomobil, transmisija: e.target.value });
  };

  const handlePogonChange = (e) => {
    setNewAutomobil({ ...newAutomobil, pogon: e.target.value });
  };

  const handleGodisteChange = (e) => {
    setNewAutomobil({ ...newAutomobil, godiste: e.target.value });
  };
  const handleEcuChange = (e) => {
    setNewAutomobil({ ...newAutomobil, ecu: e.target.value });
  };
  
  const handleTuningChange = (e) => {
    setNewAutomobil({ ...newAutomobil, tuning: e.target.value, tuningStage: '' });
  };

  const handleTuningStageChange = (e) => {
    setNewAutomobil({ ...newAutomobil, tuningStage: e.target.value });
  };

  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, index) => (currentYear - index).toString());


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to add the new automobil
      const authToken = Cookies.get('authData');
      console.log('Trying to make POST request with data:', newAutomobil);
      const response = await fetch('http://localhost:3001/api/automobili', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authToken}`, // Include the authorization token in the headers
        },
        body: JSON.stringify(newAutomobil),
      });

      if (!response.ok) {
        throw new Error('Failed to add the new automobil');
      }

      navigate('/garaza');

    } catch (error) {
      console.error('Error adding automobil:', error.message);
      
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Dodaj automobil</h1>

      <form onSubmit={handleSubmit} className='flex flex-col p-4'>
        <label>Model:</label>
        <input
          type="text"
          name="model"
          value={newAutomobil.model}
          onChange={(e) => setNewAutomobil({ ...newAutomobil, model: e.target.value })}
          required
          className="border p-2 mb-2"
        />

        <label>Gorivo:</label>
        <select
          name="gorivo"
          value={newAutomobil.gorivo}
          onChange={handleGorivoChange}
          required
          className="border p-2 mb-2"
        >
          <option value="" disabled>
            Odaberi gorivo
          </option>
          <option value="Benzin">Benzin</option>
          <option value="Dizel">Dizel</option>
        </select>

        <label>Transmisija:</label>
        <select
          name="transmisija"
          value={newAutomobil.transmisija}
          onChange={handleTransmisijaChange}
          required
          className="border p-2 mb-2"
        >
          <option value="" disabled>
            Odaberi transmisiju
          </option>
          <option value="Manuelni">Manuelni</option>
          <option value="Automatski">Automatski</option>
          <option value="Poluautomatski">Poluautomatski</option>
        </select>

        <label>Pogon:</label>
        <div className='flex flex-col p-4'>
          <label>
            <input
              type="radio"
              name="pogon"
              value="Prednji"
              checked={newAutomobil.pogon === 'Prednji'}
              onChange={handlePogonChange}
              required
            />
            Prednji
          </label>

          <label>
            <input
              type="radio"
              name="pogon"
              value="Zadnji"
              checked={newAutomobil.pogon === 'Zadnji'}
              onChange={handlePogonChange}
              required
            />
            Zadnji
          </label>

          <label>
            <input
              type="radio"
              name="pogon"
              value="4x4"
              checked={newAutomobil.pogon === '4x4'}
              onChange={handlePogonChange}
              required
            />
            4x4
          </label>
        </div>

        <label>Godiste:</label>
        <select
          name="godiste"
          value={newAutomobil.godiste}
          onChange={handleGodisteChange}
          required
          className="border p-2 mb-2"
        >
          <option value="" disabled>
            Odaberi godiste
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <label>Konjskih snaga:</label>
        <input
          type="text"
          name="konjskihSnaga"
          value={newAutomobil.konjskihSnaga}
          onChange={(e) => setNewAutomobil({ ...newAutomobil, konjskihSnaga: e.target.value })}
          required
          className="border p-2 mb-2"
        />
        <label>Obrtni moment (Nm):</label>
        <input
          type="text"
          name="obrtniMoment"
          value={newAutomobil.obrtniMoment}
          onChange={(e) => setNewAutomobil({ ...newAutomobil, obrtniMoment: e.target.value })}
          required
          className="border p-2 mb-2"
        />
        <label>Boja:</label>
        <input
          type="text"
          name="boja"
          value={newAutomobil.boja}
          onChange={(e) => setNewAutomobil({ ...newAutomobil, boja: e.target.value })}
          required
          className="border p-2 mb-2"
        />
        <label>ECU (elektronicka upravljacka jedinica):</label>
        <div className='flex flex-col p-4'>
          <label>
            <input
              type="radio"
              name="ecu"
              value="Da"
              checked={newAutomobil.ecu === 'Da'}
              onChange={handleEcuChange}
              required
            />
            Da
          </label>

          <label>
            <input
              type="radio"
              name="ecu"
              value="Ne"
              checked={newAutomobil.ecu === 'Ne'}
              onChange={handleEcuChange}
              required
            />
            Ne
          </label>          
        </div>

        <label>Tuning:</label>
        <div>
          <label>
            <input
              type="radio"
              name="tuning"
              value="Ne"
              checked={newAutomobil.tuning === 'Ne'}
              onChange={handleTuningChange}
            />
            Ne
          </label>

          <label>
            <input
              type="radio"
              name="tuning"
              value="Da"
              checked={newAutomobil.tuning === 'Da'}
              onChange={handleTuningChange}
            />
            Da
          </label>
        </div>

        {newAutomobil.tuning === 'Da' && (
          <div>
            <label>Stage:</label>
            <select
              name="tuningStage"
              value={newAutomobil.tuningStage}
              onChange={handleTuningStageChange}
              required
              className="border p-2 mb-2"
            >
              <option value="" disabled>
                Odaberi tuning
              </option>
              <option value="Mehanicki">Mehaničke prerade</option>
              <option value="Stage 1">Stage 1 (remap, chip tuning)</option>
              <option value="Stage 2">Stage 2 (usis, izduvna grana i remap)</option>
              <option value="Stage 3">Stage 3 (mehaničke prerade, ojačana radilica, klipnjače itd...)</option>
            </select>
          </div>
        )}

        <label>Opis:</label>
        <input
          type="text"
          name="opis"
          value={newAutomobil.opis}
          onChange={(e) => setNewAutomobil({ ...newAutomobil, opis: e.target.value })}
          required
          className="border p-2 mb-2"
        />

        <button type="submit" className="bg-green-500 text-white p-2">
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default AddAutomobil;
