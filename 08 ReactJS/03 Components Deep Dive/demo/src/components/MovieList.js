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

    const onMovieDelete = (id) => {
        setMovies(state => state.filter(x => x.ID !== id))
    }

    const onSelect = (id) => {
        setMovies(state => state.map(x => ({ ...x, selected: x.ID === id })))
    }



    return (
        <div className="movies">
            <h1>MovieList</h1>
            <ul >
                {movies.map(movie => <Movie key={movie.ID} movie={movie} onMovieDelete={onMovieDelete} onSelect={onSelect} />)}
            </ul>
        </div>
    );
}