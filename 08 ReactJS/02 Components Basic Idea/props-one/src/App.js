import './App.css';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
// import Timer from './components/Times';


function App() {
  const movies = [
    {
      title: 'Man of steel',
      year: 2008,
      cast: ['Henvry Vavil', 'Russell Crowe'],
    },
    {
      title: 'Harry Potter',
      year: 2011,
      cast: ['Pesho', 'Gosho'],
    },
    {
      title: 'Rambo',
      year: 2001,
      cast: ['Vankata', 'Bat Misho'],
    }
  ];

  return (
    <div className="App">
      <h2>React Demo</h2>
      {/* <Timer start={5} /> */}
      <Counter />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
