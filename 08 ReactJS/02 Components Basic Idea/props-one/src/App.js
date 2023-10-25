import logo from './logo.svg';
import './App.css';

function SimpleParagraph(props) {
  return <p>Hello: {props.name}</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="test">
          <SimpleParagraph name="React" />
        </div>


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
