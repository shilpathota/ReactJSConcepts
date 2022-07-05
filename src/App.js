import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      /**
      Functional Components
       */
        <Greet  name="Coding Concepts"/>
        <Greet  name="Database Concepts"><button>Go</button></Greet>

        /**
        Class components
         */
        <Welcome  name="Coding Concepts"/>
        <Welcome  name="Database Concepts"><button>Go</button></Welcome>
        /**
        State 
         */
        <Message />
        /**
        Counter
         */
        <Counter />
    </div>
  );
}

export default App;
