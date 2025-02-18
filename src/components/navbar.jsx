import { useState } from "react";
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white p-4 text-black flex justify-between border-b border-gray-600">
      <h1 className="text-xl font-bold">Website</h1>
      <div className="space-x-4">
         <NavLink
          to="/"
          className="px-3 py-1 text-black font-bold hover:text-zinc-700"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="px-3 py-1 text-black font-bold  hover:text-zinc-700"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="px-3 py-1 text-black font-bold  hover:text-zinc-700"
        >
          Contact
        </NavLink>
      </div>
    </nav>

  );
}

export default Navbar;
