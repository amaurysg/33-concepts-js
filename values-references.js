/**
 * 3- Values and references
 */

var fruta = 'manzana'
var fruta2 = fruta

// var fruta = 'mango'

console.log(fruta)
console.log(fruta2)

function comer(cantidad) {
  return cantidad = cantidad - 1
}
var cantidad = 3

console.log(comer(cantidad))
console.log(cantidad)

console.log(fruta === fruta2)

/**
 * En este caso vemos que un objecto objFruta
 * si creamos otro objFruta2 tomara la misma referencia, 
 * por ende los cambias se veran en los dos 
 */
var objFruta = {
  nombre: 'pera',
  cantidad: 2
}

var objFruta2 = objFruta
objFruta2.cantidad = 5


/**
 * 
 * @param {Object} objFruta 
 * @returns 
 * Los objetos que pasamos a funciones SI se modificaran, pues este objecto apunta a la referencia.
 */
function eat(objFruta) {
  return objFruta.cantidad = objFruta.cantidad + 55
}

console.log(eat(objFruta))
console.log(objFruta, objFruta2)
