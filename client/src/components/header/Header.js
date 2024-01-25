import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
export default function Header({auth, setAuth}) {
   const navigate = useNavigate();
   const handleLogout = () => {
     setAuth(false);
     Cookies.remove('authData');
     navigate('/login');
   }; 
  return (
   
    
      <header>
        
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" class="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar" style={{width:"15%"}}>
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
        <Link to="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">          
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" class="bi bi-wrench" viewBox="0 0 16 16">        
  <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
</svg>
WORKSHOP APP
</Link>
</li>
         <li class="flex justify-space-between flex-wrap"> 
         {!auth ? (
          <>        
         <Link to="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-1">Login</Link>
         <Link to="/register" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-1">Register</Link>
         </>) : (
            <Link to="/logout" onClick={handleLogout} className="mr-2">Logout</Link>
          )}
         </li>
         <li>
            <Link to="/projekti" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <img width="48" height="48" src="https://img.icons8.com/dusk/64/group-of-projects.png" alt="group-of-projects"/>
               <span class="ml-3">Projekti</span>
            </Link>
         </li>
         <li>
            <Link to="/garaza" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <img width="48" height="48" src="https://img.icons8.com/officel/80/garage.png" alt="garage"/>
               <span class="flex-1 ml-3 whitespace-nowrap">Garaža</span>
               
            </Link>
         </li>
         <li>
            <Link to="/zadaci" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <img width="48" height="48" src="https://img.icons8.com/color/48/task--v1.png" alt="task--v1"/>
               <span class="flex-1 ml-3 whitespace-nowrap">Zadaci</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </Link>
         </li>         
      </ul>
   </div>
</aside>

      </header>
    
  )
}
