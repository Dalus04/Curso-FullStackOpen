const t = [1, -1, 2]

/*t.push(3)

console.log(t.length) // se imprime 4
console.log(t[1])     // se imprime -1

t.forEach(value => {
  console.log(value)  // se imprimen los números 1, -1, 2, 3 cada uno en su propia línea
})*/

const t2 = t.concat(3) // crea un nuevo array

console.log(t)  // se imprime [1, -1, 2]
console.log(t2) // se imprime [1, -1, 2, 3]

const m1 = t.map(value => value * 2) 
console.log(m1) // se imprime [2, -2, 4]

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// se imprime [ '<li>1</li>', '<li>-1</li>', '<li>2</li>' ]

const [first, second, ...rest] = t2

console.log(first, second)  // se imprime 1, -1
console.log(rest)          // se imprime [2, 3]