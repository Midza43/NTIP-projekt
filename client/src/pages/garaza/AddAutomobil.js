import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
function AddAutomobil() {
  const [newAutomobil, setNewAutomobil] = useState({
    model: '',
    gorivo: '',
    transmisija: '',
    pogon: '',
    opis: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to add the new book
      const authToken = Cookies.get('authData');
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
        <input
          type="text"
          name="gorivo"
          value={newAutomobil.gorivo}
          onChange={(e) => setNewAutomobil({ ...newAutomobil, gorivo: e.target.value })}
          required
          className="border p-2 mb-2"
        />
        <label>Transmisija:</label>
        <input
          type="text"
          name="transmisija"
          value={newAutomobil.transmisija}
          onChange={(e) => setNewAutomobil({ ...newAutomobil, transmisija: e.target.value })}
          required
          className="border p-2 mb-2"
        />
        <label>Pogon:</label>
        <input
          type="text"
          name="pogon"
          value={newAutomobil.pogon}
          onChange={(e) => setNewAutomobil({ ...newAutomobil, pogon: e.target.value })}
          required
          className="border p-2 mb-2"
        />
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