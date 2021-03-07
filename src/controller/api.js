import axios from "axios";
import { getGenres } from "@/utils/metaUtils";
import { API_CONSTANTS } from "@/constants/api-constants";

const API_COMMON_END = `?api_key=${API_CONSTANTS.API_KEY}&language=en-US`;

export async function getMovies(category) {
    category = category ? category : "now_playing";
    let movies = [];
    const { data } = await axios.get(`${API_CONSTANTS.API_BASE_URL}movie/${category}?api_key=${API_CONSTANTS.API_KEY}&language=en-US&page=1`);
    const movieData = data.results ? data.results : data;

    movieData.forEach(movie => {
        let genre = getGenres(movie.genre_ids);
        movies.push({
            id: movie.id,
            title: movie.original_title,
            poster: movie.poster_path,
            genre: genre,
            vote: movie.vote_average
        });
    });
    return movies;
}

export async function searchMovies(query) {
    if (query) {
        let movies = [];
        const { data } = await axios.get(`${API_CONSTANTS.API_BASE_URL}search/movie?api_key=${API_CONSTANTS.API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
        const movieData = data.results ? data.results : data;
        movieData.forEach(movie => {
            let genre = getGenres(movie.genre_ids);
            movies.push({
                id: movie.id,
                title: movie.original_title,
                poster: movie.poster_path,
                genre: genre,
                vote: movie.vote_average
            });
        });
        return movies;
    } else {
        await getMovies();
    }
}

export async function getMoviesById(id) {
    const { data } = await axios.get(`${API_CONSTANTS.API_BASE_URL}movie/${id}${API_COMMON_END}`);
    const movie = data.results ? data.results : data;
    return movie;
}

export async function getMovieCast(id) {
    const { data } = await axios.get(`${API_CONSTANTS.API_BASE_URL}movie/${id}/casts${API_COMMON_END}`);
    const cast = data.results ? data.results : data;
    return cast;
}

export async function getVideos(id) {
    const { data } = await axios.get(`${API_CONSTANTS.API_BASE_URL}movie/${id}/videos${API_COMMON_END}`);
    const videos = data.results ? data.results : data;
    return videos;
}

export async function getCastFullDetails(id) {
    const { data } = await axios.get(`${API_CONSTANTS.API_BASE_URL}credit/${id}${API_COMMON_END}`);
    const credits = data.results ? data.results : data;
    return credits;
}

export async function getPersonDetails(id) {
    const { data } = await axios.get(`${API_CONSTANTS.API_BASE_URL}person/${id}${API_COMMON_END}`);
    const person = data.results ? data.results : data;
    return person;
}
