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
      <h1 className="text-3xl font-bold mb-4">Uredi automobil {id}</h1>

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
        <input
          type="text"
          name="gorivo"
          value={editedAutomobil.gorivo}
          onChange={(e) => setEditedAutomobil({ ...editedAutomobil, gorivo: e.target.value })}
          required
          className="border p-2 mb-2"
        />
        <label>Transmisija:</label>
        <input
          type="text"
          name="transmisija"
          value={editedAutomobil.transmisija}
          onChange={(e) => setEditedAutomobil({ ...editedAutomobil, transmisija: e.target.value })}
          required
          className="border p-2 mb-2"
        />
        <label>Pogon:</label>
        <input
          type="text"
          name="pogon"
          value={editedAutomobil.pogon}
          onChange={(e) => setEditedAutomobil({ ...editedAutomobil, pogon: e.target.value })}
          required
          className="border p-2 mb-2"
        />
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
          Spremi
        </button>
      </form>
    </div>
    
  );
}

export default EditAutomobil;