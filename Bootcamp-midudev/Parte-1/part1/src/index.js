import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import reportWebVitals from './reportWebVitals';

const Counter = ({number}) => {
  return <h1>{number}</h1>
}

const WarningNotUsed = () => {
  return <h1>Todavia no se ultilizo el contador</h1>
}

const ListOfClicks = ({clicks}) => {
  console.log(clicks)
  //debugger
  return <p>{clicks.join(", ")}</p>
}

/*const INITIAL_COUNTER_STATE = {
  left: 0,
  right: 0,
  mensaje: 'Mensaje en el estado'
}*/

const App = (props) => {
  const [contador, setContador] = useState(0)

  const handleClick = () => {
    setContador(contador + 1)
  }

  const handleClickReset = () => {
    setContador(0)
  }

  const isEven = contador % 2 === 0
  const mensajePar = isEven ? "Es par":"Es impar"
  
  //const [counters, setCounter] = useState(INITIAL_COUNTER_STATE)
  const [clicks, setClicks] = useState([])

  const handleClickLeft = (event) => {
    /*const newCountersState = {
      ...counters,
      left: counters.left + 1,
    }
    setCounter(newCountersState)*/
    setClicks(prevClicks => ([...prevClicks, 'L']))
  }

  const handleClickRight = () => {
    /*setCounter({
      ...counters,
      right: counters.right + 1,
    })*/
    setClicks(prevClicks => ([...prevClicks, 'R']))
  }

  const handleReset = () => {
    //setCounter(INITIAL_COUNTER_STATE)
    setClicks([])
  }

  const left = clicks.filter(click => click === 'L')
  const right = clicks.filter(click => click === 'R')
  
  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter number={contador}/>
      <p>{mensajePar}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reset</button>
      <section>
        {left.length}
        <button onClick={handleClickLeft}>Left</button>
        <button onClick={handleClickRight}>Right</button>
        {right.length}
        <p>
          <button onClick={handleReset}>reset</button>
        </p>
      </section>
      <p>Clicks Totales: {clicks.length}</p>
      {clicks.length === 0 ? <WarningNotUsed/>:<ListOfClicks clicks={clicks}/>}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App />
  );

  reportWebVitals();