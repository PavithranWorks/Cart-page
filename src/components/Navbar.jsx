import React from "react";

const Navbar = ({ cartCount, onCartClick }) => (
  <nav className="flex justify-between items-center p-4 bg-indigo-600 text-white shadow-md">
    <h1 className="text-2xl font-bold">🛍️Fake Store</h1>
    <button
      onClick={onCartClick}
      className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition"
    >
      Cart ({cartCount})
    </button>
  </nav>
);

export default Navbar;

