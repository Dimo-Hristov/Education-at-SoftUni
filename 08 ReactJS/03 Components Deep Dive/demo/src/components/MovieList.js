import { useState, useEffect } from 'react';
import Movie from './Movie';


export default function MovieList() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies.json')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.log(err.message))
    }, []);

    console.log(movies);
    return (
        <div className="movies">
            <h1>MovieList</h1>
            <ul >
                {movies.map(movie => <Movie key={movie.ID} movie={movie} />)}
            </ul>
        </div>
    );
}