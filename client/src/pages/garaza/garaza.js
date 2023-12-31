import React from 'react'
import List from './List'

export default function garaza() {
  
  const garaza = [
    {
    id: 1,
    model: 'Zastava 750',
    gorivo: 'Benzin',
    opis: 'Opis Zastava 750 automobila',
    },
    {
      id: 2,
      model: 'Mercedes Benz W123 200D',
      gorivo: 'Dizel',
      opis: 'Opis Mercedes automobila',
    }    
];
  return (
    <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Lista automobila u garaži</h1>

        {garaza.map((list) => (
            <List key={list.id} {...list} />
        ))}
        </div>
  );
}
