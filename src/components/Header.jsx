import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check if the current path matches the provided path
  const isActive = (path) => location.pathname === path;

  return (
    <header className='relative bg-slate-700 text-white py-1 md:py-3'>
      <ul className='flex justify-center md:justify-end pt-3 pb-3'>
        <li className="mr-5 md:mr-10">
          <button 
            onClick={() => navigate('/home')}
            className={isActive('/home') ? 'text-yellow-500' : 'hover:text-yellow-500'}
          >
            Home
          </button>
        </li>
        <li className="mr-5 md:mr-10">
          <button 
            onClick={() => navigate('/about')}
            className={isActive('/about') ? 'text-yellow-500' : 'hover:text-yellow-500'}
          >
            About
          </button>
        </li>
        <li className="mr-5 md:mr-10">
          <button 
            onClick={() => navigate('/project')}
            className={isActive('/project') ? 'text-yellow-500' : 'hover:text-yellow-500'}
          >
            Projects
          </button>
        </li>
        <li className="mr-5 md:mr-10">
          <button 
            onClick={() => navigate('/contact')}
            className={isActive('/contact') ? 'text-yellow-500' : 'hover:text-yellow-500'}
          >
            Contact
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
