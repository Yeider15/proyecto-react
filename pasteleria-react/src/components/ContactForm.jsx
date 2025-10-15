import React, { useState } from 'react';

function ContactForm() {
  // 1. Hook useState para gestionar los datos del formulario
  const [form, setForm] = useState({ 
    nombre: '', 
    correo: '', 
    mensaje: '' 
  });
  
  // 2. Hook useState para gestionar los mensajes de error
  const [errors, setErrors] = useState({});

  // Función de validación de correo
  const validarCorreo = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Manejador de cambio para actualizar el estado del formulario
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prevForm => ({ 
      ...prevForm, 
      [id]: value 
    }));
    // Limpiar el error cuando el usuario comienza a escribir
    setErrors(prevErrors => ({ 
        ...prevErrors, 
        [id]: '' 
    }));
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    let isValid = true;

    // Lógica de Validación
    if (form.nombre.trim() === "") { 
      newErrors.nombre = "Por favor ingresa tu nombre completo."; 
      isValid = false; 
    }
    if (form.correo.trim() === "" || !validarCorreo(form.correo)) { 
      newErrors.correo = "Por favor ingresa un correo válido."; 
      isValid = false; 
    }
    if (form.mensaje.trim() === "") { 
      newErrors.mensaje = "Por favor escribe tu mensaje."; 
      isValid = false; 
    }

    setErrors(newErrors);

    if (isValid) {
      alert("¡Gracias por contactarnos! Pronto te responderemos. ✅");
      // Resetear el formulario
      setForm({ nombre: '', correo: '', mensaje: '' });
    }
  };

  return (
    // Usa la clase custom-container que definiste en tu CSS para el estilo
    <div className="custom-container"> 
      <h3 className="text-center">Envíanos un Mensaje</h3>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre Completo</label>
          <input 
            type="text" className="form-control" id="nombre" placeholder="Tu nombre" 
            value={form.nombre} onChange={handleChange} 
          />
          {/* Mostrar error */}
          <span className="error">{errors.nombre}</span>
        </div>

        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo Electrónico</label>
          <input 
            type="email" className="form-control" id="correo" placeholder="ejemplo@correo.com" 
            value={form.correo} onChange={handleChange}
          />
          {/* Mostrar error */}
          <span className="error">{errors.correo}</span>
        </div>

        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea 
            className="form-control" id="mensaje" rows="4" placeholder="Escribe tu consulta aquí"
            value={form.mensaje} onChange={handleChange}
          />
          {/* Mostrar error */}
          <span className="error">{errors.mensaje}</span>
        </div>

        <button type="submit" className="btn btn-dark w-100">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;