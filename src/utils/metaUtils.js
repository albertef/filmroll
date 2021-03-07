import genreJson from "@/data/genre.json";

export function getGenres(genre_ids) {
  if (genre_ids.length) {
    let genres = "";

    let genreValue = genre_ids[0].name ? true : false;
    if (genreValue) {
      let tempIds = [];
      genre_ids.forEach(x => {
        tempIds.push(x.id);
      });
      genre_ids = tempIds;
    }

    genre_ids.forEach(genre => {
      genres += genreHash[genre].name + ", ";
    });
    return genres.substring(0, genres.length - 2);
  }
  return null;
}

const genreHash = Object.freeze(
  Object.fromEntries(genreJson.map(e => [e.id, e]))
);
