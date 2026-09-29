// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;


function actualizarPresupuesto(dinero) {
    if (dinero < 0 || isNaN(dinero))
    {
        alert("El valor introducido debe ser un número no negativo.");
        presupuesto = -1;
    }
    else
    {
        presupuesto = dinero;
        return presupuesto;
    }
}

function mostrarPresupuesto() {
    // TODO
}

function CrearGasto() {
    // TODO
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
