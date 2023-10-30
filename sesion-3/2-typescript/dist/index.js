"use strict";
// Declaración de Variables
let message = "hola TS";
let count = 42;
let isDone = false;
// Funciones
/**
 * Función que retorna un saludo
 * @param nombre
 * @returns
 */
function saludo(nombre) {
    return `Hola ${nombre}`;
}
saludo(2);
// Clases y Herencia
class Animal {
    constructor(nombre, años) {
        // Código extra
        this.nombre = nombre;
        this.años = años;
        this.reino = "animal";
    }
    añosHumanos() {
        console.log("Años humanos: ", this.años);
    }
}
class Perro extends Animal {
    constructor(nombre, años) {
        super(nombre, años);
    }
    sonido() {
        console.log(`${this.nombre} es un perro, por lo tanto ladra wow!, pertenece al reino ${this.reino}`);
    }
}
const perro = new Perro("firulais", 13);
console.log(perro.sonido());
