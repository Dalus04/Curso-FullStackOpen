const x = 1
let y = 2

console.log(x, y)   // se imprime 1, 2
y += 10
console.log(x, y)   // se imprime 1, 12
y = 'sometext'
console.log(x, y)   // se imprime 1, sometext
x = 4               // provoca un error