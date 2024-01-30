import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, counter}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{counter}</td>
    </tr>
  )
}

const Statistic = ({good, neutral, bad, all, average, positive}) => {
  if (all === 0){
    return(
      <div>No feedback given</div>
    )
  }

  return(
    <table>
      <tbody>
        <StatisticLine text="good" counter={good}/>
        <StatisticLine text="neutral" counter={neutral}/>
        <StatisticLine text="bad" counter={bad}/>
        <StatisticLine text="all" counter={all}/>
        <StatisticLine text="average" counter={average}/>
        <StatisticLine text="positive" counter={`${positive}%`}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)
    setScore(score + 1)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(good + updatedNeutral + bad)
    setScore(score)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(good + neutral + updatedBad)
    setScore(score - 1)
  }

  const average = score/all
  const positive = (good/all)*100

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text={'good'}/>
      <Button onClick={handleNeutralClick} text={'neutral'}/>
      <Button onClick={handleBadClick} text={'bad'}/>
      <h2>statistics</h2>
      <Statistic good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App
