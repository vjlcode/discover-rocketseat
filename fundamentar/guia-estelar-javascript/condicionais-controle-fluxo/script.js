// if e else

if (true) {
  console.log("True")
} else {
  console.log("false")
}

let temperatura = 10

if (temperatura >= 37.5) {
  console.log("Febre alta")
} else if (temperatura < 37.5 && temperatura >= 37) {
  console.log("Febre moderada")
} else {
  console.log("saudavel")
}

// switch

let itemMenu = 1

// 1 cadastrar 2 listar 3 sair

switch (itemMenu) {
  case 1:
    console.log("Cadastrar")
    break
  case 2:
    console.log("Listar")
    break
  case 3:
    console.log("Sair")
    break
  default:
    console.log("Opção invalida")
    break
}

// throw e try/catch

function sayMyName(name = "") {
  if (name === "") {
    throw new Error("nome é necessario")
  }

  console.log("depois do erro")
}

try {
  sayMyName()
} catch (e) {
  // alert(e)
}
