function movies(input) {
    let movieList = []

    for (let line of input) {

        if (line.includes('addMovie')) {
            let currentMovie = line.split('addMovie ')
            let movieName = currentMovie[1];
            let obj = {
                name: movieName
            }
            movieList.push(obj)

        } else if (line.includes('directedBy')) {
            let currentMovie = line.split(' directedBy ')
            let movieName = currentMovie[0]
            let movieDirector = currentMovie[1];
            let movie = movieList.find(movie => movie.name == movieName) // check if move exist to add director
            if (movie) {
                movie.director = movieDirector
            }

        } else if (line.includes('onDate')) {
            let currentMovie = line.split(' onDate ')
            let movieName = currentMovie[0]
            let movieDate = currentMovie[1];
            let movie = movieList.find(movie => movie.name == movieName) // check if move exist to add date
            if (movie) {
                movie.date = movieDate
            }
        }
    }

    movieList.forEach(movie => {
        if (movie.name && movie.director && movie.date) { // pirnt movies who have date and director
            console.log(JSON.stringify(movie));

        }
    })
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])

// Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:

// · "addMovie {movie name}" – add the movie

// · "{movie name} directedBy {director}" – check if the movie exists and then add the director

// · "{movie name} onDate {date}" – check if the movie exists and then add the date

// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.



