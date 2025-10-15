import React from 'react';
import LoginForm from '../components/LoginForm'; // Importamos el nuevo componente
import '../styles/login-page.css';
import logoPastel from '../assets/img/pastel1.png'; // Asegúrate de que la ruta sea correcta

function LoginPage() {
  return (
    <div className="login-page-container">
      {/* Encabezado inicio de sesión */}
      <div className="registro-header">
        <img src={logoPastel} alt="Logo Pasteleria" id="logo2" />
        <h2>Inicio de Sesión</h2>
      </div>

      {/* Componente del Formulario */}
      <LoginForm />

      <p style={{textAlign: 'center', marginTop: '15px'}}>
        <a href="/registro">¿No tienes cuenta? Regístrate aquí</a>
      </p>
    </div>
  );
}

export default LoginPage;