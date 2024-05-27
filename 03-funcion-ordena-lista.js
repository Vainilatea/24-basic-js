const listaA = [2, 1, 4, 3, 6, 5]
const listaA1 = listaA.toSorted()
const listaA2 = listaA.toSorted(function(a, b){return b-a})

var listaB = [990, 100, 150, 101, 333, 400]
var listaB1 = listaB.toSorted()
var listaB2 = listaB.toSorted(function(a, b){return b-a})

var listaC = [56, 94, 74, 64, 12, 25]
var listaC1 = listaC.toSorted()
var listaC2 = listaC.toSorted(function(a, b){return b-a})

console.log("Lista original: "+ listaA)
console.log("Lista ordenada: " + listaA1)
console.log("Lista ordenada inversa: " + listaA2)
console.log("Lista original: " + listaB)
console.log("Lista ordenada: " + listaB1)
console.log("Lista ordenada inversa: " + listaB2)
console.log("Lista original: " + listaC)
console.log("Lista ordenada: " + listaC1)
console.log("Lista ordenada inversa: " + listaC2)

