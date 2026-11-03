import * as gestionP from "./gestionPresupuesto.js";
import * as gestionPW from "./gestionPresupuestoWeb.js";

gestionP.actualizarPresupuesto(1500);

gestionPW.mostrarDatoEnId("presupuesto", gestionP.mostrarPresupuesto());

let gasto1 = gestionP.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida");
let gasto2 = gestionP.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida");
let gasto3 = gestionP.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte");
let gasto4 = gestionP.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let gasto5 = gestionP.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let gasto6 = gestionP.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");

gestionP.anyadirGasto(gasto1);
gestionP.anyadirGasto(gasto2);
gestionP.anyadirGasto(gasto3);
gestionP.anyadirGasto(gasto4);
gestionP.anyadirGasto(gasto5);
gestionP.anyadirGasto(gasto6);

gestionPW.mostrarDatoEnId("gastos-totales", gestionP.calcularTotalGastos());
gestionPW.mostrarDatoEnId("balance-total", gestionP.calcularBalance());