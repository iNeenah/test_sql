/**
 * Valida si los dos parámetros proporcionados son números.
 * @param {*} a - El primer valor a validar.
 * @param {*} b - El segundo valor a validar.
 * @returns {string|null} Un mensaje de error si la validación falla, de lo contrario null.
 */
const validateNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: Ambos parámetros deben ser valores numéricos.";
    }
    return null;
};

export const suma = (a, b) => {
    const error = validateNumbers(a, b);
    if (error) return error;
    return a + b;
};

export const resta = (a, b) => {
    const error = validateNumbers(a, b);
    if (error) return error;
    return a - b;
};

export const multiplicacion = (a, b) => {
    const error = validateNumbers(a, b);
    if (error) return error;
    return a * b;
};

export const division = (a, b) => {
    const error = validateNumbers(a, b);
    if (error) return error;
    if (b === 0) {
        return "Error: No se puede dividir por cero.";
    }
    return a / b;
};

const info = () => {
    return "Con el presente modulo usted podrá realizar las operaciones básicas de matemática como sumar, restar, multiplicar y dividir.";
};

export default info;