import React from 'react';
import '../styles/about-page.css';

// === IMPORTACIONES DE IMAGENES ===
import logoPastel from '../assets/img/pastel1.png';
import imgNosotros1 from '../assets/img/nosotro1.jpg';
import imgNosotros2 from '../assets/img/nosotros2.jpg';

function NosotrosPage() {
  return (
    <div className="nosotros-container">
      {/* Encabezado de sección */}
      <div className="registro-header">
        {/* Usamos la variable importada */}
        <img src={logoPastel} alt="Logo Pastelería" id="logo2" />
        <h1>Nosotros</h1>
      </div>

      {/* Contenido principal */}
      <div className="card shadow p-4">
        <p><strong>Pastelería Mil Sabores</strong> celebra su <strong>50 aniversario</strong> como un referente en la repostería chilena. 
        Famosa por su participación en un <strong>récord Guinness en 1995</strong>, cuando colaboró en la creación de la torta más grande del mundo, 
        la pastelería busca renovar su sistema de ventas online para ofrecer una experiencia de compra moderna y accesible.</p>

        <h3 className="mt-4">Misión</h3>
        <p>Ofrecer una experiencia dulce y memorable a nuestros clientes, proporcionando tortas y productos de repostería de alta calidad 
        para todas las ocasiones, mientras celebramos nuestras raíces históricas y fomentamos la creatividad en la repostería.</p>

        <h3 className="mt-4">Visión</h3>
        <p>Convertirnos en la tienda online líder de productos de repostería en Chile, conocida por nuestra innovación, calidad y el impacto positivo 
        en la comunidad, especialmente en la formación de nuevos talentos en gastronomía.</p>
      </div>

      {/* Bloque de imágenes fuera del contenedor */}
      <div className="imagenes-nosotros">
        <img src={imgNosotros1} alt="Torta aniversario" />
        <img src={imgNosotros2} alt="Equipo de pastelería" />
      </div>
    </div>
  );
}

export default NosotrosPage;