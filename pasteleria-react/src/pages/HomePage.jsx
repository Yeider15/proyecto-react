import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home-page.css'; 

import pastel1 from '../assets/img/pastel1.png';
import tortaCuadrada from '../assets/img/tortaCuadrada.jpg';
import tortaCircular from '../assets/img/torta6.jpg';
import tiramisu from '../assets/img/Tiramisu.jpg';
import cheesecake from '../assets/img/cheesecake.jpg';
import empanada from '../assets/img/empanada.jpg';
import panSinG from '../assets/img/panSinG.jpeg';
import galleta from '../assets/img/galleta.jpg';
import tortaBoda from '../assets/img/tortaBoda.jpg';

function HomePage() {
  return (
    <div className="home-page-content">
        
      <div className="container text-center my-5">
        <h1 className="mb-3">Pasteleria Mil Sabores</h1>
        <img src={pastel1} alt="Logo Pasteleria" id="logo" width="300px" />
        <p className="bienvenida">Pastelería 1000 Sabores celebra su 50 aniversario como un referente en la repostería chilena. 
          Famosa por su participación en un récord Guinness en 1995, cuando colaboró en la creación de la 
          torta más grande del mundo, la pastelería busca renovar su sistema de ventas online para ofrecer 
          una experiencia de compra moderna y accesible para sus clientes.
        </p>
      </div>

      <section className="productos-destacados-section">
        <h2>Productos destacados</h2>
        <div className="carrusel-productos">

          <div className="producto">
            <img src={tortaCuadrada} alt="Torta Cuadrada" />
            <p>Tortas Cuadradas</p>
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <Link to="/productos" className="btn-ver-mas">Ver Productos</Link>
          </div>

          <div className="producto">
            <img src={tortaCircular} alt="Torta Circular" />
            <p>Tortas Circulares</p>
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <Link to="/productos" className="btn-ver-mas">Ver Productos</Link>
          </div>

          <div className="producto">
            <img src={tiramisu} alt="Postres Individuales" />
            <p>Postres Individuales</p>
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <Link to="/productos" className="btn-ver-mas">Ver Productos</Link>
          </div>

          <div className="producto">
            <img src={cheesecake} alt="Productos Sin Azúcar" />
            <p>Productos Sin Azúcar</p>
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <Link to="/productos" className="btn-ver-mas">Ver Productos</Link>
          </div>
          
          <div className="producto">
            <img src={empanada} alt="Pastelería Tradicional" />
            <p>Pastelería Tradicional</p>
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <Link to="/productos" className="btn-ver-mas">Ver Productos</Link>
          </div>

          <div className="producto">
            <img src={panSinG} alt="Productos Sin Gluten" />
            <p>Productos Sin Gluten</p>
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <Link to="/productos" className="btn-ver-mas">Ver Productos</Link>
          </div>

          <div className="producto">
            <img src={galleta} alt="Productos Veganos" />
            <p>Productos Veganos</p>
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <Link to="/productos" className="btn-ver-mas">Ver Productos</Link>
          </div>

          <div className="producto">
            <img src={tortaBoda} alt="Tortas Especiales" />
            <p>Tortas Especiales</p>
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <Link to="/productos" className="btn-ver-mas">Ver Productos</Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default HomePage;
