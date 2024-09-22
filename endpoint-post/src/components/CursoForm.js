import React, { useState } from 'react';
import axios from 'axios';

const CursoForm = () => {
  const [nombre, setNombre] = useState('');
  const [creditos, setCurso] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Método para manejar el envío del formulario (POST)
  const handleGuardar = async () => {
    const nuevoCurso = {
      nombre,
      creditos,
      descripcion
    };

    try {
      const response = await axios.post('https://test-deploy-12.onrender.com/cursos', nuevoCurso);
      setMensaje('Curso guardado exitosamente.');
      console.log('Respuesta del servidor:', response.data);
      
      // Limpiar los campos después de guardar
      setNombre('');
      setCurso('');
      setDescripcion('');
    } catch (error) {
      console.error('Error al guardar el curso:', error);
      setMensaje('Ocurrió un error al guardar el curso.');
    }
  };

  const handleLimpiar = () => {
    setNombre('');
    setCurso('');
    setDescripcion('');
    setMensaje(''); // Limpiar cualquier mensaje previo
  };

  return (
    <div style={{ width: '400px', margin: '0 auto', padding: '20px', border: '1px solid black' }}>
      <h2>Formulario de Curso</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Nombre Curso</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Creditos</label>
        <input
          type="int"
          value={creditos}
          onChange={(e) => setCurso(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>
      <button onClick={handleGuardar} style={{ marginRight: '10px' }}>Guardar</button>
      <button onClick={handleLimpiar}>Limpiar</button>

      {/* Mostrar un mensaje de éxito o error */}
      {mensaje && (
        <div style={{ marginTop: '20px', color: mensaje.includes('error') ? 'red' : 'green' }}>
          {mensaje}
        </div>
      )}
    </div>
  );
};

export default CursoForm;
