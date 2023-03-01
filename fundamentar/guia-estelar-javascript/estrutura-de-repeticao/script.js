// for

// for (let i = 10; i > 0; i--) {
//   // console.log(i)
//   if (i === 5) {
//     continue
//   }

//   console.log(i)
// }

// while

// let pos = 10

// while (pos > 10) {
//   console.log(i)
//   pos++
// }

// for of

// let name = "Vilson"
// let names = ["Joao", "paulo", "pedro"]

// for (let char of name) {
//   console.log(char)
// }

// for (let nomes of names) {
//   console.log(nomes)
// }

// for in

let person = {
  name: "John",
  age: 30,
  weight: 88.6,
}

for (let propriedade in person) {
  console.log(propriedade)
  console.log(person[propriedade])
}
