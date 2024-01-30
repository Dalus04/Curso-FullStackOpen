import { useState } from "react"

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} old
      </p>
      <p>
        So were you probably born in {bornYear()}
      </p>
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const name = 'Daniel'
  const age = 19
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)
  
  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text='plus'/>
      <Button onClick={setToZero} text='zero'/>
      <Button onClick={decreaseByOne} text='minius'/>
    </div>
  )
}

export default App