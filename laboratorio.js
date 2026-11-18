// 1. Desarrolle y de solución al siguiente ejercicio que se presenta 
// 2. Utilice funciones recursivas, arreglos según como los hemos desarrollado en las sesiones de clases
// 3. Muestre los resultados de manera ordenada
// 4. Agregue validaciones para la entrada de los datos
// 5. Grabar un video de MÁXIMO 20 MIN, explicando el ejercicio que ha desarrollado
// 6. POR FAVOR verificar que entrega el enlace al video del ejercicio y que el enlace no este roto, que al acceder funcione. 
// 7. Subir su video a YouTube y compartir el enlace en el apartado de entrega. 
// 8. El archivo comprimido del ejercicio entregarlo en el espacio de entrega. 
// 9. Se evaluara según rúbrica 
// 10. Última fecha de entrega miércoles 18 a las 23:59

// Ejercicio a desarrollar : 
// 1.  Una cafetería universitaria necesita llevar un control de las ventas 
// realizadas durante su jornada de trabajo para conocer los ingresos obtenidos.
// Desarrolle un programa que solicite al usuario cuántas ventas desea registrar.
// Solicite el monto de cada venta y almacénelo en un arreglo.
// Al finalizar el registro, el programa deberá calcular y mostrar el total de dinero recaudado,
// el promedio por venta y la cantidad de ventas cuyo monto sea superior a $10.00.

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ventas = [];
let montoTotal = 0;

function RegistrarLasVentas (actual, cantidadSeleccionada) {
    if(actual>cantidadSeleccionada){
        console.log('RESULTADOS DE LAS VENTAS:')
        console.log(`\nCantidad de ventas registradas: ${cantidadSeleccionada} \nArreglo de ventas: ${ventas} \nTotal Recaudado: $${montoTotal.toFixed(2)}`)
        let promedio = cantidadSeleccionada > 0 ? montoTotal/cantidadSeleccionada : 0;
        console.log(`Promedio por venta: $${promedio.toFixed(2)}`)
        let mayor10 = 0;
        for (let i=0; i<ventas.length; i++){
            if(ventas[i] > 10){
                mayor10++;
            }
        }
        console.log(`Ventas mayor a $10.00: ${mayor10}`)
        rl.close();
        return;
    }
    rl.question(`Solicite el monto de la venta ${actual}: $`, monto =>{
        let montoAgregado = Number(monto);
        if(isNaN(montoAgregado) || monto.trim() === '' || montoAgregado < 0){
            console.log('ERROR: Ingrese el monto valido que sea mayor a 0.')
            RegistrarLasVentas(actual, cantidadSeleccionada);
            return;
        }
        ventas.push(montoAgregado);
        montoTotal = montoTotal + montoAgregado;
        RegistrarLasVentas(actual+1, cantidadSeleccionada);
    })
}
function solicitarVentas() {
    rl.question('¿Ingrese cuantas ventas desea ingresar?: ', cantidad=>{
        const cantidadSeleccionada = Number(cantidad)
        if(!Number.isInteger(cantidadSeleccionada) || cantidadSeleccionada <= 0){
            console.log('ERROR: El numero debe ser mayor a 0.')
            rl.close();
            return;
        }
        RegistrarLasVentas(1, cantidadSeleccionada);
    })
}

solicitarVentas();