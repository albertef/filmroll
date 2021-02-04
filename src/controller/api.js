import axios from "axios";
import { getGenres } from "@/utils/metaUtils";

const API_KEY = "2b5aa5030d2a9da3d764bd1cc757f1c4";
const API_URL = "https://api.themoviedb.org/3";
const API_SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&language=en-US&page=1&include_adult=false&query=";

export async function getMovies(category) {
    category = category ? category : 'now_playing';
    let movies = [];
    const { data } = await axios.get(API_URL + "/movie/" + category + "?api_key=" + API_KEY + "&language=en-US&page=1");
    const movieData = data.results ? data.results : data;
    
    movieData.forEach(movie => {
    let genre = getGenres(movie.genre_ids);
        movies.push({
            id: movie.id,
            title: movie.original_title,
            poster: movie.poster_path,
            genre: genre,
            vote: movie.vote_average
        })
    });
    return movies;
}

export async function searchMovies(query) {
    if(query){
        let movies = [];
        const { data } = await axios.get(API_SEARCH_URL + query);
        const movieData = data.results ? data.results : data;
        movieData.forEach(movie => {
        let genre = getGenres(movie.genre_ids);
            movies.push({
                id: movie.id,
                title: movie.original_title,
                poster: movie.poster_path,
                genre: genre,
                vote: movie.vote_average
            })
        });
        return movies;
    }
    else {
        await getMovies();
    }
}

export async function getMoviesById(id) {
    const { data } = await axios.get(API_URL + "/movie/" + id + "?api_key=" + API_KEY + "&language=en-US");
    const movie = data.results ? data.results : data;
    return movie;
}

export async function getMovieCast(id) {
    const { data } = await axios.get(API_URL + "/movie/" + id + "/casts?api_key=" + API_KEY + "&language=en-US");
    const cast = data.results ? data.results : data;
    return cast;
}

export async function getVideos(id) {
    const { data } = await axios.get(API_URL + "/movie/" + id + "/videos?api_key=" + API_KEY + "&language=en-US");
    const videos = data.results ? data.results : data;
    return videos;
}

export async function getCastFullDetails(id) {
    const { data } = await axios.get(API_URL + "/credit/" + id + "?api_key=" + API_KEY + "&language=en-US");
    const credits = data.results ? data.results : data;
    return credits;
}

export async function getPersonDetails(id) {
    const { data } = await axios.get(API_URL + "/person/" + id + "?api_key=" + API_KEY + "&language=en-US");
    const person = data.results ? data.results : data;
    return person;
}

