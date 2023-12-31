import { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import React from 'react'
import List from './List'

export default function Garaza(id, model, gorivo, transmisija, pogon, opis) {

  const [garaza, setAutomobili] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/automobili');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setAutomobili(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    // Call the fetch data function
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render>

  const handleDelete = async (id) => {
    try {
      // Make a DELETE request to the API
      const response = await fetch(`http://localhost:3001/api/automobili/${id}`, {
        method: 'DELETE',
      });
      navigate('/garaza');

      // Update the local state without the deleted automobili
      setAutomobili((prevAutomobili) => prevAutomobili.filter((list) => list.id !== id));
    } catch (error) {
      console.error('Error deleting automobil:', error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className='flex w-full justify-between'>
        <h1 className="text-3xl font-bold mb-4">Lista automobila u garaži</h1>
        <Link to="/add-automobil" className="bg-blue-500 text-white p-2 mb-4">
              Dodaj automobil
            </Link>
            </div>
        {garaza.map((list) => (
            <List key={list.id} {...list} onDelete={handleDelete} />
        ))}
        
        </div>    
  );
}
