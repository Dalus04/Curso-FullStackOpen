const daniel = {
    name: 'Daniel Suarez',
    age: 19,
    education: 'B.S.',
    greet: function() {
        console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a, b) {
        console.log(a + b)
    }
}

daniel.greet() // se imprime "hello, my name is Daniel Suarez"

daniel.growOlder = function() {
    this.age += 1
}

console.log(daniel.age) // se imprime 19
daniel.growOlder()
console.log(daniel.age) // se imprime 20

daniel.doAddition(1,2) // se imprime 3

const referenceToAddition = daniel.doAddition
referenceToAddition(3,4) // se imprime 7

const referenceToGreet = daniel.greet
referenceToGreet() // se imprime "hello, my name is undefined"

setTimeout(daniel.greet, 1000) // se imprime "hello, my name is undefined"
setTimeout(daniel.greet.bind(daniel), 1000) // se imprime "hello, my name is Daniel Suarez"
