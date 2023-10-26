import './App.css';
import Movie from './components/Movie';

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
  ]


  return (
    <div className="App">
      <h1>Movie List</h1>
      <Movie
        title={movies[0].title}
        year={movies[0].year}
        cast={movies[0].cast}
      />
      <Movie
        title={movies[1].title}
        year={movies[1].year}
        cast={movies[1].cast}
      />
      <Movie
        title={movies[2].title}
        year={movies[2].year}
        cast={movies[2].cast}
      />
    </div>
  );
}

export default App;
