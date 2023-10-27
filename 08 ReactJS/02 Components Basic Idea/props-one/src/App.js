import './App.css';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import Calculator from './components/calculator';
// import Timer from './components/Times';
import { movies } from './costants';


function App() {


  return (
    <div className="App">
      <h2>React Demo</h2>
      {/* <Timer start={5} /> */}
      <Counter />
      <MovieList movies={movies} />
      <Calculator />
    </div>
  );
}

export default App;
