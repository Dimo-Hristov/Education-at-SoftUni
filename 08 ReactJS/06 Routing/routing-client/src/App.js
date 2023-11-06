import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>op</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<h1>About</h1>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
