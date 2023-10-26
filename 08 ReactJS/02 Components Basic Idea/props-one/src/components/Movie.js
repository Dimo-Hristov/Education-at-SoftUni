function Movie(props) {
    return <article>{props.title} - {props.year} {props.cast}</article>
};

export default Movie;