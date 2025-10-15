import React from 'react';
import { Link } from 'react-router-dom';  // Link de React Router para navegar entre páginas

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">🧁 Pastelería Mil Sabores</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Registrarse</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">Nosotros</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/carrito">🛒</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
