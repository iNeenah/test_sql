// 1. Importamos el módulo 'mysql2'.
import mysql from 'mysql2';

// 2. Creamos el objeto de conexión con nuestras credenciales.
//    Asegúrate de cambiar 'tu_usuario_mysql' y 'tu_contraseña_mysql'
//    por los que correspondan a tu base de datos.
const connection = mysql.createConnection({
  host: 'localhost',    // La dirección del servidor de la base de datos (normalmente localhost)
  user: 'root',         // Tu usuario de MySQL
  password: '',         // Tu contraseña de MySQL
  database: 'clinica'   // El nombre de la base de datos a la que nos conectamos
});

// 3. Probamos la conexión.
connection.connect(error => {
  if (error) {
    console.error('❌ Error al conectar a la base de datos:', error.stack);
    return;
  }
  console.log('✅ ¡Conexión exitosa a la base de datos "clinica"!');
});

// 4. Exportamos la variable 'connection' para que pueda ser utilizada en otros archivos.
export default connection;