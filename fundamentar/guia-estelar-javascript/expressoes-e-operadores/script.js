// expressões e operadores

let number = 1

;(function () {
  console.log("Ola")
})()

console.log(number + 1)
console.log(--number)
console.log(false ? "ola" : "nada")

//  new

let name = new String("Vilson")
let age = new Number(30)
console.log(name, age)

let data = new Date("2022-12/01")
console.log(data.getDay())

// typeof delete

const person = {
  name: "Vilson",
  age: 30,
}
delete person.age

console.log(person)

// operadores artimeticos

console.log(3 * 2)
console.log(2 ** 2)
console.log(34 / 2)

let num = 10

console.log(--num)

// grouping operator

let total = (2 + 3) * 5
console.log(total)

// operadores de comparação igual e diferente

let one = 1
let two = 2

console.log(one == two)
console.log(one != two)
console.log(!(one != two))

// operadores comparação de valores e tipos

let oneString = "2"
let twoNumber = 2

console.log(oneString === twoNumber)

// comparação de menor e maior

console.log(2 >= 2)

// operadores de atribuição

let x
x = 10
x = x + 10
console.log(x)

// operadores logicos

let pao = true
let queijo = false

// AND
if (pao && queijo) {
  console.log("Tem pao e queijo")
}

// OR

if (pao || queijo) {
  console.log("Tanto faz pao ou queijo")
}

// NOT

if (!pao == true) {
  console.log("Tem pao")
} else {
  console.log("Não temos pao")
}

// condição ternario

let nome = "Vilsons"

const temNome = nome == "Vilson" ? "Tem nome" : "Não tem nome"
console.log(temNome)

// operadores para string

console.log("a" == "a")

let fruta1 = "bana"
let fruta2 = "na"

console.log(fruta1.concat(fruta2))

// falsy e truthy

console.log(NaN ? "Verdadeiro" : "Falso")
