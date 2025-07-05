import info, { suma, resta, multiplicacion, division } from './calculadora.js';

/**
 * Recibe el nombre de un cálculo y dos valores, y muestra el resultado en consola.
 * @param {string} operacion - El nombre del cálculo ('suma', 'resta', 'multiplicacion', 'division').
 * @param {number} a - El primer valor.
 * @param {number} b - El segundo valor.
 */
const calcular = (operacion, a, b) => {
    let resultado;
    switch (operacion.toLowerCase()) {
        case 'suma':
            resultado = suma(a, b);
            break;
        case 'resta':
            resultado = resta(a, b);
            break;
        case 'multiplicacion':
            resultado = multiplicacion(a, b);
            break;
        case 'division':
            resultado = division(a, b);
            break;
        default:
            resultado = "Operación no válida. Use 'suma', 'resta', 'multiplicacion' o 'division'.";
            break;
    }
    console.log(`El resultado de la ${operacion} es: ${resultado}`);
};

// --- Ejecución de las funciones ---

// Mostramos la información del módulo
console.log(info());
console.log("-----------------------------------------");

// Pruebas con cada cálculo disponible
console.log("--- Realizando pruebas de cálculo ---");
calcular('suma', 10, 5);
calcular('resta', 10, 5);
calcular('multiplicacion', 10, 5);
calcular('division', 10, 5);
console.log("\n--- Pruebas con errores ---");
calcular('division', 10, 0); // Error: división por cero
calcular('suma', 'diez', 5); // Error: parámetro no numérico