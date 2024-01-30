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

const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const name = 'Daniel'
  const age = 19
  const [counter, setCounter] = useState(0)
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const [value, setValue] = useState(10)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const handleLeftClick = () => {
    const updatedLeft = clicks.left + 1
    setClicks({...clicks, left: updatedLeft})
    setAll(allClicks.concat('L'))
    setTotal(updatedLeft + clicks.right)
  }
  const handleRightClick = () => {
    const updatedRight = clicks.right + 1
    setClicks({...clicks, right: updatedRight})
    setAll(allClicks.concat('R'))
    setTotal(clicks.left + updatedRight)
  }

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text='plus'/>
      <Button onClick={setToZero} text='zero'/>
      <Button onClick={decreaseByOne} text='minius'/>
      <div>
        {clicks.left}
        <Button onClick={handleLeftClick} text={'left'}/>
        <Button onClick={handleRightClick} text={'right'}/>
        {clicks.right}
        <History allClicks={allClicks}/>
        <p>total {total}</p>
      </div>
      <div>
        {value}
        <Button onClick={() => setToValue(0)} text={'reset'}/>
      </div>
    </div>
  )
}

export default App