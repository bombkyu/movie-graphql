let movies = [
    {
        id: 0,
        name: "Avengers",
        score:4.3

    },
    {
        id: 1,
        name: "Toys Story",
        score: 4.5
    },
    {
        id: 2,
        name: "Harry Potter",
        score:3
    },
    {
        id: 3,
        name: "Before Sunset",
        score:5
    }
]

export const getMovies = () => {
    return movies;
}

export const getById = (id) => {
    const fillteredMovie = movies.filter(movie => id === movie.id);
    return fillteredMovie[0];
}

export const addMovie = (name, score) => {
    const newMovie = {
        id:getMovies().length,
        name,
        score
    }
    movies.push(newMovie);
    return movies;
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return movies;
    } else {
        return movies;
    }
}