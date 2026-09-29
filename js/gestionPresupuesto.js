'use strict';// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;


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

function CrearGasto(descripcion, valor) {
    this.descripcion = descripcion;
    if (valor < 0 || isNaN(valor))
    {
        this.valor = 0;
    }
    else
    {
        this.valor = valor;
    }

    this.mostrarGasto = function()
    {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    }

    this.actualizarDescripcion = function(nuevaDescripcion)
    {
        this.descripcion = nuevaDescripcion;
    }

    this.actualizarValor = function(nuevoValor)
    {
        if (isNaN(nuevoValor) || nuevoValor < 0)
        {
            console.error("Has introducido un número negativo o no has introducido un número");
        }
        else
        {
            this.valor = nuevoValor;
        }
    }
}

    

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
