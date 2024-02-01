import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Projekti() {
  const [modeli, setModeli] = useState([]);
  const [modeli2, setModeli2] = useState([]);
  const [modeli3, setModeli3] = useState([]);
  const [modeli4, setModeli4] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const navigate = useNavigate();
  const [editedAutomobil, setEditedAutomobil] = useState({
    boja: '',
    id: '',
    model: '',
    konjskihsnaga: '',
    obrtniMoment: '',
  });

  const [showNotification, setShowNotification] = useState(false);
  const [showNotification1, setShowNotification1] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [failMessage, setFailMessage] = useState('');

  const [openedSection, setOpenedSection] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = Cookies.get('authData');
        const response = await fetch('http://localhost:3001/api/projekti', {
          headers: {
            Authorization: `${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch projekti');
        }

        const data = await response.json();
        const extractedModeli = data.map((item) => item);
        console.log(extractedModeli);
        setModeli(extractedModeli);
      } catch (error) {
        console.error('Error fetching projekti:', error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = Cookies.get('authData');
        const response = await fetch('http://localhost:3001/api/projekti/stage1', {
          headers: {
            Authorization: `${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch projekti');
        }

        const data = await response.json();
        const extractedModeli = data.map((item) => item);
        setModeli2(extractedModeli);
      } catch (error) {
        console.error('Error fetching projekti:', error.message);
      }
    };

    fetchData();
  },[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = Cookies.get('authData');
        const response = await fetch('http://localhost:3001/api/projekti/stage2', {
          headers: {
            Authorization: `${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch projekti');
        }

        const data = await response.json();
        const extractedModeli = data.map((item) => item);
        setModeli3(extractedModeli);
      } catch (error) {
        console.error('Error fetching projekti:', error.message);
      }
    };

    fetchData();
  },[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = Cookies.get('authData');
        const response = await fetch('http://localhost:3001/api/projekti/dpf', {
          headers: {
            Authorization: `${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch projekti');
        }

        const data = await response.json();
        const extractedModeli = data.map((item) => item);
        setModeli4(extractedModeli);
      } catch (error) {
        console.error('Error fetching projekti:', error.message);
      }
    };

    fetchData();
  },[]);

  const lakiraj = async (e) => {
    e.preventDefault();

    try {
      const izabraniModel = modeli.filter((m) => m.model.includes(selectedModel));
      editedAutomobil.id = izabraniModel[0].id;
      editedAutomobil.model = izabraniModel[0].model;

      const authToken = Cookies.get('authData');

      const response = await fetch(`http://localhost:3001/api/projekti/${editedAutomobil.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authToken}`, // Include the authorization token in the headers
        },
        body: JSON.stringify(editedAutomobil),
      });

      console.log(JSON.stringify(editedAutomobil));
      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to update the automobil');
      }

      navigate('/projekti');
      setSuccessMessage('Uspješno izvršeno!');
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error('Error updating automobil:', error.message);
      setFailMessage('Neuspješno izvršeno!');
      setShowNotification1(true);
      setTimeout(() => {        
        setShowNotification1(false);
      }, 3000);
    }
  };

  const chipTuningStage1 = async (e) => {
    e.preventDefault();

    try {
      const izabraniModel = modeli.filter((m) => m.model.includes(selectedModel));
      editedAutomobil.id = izabraniModel[0].id;
      editedAutomobil.model = izabraniModel[0].model;
      editedAutomobil.konjskihsnaga = izabraniModel[0].konjskihsnaga + 30;
      const postotak = izabraniModel[0].obrtniMoment * 0.3;
      editedAutomobil.obrtniMoment = izabraniModel[0].obrtniMoment + postotak;
      console.log(editedAutomobil.obrtniMoment);
      console.log(editedAutomobil.konjskihsnaga);
      const authToken = Cookies.get('authData');

      const response = await fetch(`http://localhost:3001/api/projekti/ugradnja/${editedAutomobil.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authToken}`, // Include the authorization token in the headers
        },
        body: JSON.stringify(editedAutomobil),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to update the automobil');
      }

      navigate('/projekti');
      setSuccessMessage('Uspješno izvršeno!');
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error('Error updating automobil:', error.message);
      setFailMessage('Neuspješno izvršeno!');
      setShowNotification1(true);
      setTimeout(() => {
        setShowNotification1(false);
      }, 3000);
    }
  };

  const chipTuningStage2 = async (e) => {
    e.preventDefault();

    try {
      const izabraniModel = modeli.filter((m) => m.model.includes(selectedModel));
      editedAutomobil.id = izabraniModel[0].id;
      editedAutomobil.model = izabraniModel[0].model;
      editedAutomobil.konjskihsnaga = izabraniModel[0].konjskihsnaga + 100;
      const postotak = izabraniModel[0].obrtniMoment * 0.5;
      editedAutomobil.obrtniMoment = izabraniModel[0].obrtniMoment + postotak;
      console.log(editedAutomobil.obrtniMoment);
      console.log(editedAutomobil.konjskihsnaga);
      const authToken = Cookies.get('authData');

      const response = await fetch(`http://localhost:3001/api/projekti/ugradnja2/${editedAutomobil.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authToken}`, // Include the authorization token in the headers
        },
        body: JSON.stringify(editedAutomobil),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to update the automobil');
      }

      navigate('/projekti');
      setSuccessMessage('Uspješno izvršeno!');
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error('Error updating automobil:', error.message);
      setFailMessage('Neuspješno izvršeno!');
      setShowNotification1(true);
      setTimeout(() => {
        setShowNotification1(false);
      }, 3000);
    }
  };

  const dpf = async (e) => {
    e.preventDefault();

    try {
      const izabraniModel = modeli.filter((m) => m.model.includes(selectedModel));
      editedAutomobil.id = izabraniModel[0].id;
      editedAutomobil.model = izabraniModel[0].model;
      editedAutomobil.konjskihsnaga = izabraniModel[0].konjskihsnaga + 100;
      const postotak = izabraniModel[0].obrtniMoment * 0.5;
      editedAutomobil.obrtniMoment = izabraniModel[0].obrtniMoment + postotak;
      console.log(editedAutomobil.obrtniMoment);
      console.log(editedAutomobil.konjskihsnaga);
      const authToken = Cookies.get('authData');

      const response = await fetch(`http://localhost:3001/api/projekti/dpf/${editedAutomobil.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authToken}`, // Include the authorization token in the headers
        },
        body: JSON.stringify(editedAutomobil),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to update the automobil');
      }

      navigate('/projekti');
      setSuccessMessage('Uspješno izvršeno!');
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error('Error updating automobil:', error.message);
      setFailMessage('Neuspješno izvršeno!');
      setShowNotification1(true);
      setTimeout(() => {
        setShowNotification1(false);
      }, 3000);
    }
  };

  const dubinsko = async (e) => {
    e.preventDefault();

    try {
      const izabraniModel = modeli.filter((m) => m.model.includes(selectedModel));
      editedAutomobil.id = izabraniModel[0].id;
      editedAutomobil.model = izabraniModel[0].model;
      const authToken = Cookies.get('authData');

      const response = await fetch(`http://localhost:3001/api/projekti/dubinsko/${editedAutomobil.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authToken}`, // Include the authorization token in the headers
        },
        body: JSON.stringify(editedAutomobil),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to update the automobil');
      }

      navigate('/projekti');
      setSuccessMessage('Uspješno izvršeno!');
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error('Error updating automobil:', error.message);
      setFailMessage('Neuspješno izvršeno!');
      setShowNotification1(true);
      setTimeout(() => {
        setShowNotification1(false);
      }, 3000);
    }
  };
  

  return (
    <div className="container mx-auto mt-8">
      <div className="flex w-full justify-between">
        <h1 className="text-3xl font-bold mb-4">Izaberite automobil</h1>
      </div>
      <div className="mb-4">
        <label htmlFor="model">Model:</label>
        <select
          id="model"
          name="model"
          value={selectedModel}
          onChange={(event) => setSelectedModel(event.target.value)}
          className="border rounded p-2 ml-2"
        >
          <option value="" disabled>
            Izaberite model
          </option>
          {modeli.map((model, index) => (
            <option key={index} value={model.model}>
              {model.model}
            </option>
          ))}
        </select>
      </div>
      <button onClick={() => setOpenedSection('lakiranje')} className="text-white p-2 rounded">
        <img src="https://cdn-icons-png.flaticon.com/512/75/75774.png" alt="Lakiranje" width = "128px" className="mr-2" />
        </button>
        <button onClick={() => setOpenedSection('chipTuning')} className="text-white p-2 rounded">
        <img src="https://cdn-icons-png.flaticon.com/512/6674/6674348.png" alt="Stage1" width = "128px" className="mr-2" />
        </button>
        <button onClick={() => setOpenedSection('chipTuning2')} className="text-white p-2 rounded">
        <img src="https://static.thenounproject.com/png/3189913-200.png" alt="Stage2" width = "128px" className="mr-2" />
        </button>
        <button onClick={() => setOpenedSection('DPF')} className="text-white p-2 rounded">
        <img src="https://static.thenounproject.com/png/2864007-200.png" alt="DPF" width = "128px" className="mr-2" />
        </button>
        <button onClick={() => setOpenedSection('Dubinsko')} className="text-white p-2 rounded">
        <img src="https://static.thenounproject.com/png/614449-200.png" alt="dubinsko" width = "128px" className="mr-2" />
        </button>        
      {/* Sekcija za Lakiranje */}
      <div className="flex items-center mx-auto">
      <div>        
        {openedSection === 'lakiranje' && (
          <div className="mb-4">
            <b>Lakiranje</b>
            <div>
            <label>Boja:</label>
            <input
              type="text"
              name="boja"
              onChange={(e) => setEditedAutomobil({ ...editedAutomobil, boja: e.target.value })}
              required
              className="border p-2 mb-2"
            />
            <button onClick={lakiraj} className="bg-blue-500 text-white p-2 ml-2 rounded">
              Lakiraj
            </button>
            </div>
            {showNotification && (
              <div className="flex w-20 bg-green-200 text-green-800 p-2 rounded mt-4">
                {successMessage}
              </div>
            )}
            {showNotification1 && (
              <div className="flex w-20 bg-red-200 text-red-800 p-2 rounded mt-4">
                {failMessage}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Sekcija za Chip Tuning (Stage 1) */}
      <div>
        {openedSection === 'chipTuning' && (
          <div className="mb-4">
            <b>Samo automobili koji posjeduju ECU, te do sada nisu tunirani ili poseduju samo mehanički tuning mogu raditi chip tuning Stage 1.</b>
            <div>
            <label htmlFor="model">Model:</label>
            <select
              id="model"
              name="model"
              value={selectedModel}
              onChange={(event) => setSelectedModel(event.target.value)}
              className="border rounded p-2 ml-2"
            >
              <option value="" disabled>
                Izaberite model
              </option>
              {modeli2.map((model, index) => (
                <option key={index} value={model.model}>
                  {model.model}
                </option>
              ))}
            </select>
            
            <button onClick={chipTuningStage1} className="bg-blue-500 text-white p-2 ml-2 rounded">
              Izvrši
            </button>
            {showNotification && (
              <div className="flex w-20 bg-green-200 text-green-800 p-2 rounded mt-4">
                {successMessage}
              </div>
              
            )}
            </div>
            {showNotification1 && (
              <div className="flex w-20 bg-red-200 text-red-800 p-2 rounded mt-4">
                {failMessage}
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        {openedSection === 'chipTuning2' && (
          <div className="mb-4">            
            <div>
            <b>Stage 2 tuning</b>
            <div>
            <label htmlFor="model">Model:</label>
            <select
              id="model"
              name="model"
              value={selectedModel}
              onChange={(event) => setSelectedModel(event.target.value)}
              className="border rounded p-2 ml-2"
            >
              <option value="" disabled>
                Izaberite model
              </option>
              {modeli3.map((model, index) => (
                <option key={index} value={model.model}>
                  {model.model}
                </option>
              ))}
            </select>
            
            <button onClick={chipTuningStage2} className="bg-blue-500 text-white p-2 ml-2 rounded">
              Izvrši
            </button>
            </div>
            {showNotification && (
              <div className="flex w-20 bg-green-200 text-green-800 p-2 rounded mt-4">
                {successMessage}
              </div>
              
            )}
            </div>
            {showNotification1 && (
              <div className="flex w-20 bg-red-200 text-red-800 p-2 rounded mt-4">
                {failMessage}
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        {openedSection === 'DPF' && (
          <div className="mb-4">
            <b>Isključivanje DPF (diesel particle filter).</b>           
            <div>
            <label htmlFor="model">Model:</label>
            <select
              id="model"
              name="model"
              value={selectedModel}
              onChange={(event) => setSelectedModel(event.target.value)}
              className="border rounded p-2 ml-2"
            >
              <option value="" disabled>
                Izaberite model
              </option>
              {modeli4.map((model, index) => (
                <option key={index} value={model.model}>
                  {model.model}
                </option>
              ))}
            </select>
            
            <button onClick={dpf} className="bg-blue-500 text-white p-2 ml-2 rounded">
              Izvrši
            </button>
            {showNotification && (
              <div className="flex w-20 bg-green-200 text-green-800 p-2 rounded mt-4">
                {successMessage}
              </div>
              
            )}
            </div>
            {showNotification1 && (
              <div className="flex w-20 bg-red-200 text-red-800 p-2 rounded mt-4">
                {failMessage}
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        {openedSection === 'Dubinsko' && (
          <div className="mb-4">
            <b>Dubinjsko pranje automobila.</b>           
            <div>            
            <button onClick={dubinsko} className="bg-blue-500 text-white p-2 ml-2 rounded">
              Odradi dubinsko pranje
            </button>
            {showNotification && (
              <div className="flex w-20 bg-green-200 text-green-800 p-2 rounded mt-4">
                {successMessage}
              </div>
              
            )}
            </div>
            {showNotification1 && (
              <div className="flex w-20 bg-red-200 text-red-800 p-2 rounded mt-4">
                {failMessage}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
