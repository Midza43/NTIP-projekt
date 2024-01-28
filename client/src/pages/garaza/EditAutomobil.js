import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
function EditAutomobil() {
  const { id } = useParams();

  const [editedAutomobil, setEditedAutomobil] = useState({
    model: '',
    gorivo: '',
    transmisija: '',
    pogon: '',
    godiste: '',
    konjskihsnaga:'',
    obrtniMoment:'',
    boja:'',
    ECU:'',
    tuning:'',
    tuningStage:'',
    opis: '',
  });

  const navigate = useNavigate();

  useEffect(() => {    
    const fetchData = async () => {
      try {
        const authToken = Cookies.get('authData');
        const response = await fetch(`http://localhost:3001/api/automobili/${id}`, {
          headers: {
            Authorization: `${authToken}`, // Include the authorization token in the headers
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch automobili data');
        }

        const data = await response.json();
        setEditedAutomobil(data);
      } catch (error) {
        console.error('Error fetching automobili data:', error.message);
      }
    };

    // Call the fetch data function
    fetchData();
  }, [id]);

  const handleGorivoChange = (e) => {
    setEditedAutomobil({ ...editedAutomobil, gorivo: e.target.value });
  };

  const handleTransmisijaChange = (e) => {
    setEditedAutomobil({ ...editedAutomobil, transmisija: e.target.value });
  };

  const handlePogonChange = (e) => {
    setEditedAutomobil({ ...editedAutomobil, pogon: e.target.value });
  };

  const handleGodisteChange = (e) => {
    setEditedAutomobil({ ...editedAutomobil, godiste: e.target.value });
  };
  
  const handleEcuChange = (e) => {
    setEditedAutomobil({ ...editedAutomobil, ECU: e.target.value });
  };
  
  const handleTuningChange = (e) => {
    setEditedAutomobil({ ...editedAutomobil, tuning: e.target.value, tuningStage: '' });
  };

  const handleTuningStageChange = (e) => {
    setEditedAutomobil({ ...editedAutomobil, tuningStage: e.target.value });
  };
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, index) => (currentYear - index).toString());
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authToken = Cookies.get('authData');
      const response = await fetch(`http://localhost:3001/api/automobili/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authToken}`, // Include the authorization token in the headers
        },
        body: JSON.stringify(editedAutomobil),
      });
      
      console.log(JSON.stringify(editedAutomobil));
      console.log(id);
      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to update the automobil');
      }

      // Redirect to the home page after updating the automobil
      navigate('/garaza');
    } catch (error) {
      console.error('Error updating automobil:', error.message);
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
          value={editedAutomobil.model}
          onChange={(e) => setEditedAutomobil({ ...editedAutomobil, model: e.target.value })}
          required
          className="border p-2 mb-2"
        />

        <label>Gorivo:</label>
        <select
          name="gorivo"
          value={editedAutomobil.gorivo}
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
          value={editedAutomobil.transmisija}
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
              checked={editedAutomobil.pogon === 'Prednji'}
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
              checked={editedAutomobil.pogon === 'Zadnji'}
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
              checked={editedAutomobil.pogon === '4x4'}
              onChange={handlePogonChange}
              required
            />
            4x4
          </label>
        </div>

        <label>Godiste:</label>
        <select
          name="godiste"
          value={editedAutomobil.godiste}
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
          value={editedAutomobil.konjskihsnaga}
          onChange={(e) => setEditedAutomobil({ ...editedAutomobil, konjskihsnaga: e.target.value })}
          required
          className="border p-2 mb-2"
        />
        <label>Obrtni moment (Nm):</label>
        <input
          type="text"
          name="obrtniMoment"
          value={editedAutomobil.obrtniMoment}
          onChange={(e) => setEditedAutomobil({ ...editedAutomobil, obrtniMoment: e.target.value })}
          required
          className="border p-2 mb-2"
        />
        <label>Boja:</label>
        <input
          type="text"
          name="boja"
          value={editedAutomobil.boja}
          onChange={(e) => setEditedAutomobil({ ...editedAutomobil, boja: e.target.value })}
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
              checked={editedAutomobil.ECU === 'Da'}
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
              checked={editedAutomobil.ECU === 'Ne'}
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
              checked={editedAutomobil.tuning === 'Ne'}
              onChange={handleTuningChange}
            />
            Ne
          </label>

          <label>
            <input
              type="radio"
              name="tuning"
              value="Da"
              checked={editedAutomobil.tuning === 'Da'}
              onChange={handleTuningChange}
            />
            Da
          </label>
        </div>

        {editedAutomobil.tuning === 'Da' && (
          <div>
            <label>Stage:</label>
            <select
              name="tuningStage"
              value={editedAutomobil.tuningStage}
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
          value={editedAutomobil.opis}
          onChange={(e) => setEditedAutomobil({ ...editedAutomobil, opis: e.target.value })}
          required
          className="border p-2 mb-2"
        />

        <button type="submit" className="bg-green-500 text-white p-2">
          Uredi
        </button>
      </form>
    </div>
    
  );
}

export default EditAutomobil;