const connection = require('./db_connection.js');

/**
 * Muestra los nombres, apellidos y teléfonos de todos los pacientes.
 */
const getTelefonos = () => {
  // CORRECCIÓN: De 'pacientes' a 'paciente'
  const query = 'SELECT nombre, apellido, telefono FROM paciente;';
  
  connection.query(query, (error, results) => {
    if (error) {
      return console.error('Error al ejecutar la consulta:', error.stack);
    }
    console.log("\n--- Listado de Teléfonos de Pacientes ---");
    console.table(results);
  });
};

/**
 * Obtiene el teléfono de un paciente por su número de historial.
 * @param {number} nro_historial_clinico
 */
const getTelefonoPaciente = (nro_historial_clinico) => {
  // CORRECCIÓN: De 'pacientes' a 'paciente' y la columna a 'nro_historial_clinico'
  const query = 'SELECT telefono FROM paciente WHERE nro_historial_clinico = ?;';
  
  connection.query(query, [nro_historial_clinico], (error, results) => {
    if (error) {
      return console.error('Error al ejecutar la consulta:', error.stack);
    }
    console.log(`\n--- Teléfono del paciente con historial ${nro_historial_clinico} ---`);
    console.log(results[0] || 'No se encontró el paciente.');
  });
};

/**
 * Obtiene el listado de médicos que atendieron a un paciente específico.
 * @param {number} nro_historial_clinico
 */
const getMedicosPaciente = (nro_historial_clinico) => {
  // CORRECCIÓN: Nombres de tablas 'medico' e 'ingreso' y columnas de la relación.
  const query = `
    SELECT DISTINCT m.nombre, m.apellido
    FROM medico m
    INNER JOIN ingreso i ON m.matricula = i.matricula_medico
    WHERE i.nro_historial_paciente = ?;
  `;
  
  connection.query(query, [nro_historial_clinico], (error, results) => {
    if (error) {
      return console.error('Error al ejecutar la consulta:', error.stack);
    }
    console.log(`\n--- Médicos que atendieron al paciente con historial ${nro_historial_clinico} ---`);
    console.table(results);

    // Cierra la conexión después de la última consulta.
    connection.end();
  });
};


// --- Ejecución de las funciones ---

getTelefonos();
getTelefonoPaciente(1488);
getMedicosPaciente(4112);