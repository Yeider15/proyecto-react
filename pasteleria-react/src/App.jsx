import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Usamos react-router-dom para manejar las rutas
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';  // Página de productos

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        {/* Aquí puedes agregar más rutas si es necesario en el futuro */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
