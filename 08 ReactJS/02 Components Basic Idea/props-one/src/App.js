import './App.css';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <Movie
        title="Man of Steel"
        year="2008"
        cast={5 + 4}
      />
    </div>
  );
}

export default App;
