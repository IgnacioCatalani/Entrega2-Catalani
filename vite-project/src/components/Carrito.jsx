import React, { useState } from 'react';

function Carrito() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
    validateForm();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };

  const handleDireccionChange = (e) => {
    setDireccion(e.target.value);
    validateForm();
  };

  const validateForm = () => {
    if (nombre && email && direccion) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Formulario enviado');
     
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre" className='textoboton'>Nombre: </label>
          <input 
            type="text" 
            id="nombre" 
            value={nombre} 
            onChange={handleNombreChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="email" className='textoboton'>Email: </label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleEmailChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="direccion" className='textoboton'>Dirección: </label>
          <input 
            type="text" 
            id="direccion" 
            value={direccion} 
            onChange={handleDireccionChange} 
            required 
          />
        </div>
        <button type="submit" className="btn-cc" disabled={!isFormValid}>Completar Compra</button>
      </form>
    </div>
  );
}

export default Carrito;
