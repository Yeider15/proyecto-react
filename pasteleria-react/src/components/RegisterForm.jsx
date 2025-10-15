import React, { useState, useEffect } from 'react';

// Datos de regiones y comunas
const comunasPorRegion = {
  Metropolitana: ["Santiago", "Puente Alto", "Ñuñoa"],
  Biobio: ["Concepción", "Talcahuano", "Chiguayante"],
  Araucania: ["Temuco", "Villarrica", "Padre Las Casas"],
  'Ñuble': ["Chillán", "San Carlos", "Bulnes"]
};

function RegistroForm() {
  // 1. Estados para los campos del formulario
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    password: '',
    confirmPassword: '',
    telefono: '',
    direccion: '',
    region: '',
    comuna: ''
  });

  // 2. Estados para los errores
  const [errors, setErrors] = useState({});

  // 3. Manejo de cambios en inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [id]: value
    }));
    // Limpiar el error al escribir
    setErrors(prevErrors => ({
        ...prevErrors,
        [id]: ''
    }));
  };

  // 4. Efecto para manejar el cambio de región y actualizar las comunas
  useEffect(() => {
    // Si la región cambia, resetea la comuna
    setForm(prevForm => ({
      ...prevForm,
      comuna: ''
    }));
  }, [form.region]);

  // 5. Función de validación (se llama en el submit)
  const validate = () => {
    let newErrors = {};
    let valido = true;

    // Nombre (solo letras y espacios)
    if (form.nombre === "" || !/^[a-zA-Z\s]+$/.test(form.nombre)) {
      newErrors.nombre = "Ingrese un nombre válido (solo letras y espacios).";
      valido = false;
    }

    // Correo (@duoc.cl, @gmail.cl, @gmail.com)
    if (!/^[\w.%+-]+@(duoc\.cl|gmail\.cl|gmail\.com)$/.test(form.correo)) {
      newErrors.correo = "Ingrese un correo válido con dominio @duoc.cl, @gmail.cl o @gmail.com.";
      valido = false;
    }

    // Contraseña (8 chars, Mayús, Minús, Número, Símbolo @#$%)
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%]).{8,}$/;
    if (!regexPass.test(form.password)) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres, incluir mayúscula, minúscula, número y un símbolo (@#$%).";
      valido = false;
    }

    // Confirmación de contraseña
    if (form.password !== form.confirmPassword || form.confirmPassword === "") {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
      valido = false;
    }

    // Teléfono (opcional, 9 dígitos)
    if (form.telefono !== "" && !/^\d{9}$/.test(form.telefono)) {
      newErrors.telefono = "Ingrese un teléfono válido de 9 dígitos.";
      valido = false;
    }

    // Dirección (obligatoria)
    if (form.direccion === "") {
      newErrors.direccion = "La dirección es obligatoria.";
      valido = false;
    }

    // Región
    if (form.region === "") {
      newErrors.region = "Debe seleccionar una región.";
      valido = false;
    }

    // Comuna
    if (form.comuna === "") {
      newErrors.comuna = "Debe seleccionar una comuna.";
      valido = false;
    }

    setErrors(newErrors);
    return valido;
  };

  // 6. Manejo del Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registro exitoso ✅");
      // Aquí se enviaría el formulario a la API/Backend
      console.log('Datos a enviar:', form);
      // Opcional: Resetear formulario
      setForm({
        nombre: '',
        correo: '',
        password: '',
        confirmPassword: '',
        telefono: '',
        direccion: '',
        region: '',
        comuna: ''
      });
      setErrors({});
    } else {
        alert("Por favor, corrige los errores en el formulario.");
    }
  };

  return (
    <form id="registro" onSubmit={handleSubmit}>
      
      <label htmlFor="nombre">Nombre Completo:</label>
      <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} maxLength="50" required />
      <span className="error" id="errorNombre">{errors.nombre}</span>

      <label htmlFor="correo">Correo Electrónico:</label>
      <input type="email" id="correo" name="correo" value={form.correo} onChange={handleChange} required />
      <span className="error" id="errorCorreo">{errors.correo}</span>

      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" name="password" value={form.password} onChange={handleChange} required />
      <span className="error" id="errorPassword">{errors.password}</span>

      <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
      <span className="error" id="errorConfirmPassword">{errors.confirmPassword}</span>

      <label htmlFor="telefono">Teléfono (opcional):</label>
      <input type="tel" id="telefono" name="telefono" value={form.telefono} onChange={handleChange} pattern="[0-9]{9}" />
      <span className="error" id="errorTelefono">{errors.telefono}</span>

      <label htmlFor="direccion">Dirección:</label>
      <input type="text" id="direccion" name="direccion" value={form.direccion} onChange={handleChange} required />
      <span className="error" id="errorDireccion">{errors.direccion}</span>
      
      {/* Región */}
      <div id="regionContainer">
        <div className="region">
          <label htmlFor="region">Región:</label>
          <select id="region" value={form.region} onChange={handleChange} required>
            <option value="" disabled>Seleccione</option>
            {Object.keys(comunasPorRegion).map(regionKey => (
              <option key={regionKey} value={regionKey}>{regionKey}</option>
            ))}
          </select>
          <span className="error" id="errorRegion">{errors.region}</span>
        </div>
      </div>

      {/* Comuna */}
      <div id="comunaContainer">
        <div className="comuna">
          <label htmlFor="comuna">Comuna:</label>
          <select id="comuna" value={form.comuna} onChange={handleChange} required disabled={!form.region}>
            <option value="" disabled>Seleccione</option>
            {form.region && comunasPorRegion[form.region]?.map(comunaName => (
              <option key={comunaName} value={comunaName}>{comunaName}</option>
            ))}
          </select>
          <span className="error" id="errorComuna">{errors.comuna}</span>
        </div>
      </div>

      {/* Botón */}
      <br/><br/>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegistroForm;