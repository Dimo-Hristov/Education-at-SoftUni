import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home';
import { Navigation } from './Navigation';
import { About } from './About';
import { CharacterList } from './CharacterList';
import { CharacterDetails } from './CharacterDetail';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/characters' element={<CharacterList />} />
          <Route path='/characters/:characterId' element={<CharacterDetails />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
