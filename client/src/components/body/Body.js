import React from 'react'
import { Outlet } from "react-router-dom";

export default function Body() {
  return (
    <div className="flex flex-grow items-center justify-center p-4 w-full h-full">
      
      <Outlet />
      </div>
  )
}
