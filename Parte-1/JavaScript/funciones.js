const sum = (p1,p2) => {
    return p1 + p2
}

let result = sum(1, 2)
console.log(result)

const square = p => p * p

const t = [1, 2, 3]
const tSquared = t.map(p => p * p) // tSquared ahora es [1, 4, 9]
console.log(tSquared)

function product(a, b) {
    return a * b
}

result = product(2, 6) // result ahora es 12
console.log(result)

const average = function(a, b) {
    return (a + b) / 2
}

result = average(2, 5) // result ahora es 3.5
console.log(result)