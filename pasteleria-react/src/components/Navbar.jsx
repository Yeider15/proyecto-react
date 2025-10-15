import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  // 1. Obtener la ruta actual (pathname)
  const location = useLocation();
  const currentPath = location.pathname;

  // 2. Función auxiliar para verificar si una ruta coincide
  const isCurrent = (path) => currentPath === path;
    
  // Mapeo de enlaces con sus rutas de React Router
  const navLinks = [
    // Usamos '/' para la página de inicio (Home)
    { name: 'Home', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Registrarse', path: '/registro' },
    { name: 'Iniciar Sesión', path: '/login' }, // Agregado
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contact' }, // Agregado (usando /contact como en tu versión anterior)
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Enlace principal al Home */}
        <Link className="navbar-brand" to="/">🧁🧁Pastelería Mil Sabores</Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            {navLinks.map((link) => (
              // Lógica: Si la ruta actual NO es igual a la ruta del enlace, lo mostramos.
              !isCurrent(link.path) && (
                <li className="nav-item" key={link.name}>
                  <Link 
                    className="nav-link" 
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            ))}

            {/* Carrito: Generalmente siempre se muestra sin la lógica de ocultamiento */}
            <li className="nav-item">
              <Link className="nav-link" to="/carrito">🛒</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;