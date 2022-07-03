// Control de paso vehicular
// En la carretera necesitas controlar el paso de vehículos por una zona determinada.
// La condición es el pago del servicio; si este se realizó puede pasar, en caso contrario no podrá continuar.

let pagoServicio = prompt("Pagó o no? Opciones: True / False")
// let pagoServicio

if (pagoServicio === "True" || pagoServicio === "true" || pagoServicio === "TRUE") {
    alert("Puede pasar")
} else {
    alert("No puede continuar")
}