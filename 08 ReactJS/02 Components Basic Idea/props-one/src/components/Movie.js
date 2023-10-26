function Movie(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>Year:{props.year}</p>
            <ul>
                <li>{props.cast[0]}</li>
                <li>{props.cast[1]}</li>
            </ul>
        </article>
    )
};

export default Movie;