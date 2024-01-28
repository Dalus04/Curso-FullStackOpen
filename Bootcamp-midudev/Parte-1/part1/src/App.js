import './App.css';
import Message from './message.js'

const Description = () => {
  return <p>Esta es la app del curso fullstack</p>
}

const App = () => {
  return (
    <div className="App">
      <Message color='red' msg='Estudiando'/>
      <Message color='blue' msg='curso de'/>
      <Message color='green' msg='React'/>
      <Description />
    </div>
  );
}

export default App;
