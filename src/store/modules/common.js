const state = {
	spinner: false,
	searchTerm: "",
	movieCategory: ""
};

const mutations = {
	updateSearch(state, searchTerm) {
		state.searchTerm = searchTerm;
	},
	updateCategory(state, category) {
		state.movieCategory = category;
	},
};

export default {
	state,
	mutations,
};
