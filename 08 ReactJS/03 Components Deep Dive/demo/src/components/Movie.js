import styles from './Movie.module.css'

export default function Movie({
    movie,
    onMovieDelete,
}) {
    console.log(movie);
    return (
        <li key={movie.ID} className={styles['movie-list']}>
            <h3>{movie.Title} - {movie.Year}</h3>
            <img src={movie.Image} alt={movie.Title} />
            <div className="buttons">
                <button onClick={() => onMovieDelete(movie.ID)}>Delete</button>

            </div>
        </li>
    )
}