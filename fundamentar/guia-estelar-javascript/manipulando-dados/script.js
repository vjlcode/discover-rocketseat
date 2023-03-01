// prototype
let nome = "Vilson"

console.log(nome.length)

// type conversion coersion

console.log(Number("9") + 5)

// strings em numeros

let string = "123"

console.log(Number(string))

let number = 123
console.log(String(number))

// contando caracteres e digitos
let word = "Braga"
console.log(word.length)
let numero = 1234
console.log(String(numero).length)

// casas decimais

let numeroDecimais = 545.5554
console.log(numeroDecimais.toFixed(2).replace(".", ","))

// maiuculos e minusculos

let pequeno = "Programar é Muito Bacana"
console.log(pequeno.toUpperCase())
console.log(pequeno.toLowerCase())

// separando strings

let phrase = "Eu quero viver o amor!"

let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())

// encontrando palavras em frases

let frases = "Não tenho vida para brincar"
console.log(frases.includes("tenho"))

// criando array com construtor

let my_array = new Array("a", "b", "c")
console.log(my_array)

// elementos do array

console.log(
  [
    "a",
    { type: "array" },
    function () {
      return "alo"
    },
  ][1].type
)

// string para arrays

let letras = "manipulação"

console.log(Array.from(letras))

// manipulando array

let tech = ["html", "css", "js"]

// adiciona um item no fim
console.log(tech.push("react"))

// adiciona no começo
tech.unshift("sql")

// remove do fim
tech.pop()

// remove do inicio
tech.shift()

// pegar somente alguns elementos do array

console.log(tech.slice(0, 1)) // posições

// remover 1 ou mais item em qualquer posição do array

// tech.slice(1, 2)

let index = tech.indexOf("css")

console.log(index)

// encontrar a posição de um elemento no array

// console.log(tech)
