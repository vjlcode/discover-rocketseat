// string

console.log(`soma de 1 + 1 =  ${1 + 1}`)

// number

let number = 33
let numberNan = 12.5 / "asd" // errado essa declaração

console.log(number)
console.log(numberNan)

// Boolean

let graduacao = true
console.log(graduacao)

// undefined e null

let valorUndefined
let valorNull = null

console.log(valorUndefined)
console.log(valorNull)

// object

let nome = {
  nome: "Vilson",
  idade: 30,
  andar: function () {
    console.log("Andando")
  },
}

console.log(typeof nome)
console.log(nome.andar)

// array

let listas = ["Banana", "Maça", "Pera"]

console.log(listas[2])
