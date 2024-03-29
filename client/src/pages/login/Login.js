import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({setAuth}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const token = data.user.token;

      // create cookie
      document.cookie = `authData=${JSON.stringify(token)}; path=/;`;
      setAuth(data.user)
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };
    return (
      <div className="container mx-auto mt-8">
      <div className="flex flex-col justify-center items-center p-4 min-w-[600px]">
        <h1 className="text-2xl">Prijavi se</h1>
        <form onSubmit={handleSubmit} id="login_form" className="w-full">
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Korisničko ime</label>
            <input
              className="border-2 bg-gray-100"
              name="username"
              placeholder="Korisničko ime"
              type="text"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Lozinka</label>
            <input
              className="border-2 bg-gray-100"
              name="password"
              placeholder="Lozinka"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 flex flex-col">
            <button type="submit" className="w-full bg-green-500 text-white text-xl p-2">
              Prijavi se
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }