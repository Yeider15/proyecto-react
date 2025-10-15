import React from 'react';
import RegistroForm from '../components/RegisterForm';
import '../styles/register-page.css'; // Importa los estilos de la página
import logoPastel from '../assets/img/pastel1.png'; // Asegúrate de tener esta imagen en src/assets/img

function RegistroPage() {
  return (
    <div className="registro-page-container">
      {/* Encabezado registro */}
      <div className="registro-header">
        <img src={logoPastel} alt="Logo Pasteleria" id="logo2" />
        <h2>Registro de Usuario</h2>
      </div>

      {/* Componente del Formulario */}
      <RegistroForm />
    </div>
  );
}

export default RegistroPage;