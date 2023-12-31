import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Body() {
  return (
    <div className="flex flex-grow items-center justify-center mx-auto" style={{width:"100%", height:"100%"}}>      
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-45 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >        
      </aside>    
      <div className="flex flex-grow p-4 ml-45" style={{marginLeft:"17%", width:"80%"}}> 
        <Outlet />
      </div>
    </div>
  );
}
