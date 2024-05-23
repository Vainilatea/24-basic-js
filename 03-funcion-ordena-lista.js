function ordena(lista) {

    var primer_elem = lista[0]
    var segundo_elem = lista[1]
    var tercer_elem = lista[2]
    var cuarto_elem = lista[3]
    var quinto_elem = lista[4]
    var sexto_elem = lista[5]

    if (primer_elem > segundo_elem){
        primer_elem = lista[1]
        segundo_elem = lista[0]
    }

    if (segundo_elem > tercer_elem){
        segundo_elem = lista[2]
        tercer_elem = lista[1]
    }

    if (tercer_elem > cuarto_elem){
        tercer_elem = lista[3]
        cuarto_elem = lista[2]
    }

    if (cuarto_elem > quinto_elem){
        cuarto_elem = lista[4]
        quinto_elem = lista[3]
    }

    if (quinto_elem > sexto_elem){
        quinto_elem = lista[5]
        sexto_elem = lista[4]
    }

    var listaOrdenada = [
        primer_elem,
        segundo_elem,
        tercer_elem,
        cuarto_elem,
        quinto_elem,
        sexto_elem
    ]

    return listaOrdenada
}

var lista = [2, 1, 4, 3, 6, 5]
var numeros = ordena(lista)

var lista2 = [99, 100, 150, 101, 333, 40]
var letras = ordena(lista2)

console.log(numeros)
console.log(letras)
