// conhecendo as variaveis

var clima = "quente"
clima = "frio"
console.log(clima)

// tipos dinâmicos

// let valor: double (variavel fortemente tipada e static)
// variavel é tipagem fraca e dinamica
let climaLitoral = ""
console.log(typeof climaLitoral)

// scope e var

let idade = 30

let idoso = 60 // (escopo global fora do if)

if (idade >= 18) {
  let idoso = 60
  console.log("Maior de idade")
}

// console.log(idoso) (vai dar um erro, porque o escopo é local)

// scope let e const

const nuncaAltera = 250

// nuncaAltera = 65 (vai dar um erro, porque essa variavel é uma constante)

console.log(nuncaAltera)

// nomeando variaveis

let nomeCompleto
let dataNascimento
let estado_civil
let name
let question
