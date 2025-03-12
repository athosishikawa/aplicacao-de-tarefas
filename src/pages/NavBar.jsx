
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">TodoApp</Link>
      </div>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/add-task' ? 'active' : ''}>
          <Link to="/add-task">Nova Tarefa</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;