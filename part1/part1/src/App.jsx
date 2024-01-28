/*const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} old</p>
    </div>
  )
}*/

const App = () => {
  const friends = [
    { name: 'Daniel', age: 19 },
    { name: 'Orlando', age: 20},
  ]
  const friend = ['Daniel', 'Orlando']

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friend}</p>
    </div>
  )
}

export default App