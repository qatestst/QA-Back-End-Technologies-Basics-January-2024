function movies(list) {
 
    let informationForMovie = [];
 
    for (const line of list) {
        if (line.includes('addMovie')) {
            let name = line.split('addMovie ')[1];
            informationForMovie.push({ name })
 
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ')
            let movie = informationForMovie.find(el => el.name === name)
            if (movie) {
                movie.director = director
            }
 
        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ')
            let movie = informationForMovie.find(el => el.name === name)
            if (movie) {
                movie.date = date
            }
        }
    }
 
    informationForMovie.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
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
    'Fast and Furious directedBy Rob Cohen'
    ]
    )