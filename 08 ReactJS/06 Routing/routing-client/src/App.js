import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home';
import { Navigation } from './Navigation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<h1>About</h1>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
