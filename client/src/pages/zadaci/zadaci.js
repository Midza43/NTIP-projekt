import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ReactPaginate from 'react-paginate';
const Zadaci = ({}) => {
  const [Zadaci, setZadaci] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const tasksPerPage = 15;
  const pagesVisited = pageNumber * tasksPerPage;
  const pageCount = Math.ceil(Zadaci.length / tasksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {    
    const fetchData = async () => {
      try {
        const authToken = Cookies.get('authData');
        const response = await fetch('http://localhost:3001/api/zadaci', {
              headers: {
                Authorization: `${authToken}`, // Include the authorization token in the headers
              },
            });
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }

        const data = await response.json();
        setZadaci(data);
        

        
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    // Call the fetch data function
    fetchData();
  }, []);

  return (    
    <div className="container mx-auto mt-8">
      <div className="flex w-full justify-between">
        <h1 className="text-3xl font-bold mb-4">Lista odrađenih modifikacija</h1>
      </div>

      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID zadatka</th>
            <th className="py-2 px-4 border-b">Model</th>
            <th className="py-2 px-4 border-b">Odrađeno</th>
            {/* Dodajte ostale zaglavlja prema vašim podacima */}
          </tr>
        </thead>
        <tbody>
          {Zadaci.slice(pagesVisited, pagesVisited + tasksPerPage).map(task => (
            <tr key={task.id}>
              <td className="py-2 px-4 border-b">{task.id}</td>
              <td className="py-2 px-4 border-b">{task.model}</td>
              <td className="py-2 px-4 border-b">{task.odradjeno}</td>
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


export default Zadaci;






