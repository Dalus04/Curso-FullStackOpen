const object1 = {
    name: 'Daniel Orlando',
    age: 19,
    education: 'B.S.',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Daniel',
        last: 'Suarez',
    },
    grades: [2, 3, 5, 3],
    department: 'University'
}

console.log(object1.name)         // se imprime Daniel Orlando
const fieldName = 'age' 
console.log(object1[fieldName])    // se imprime 19

object1.address = 'Peru'
object1['secret number'] = 12341

console.log(object1.address, object1['secret number'])