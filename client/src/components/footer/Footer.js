import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 b-0">
      <div className="w-full text-center">
        <p className="text-white text-sm">
        <b>Elmin Midžić 1173-ET</b><br></br>
        &copy; {new Date().getFullYear()}         
        </p>
      </div>
    </footer>
  )
}
