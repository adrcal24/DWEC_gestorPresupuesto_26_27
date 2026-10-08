'use strict';// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;
let gastos = [];
let idGasto = 0;


function actualizarPresupuesto(dinero) {
    if (dinero < 0 || isNaN(dinero))
    {
        console.error("El valor introducido debe ser un número no negativo.");
        return -1;
    }
        
    presupuesto = dinero;
    return presupuesto;
    
    
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, valor = 0, fecha, ...etiquetas) {
    this.descripcion = descripcion;
    
    if (valor < 0 || isNaN(valor)) {
        this.valor = 0;
    } else {
        this.valor = valor;
    }

    let parsedDate = Date.parse(fecha);
    if (typeof fecha === 'string' && !isNaN(parsedDate)) {
        this.fecha = parsedDate;
    } else {
        this.fecha = Date.now();
    }

    this.etiquetas = [];

    this.anyadirEtiquetas = function(...nuevasEtiquetas) {
        for (let i = 0; i < nuevasEtiquetas.length; i++) {
            let et = nuevasEtiquetas[i];
            if (Array.isArray(et)) {
                for (let j = 0; j < et.length; j++) {
                    if (typeof et[j] === 'string' && !this.etiquetas.includes(et[j])) {
                        this.etiquetas.push(et[j]);
                    }
                }
            } else if (typeof et === 'string' && !this.etiquetas.includes(et)) {
                this.etiquetas.push(et);
            }
        }
    };

    if (etiquetas.length > 0) {
        this.anyadirEtiquetas(...etiquetas);
    }

    this.borrarEtiquetas = function(...etiquetasABorrar) {
        for (let i = 0; i < etiquetasABorrar.length; i++) {
            let et = etiquetasABorrar[i];
            if (Array.isArray(et)) {
                for (let j = 0; j < et.length; j++) {
                    let index = this.etiquetas.indexOf(et[j]);
                    if (index !== -1) {
                        this.etiquetas.splice(index, 1);
                    }
                }
            } else {
                let index = this.etiquetas.indexOf(et);
                if (index !== -1) {
                    this.etiquetas.splice(index, 1);
                }
            }
        }
    };

    this.actualizarFecha = function(nuevaFecha) {
        let parsedDate = Date.parse(nuevaFecha);
        if (typeof nuevaFecha === 'string' && !isNaN(parsedDate)) {
            this.fecha = parsedDate;
        }
    };

    this.mostrarGasto = function() {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    };

    this.mostrarGastoCompleto = function() {
        let fechaObj = new Date(this.fecha);
        let fechaTexto = fechaObj.toLocaleString();
        
        let textoEtiquetas = "";
        for (let i = 0; i < this.etiquetas.length; i++) {
            textoEtiquetas += "- " + this.etiquetas[i];
            if (i < this.etiquetas.length - 1) {
                textoEtiquetas += "\n";
            }
        }

        return "Gasto correspondiente a " + this.descripcion + " con valor " + this.valor + " €.\n" +
            "Fecha: " + fechaTexto + "\n" +
            "Etiquetas:\n" + textoEtiquetas;
    };

    this.actualizarDescripcion = function(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    };

    this.actualizarValor = function(nuevoValor) {
        if (isNaN(nuevoValor) || nuevoValor < 0) {
            console.error("Has introducido un número negativo o no has introducido un número");
        } else {
            this.valor = nuevoValor;
        }
    };
}

function listarGastos()
{
    return gastos;
}

function anyadirGasto(gasto) {
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
}

function borrarGasto(id) {
    for (var i = 0; i < gastos.length; i++) {
        if (gastos[i].id === id) {
            gastos.splice(i, 1);
            break;
        }
    }
}

function calcularTotalGastos() {
    let total = 0;
    for (let i = 0; i < gastos.length; i++) {
        total += gastos[i].valor;
    }
    return total;
}

function calcularBalance() {
    return presupuesto - calcularTotalGastos();
}



    

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance 
}
