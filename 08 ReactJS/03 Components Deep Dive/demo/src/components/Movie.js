import { useEffect } from 'react'
import styles from './Movie.module.css'

export default function Movie({
    movie,
    onMovieDelete,
    onSelect
}) {


    return (
        <li key={movie.ID} className={styles['movie-list']}>
            <h3>{movie.Title} - {movie.Year}</h3>
            <img src={movie.Image} alt={movie.Title} />
            {movie.selected && <h4>Selected</h4>}
            <div className="buttons">
                <button onClick={() => onMovieDelete(movie.ID)}>Delete</button>
                <button onClick={() => onSelect(movie.ID)}>Select</button>
            </div>
        </li>
    )
}