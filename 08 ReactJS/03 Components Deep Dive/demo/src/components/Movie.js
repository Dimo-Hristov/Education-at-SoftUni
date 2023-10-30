export default function Movie({ movie }) {
    console.log(movie);
    return (
        <li key={movie.ID}>
            <h3>{movie.Title} - {movie.Year}</h3>
        </li>
    )
}