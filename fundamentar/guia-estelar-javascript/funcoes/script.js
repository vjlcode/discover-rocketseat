// function
function createPhrases() {
  console.log("Estudar muito")
}

createPhrases()

// argumentos e parametros

const sum = function (number1, number2) {
  //function expression

  // console.log(number1 + number2)
  return number1 + number2
}

sum(20, 30)

// retornando valores dentro da função

let number1 = 34
let number2 = 25
console.log(number1, number2)

console.log(`o numero 1 é ${sum(number1, number2)}`)

// function scope

let subject = "create video"
function createThink(subject) {
  return subject
}

console.log(createThink(subject))

// function hoisting

sayMyName()

function sayMyName() {
  console.log("vilson")
}

// arrow function

const myName = (nome) => {
  console.log(nome)
}

myName("Pedro")

// callback function

function myNameComplete(nameComplete) {
  console.log(nameComplete)
}

myNameComplete("Vilson")

// function construtora

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}

const vilson = new Person("Vilson")
console.log(vilson.walk())

const joao = new Person("Joao")
console.log(joao.walk())
