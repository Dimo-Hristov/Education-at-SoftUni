import './App.css';
import MovieList from './components/MovieList';


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
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
