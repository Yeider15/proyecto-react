import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  // 1. Estados para los campos del formulario
  const [form, setForm] = useState({
    correo: '',
    password: ''
  });

  // 2. Estados para los errores
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // 3. Manejo de cambios en inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    // Mapea loginCorreo -> correo, loginPassword -> password
    const fieldName = id.replace('login', '').toLowerCase(); 

    setForm(prevForm => ({
      ...prevForm,
      [fieldName]: value
    }));
    // Limpiar el error al cambiar el valor
    setErrors(prevErrors => ({
        ...prevErrors,
        [id]: ''
    }));
  };

  // 4. Función de validación
  const validate = () => {
    let newErrors = {};
    let valido = true;
    
    // Correo (@duoc.cl, @gmail.cl, @gmail.com)
    if (!/^[\w.%+-]+@(duoc\.cl|gmail\.cl|gmail\.com)$/.test(form.correo)) {
      newErrors.loginCorreo = "Ingrese un correo válido con dominio @duoc.cl, @gmail.cl o @gmail.com.";
      valido = false;
    }

    // Contraseña (al menos 8 caracteres, según el JS original)
    if (form.password.length < 8) {
      newErrors.loginPassword = "La contraseña es demasiado corta (mínimo 8 caracteres).";
      valido = false;
    }

    setErrors(newErrors);
    return valido;
  };

  // 5. Manejo del Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Inicio de sesión exitoso ✅ Redirigiendo a Productos.");
      console.log('Credenciales enviadas:', form);
      
      // Redirección
      navigate('/productos'); 
    }
  };

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <label htmlFor="loginCorreo">Correo:</label>
      <input 
        type="email" 
        id="loginCorreo" 
        name="correo" 
        value={form.correo} 
        onChange={handleChange} 
        required 
      />
      <span className="error" id="errorLoginCorreo">{errors.loginCorreo}</span>

      <label htmlFor="loginPassword">Contraseña:</label>
      <input 
        type="password" 
        id="loginPassword" 
        name="password" 
        value={form.password} 
        onChange={handleChange} 
        required 
      />
      <span className="error" id="errorLoginPassword">{errors.loginPassword}</span>

      <br/><br/>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;