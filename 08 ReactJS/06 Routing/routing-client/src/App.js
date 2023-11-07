import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home';
import { Navigation } from './Navigation';
import { About } from './About';
import { CharacterList } from './CharacterList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/characters' element={<CharacterList />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
