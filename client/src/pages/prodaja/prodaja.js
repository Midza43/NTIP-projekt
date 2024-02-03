import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
const Prodaja = ({}) => {
  const [Prodaja, setProdaja] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [korisnickoIme, setKorisnickoIme] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSucessMessage] = useState('');
  const tasksPerPage = 15;
  const pagesVisited = pageNumber * tasksPerPage;
  const pageCount = Math.ceil(Prodaja.length / tasksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  
  useEffect(() => {    
    const fetchData = async () => {
      try {        
        const response = await fetch('http://localhost:3001/api/prodaja', {              
            });
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }

        const data = await response.json();
        setProdaja(data);        
        

        
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    // Call the fetch data function
    fetchData();
  }, []);

  const kupi = async (automobil_id) => {    

    try {
      const data = {
        automobil_id: automobil_id,
        korisnickoIme: korisnickoIme
      };          
      const response = await fetch(`http://localhost:3001/api/prodaja/${automobil_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',              
        },
        body: JSON.stringify(data),
      });    
      
      console.log(data);
      

      if (!response.ok) {
        throw new Error('Failed to update the automobil');
      }

    
    } catch (error) {
      console.error('Error kupovina automobili:', error.message);    
    }
  };
  

  const handleButtonClick = (automobil_id) => {    
    if(korisnickoIme.trim() == '')
    {
      setErrorMessage('Niste unijeli ime!');
      setTimeout(() => {
      setErrorMessage('');
      }, 3000);
    }
    else{
      kupi(automobil_id);      
      setSucessMessage('Uspjesno poslan zahtjev!');
      setTimeout(() => {
      setSucessMessage('');
      }, 3000);

    }
  };

  return (    
    <div className="container mx-auto mt-8">
      <div className="flex w-full justify-between">
        <h1 className="text-3xl font-bold mb-4">Automobili na prodaju</h1>
      </div>

      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr>            
            <th className="py-2 px-4 border-b">Model</th>
            <th className="py-2 px-4 border-b">Specifikacije</th>
            <th className="py-2 px-4 border-b">Modifikacije</th>            
          </tr>
        </thead>
        <tbody>
          {Prodaja.slice(pagesVisited, pagesVisited + tasksPerPage).map(task => (
            <tr key={task.id}>              
              <td className="py-2 px-4 border-b">{task.model}</td>
              <td className="py-2 px-4 border-b">{task.specifikacije}</td>
              <td className="py-2 px-4 border-b">{task.modifikacije}</td>
              <td className="py-2 px-4 border-b">
              <input
                  type="text"
                  className='mb-2'
                  placeholder="Unesite ime i prezime"
                  value={korisnickoIme}
                  onChange={(e) => setKorisnickoIme(e.target.value)}
                />
              <button className='bg-blue-200 rounded-md mr-2 p-4' onClick={() => handleButtonClick(task.automobil_id)}>Pošalji zahtjev za kupovinu</button>
              {errorMessage && (
                <div className="flex w-20 bg-red-200 text-red-800 p-2 rounded mt-4">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="flex w-20 bg-green-200 text-green-800 p-2 rounded mt-4">
                  {successMessage}
                </div>
              )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
  previousLabel={'Prethodna'}
  nextLabel={'Sljedeca'}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={'flex justify-center my-4 space-x-2'}
  previousLinkClassName={'bg-blue-500 text-white px-4 py-2 rounded-l'}
  nextLinkClassName={'bg-blue-500 text-white px-4 py-2 rounded-r'}
  disabledClassName={'opacity-50 cursor-not-allowed'}
  activeClassName={'bg-blue-700 text-white px-4 py-2'}
/>
    </div>
  );
  
};


export default Prodaja;






