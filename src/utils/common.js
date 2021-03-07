export const common = {
	getMovieCategory: function (category) {
		return movieCategories[category];
	}
};

const movieCategories = Object.freeze({
	"Now Playing": "now_playing",
	"Popular": "popular",
	"Top Rated": "top_rated",
	"Upcoming": "upcoming"
});
