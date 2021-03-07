import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  getMovies,
  searchMovies,
  getMoviesById,
  getMovieCast,
  getVideos,
  getCastFullDetails,
  getPersonDetails
} from "@/controller/api";
import SkeletonLoader from "@/components/Skeleton/Skeleton.vue";
import { getGenres } from "@/utils/metaUtils";
import Modal from "@/components/Modal/Modal.vue";

export default {
  name: "PageContent",
  components: {
    FontAwesomeIcon,
    SkeletonLoader,
    Modal
  },
  props: {
    title: String,
  },
  data: function () {
    return {
      movies: [],
      genres: "",
      catTitle: "",
      fullMode: false,
      fullMovieContent: [],
      casts: {},
      videos: {},
      movieTitle: "",
      isModalVisible: false,
      fullCast: {},
      personDetails: {}
    };
  },
  async created() {
    this.getMovies;
  },
  computed: {
    getSearchTerm() {
      return this.$store.state.common.searchTerm;
    },
    getMovieCategory() {
      return this.$store.state.common.movieCategory;
    },
    getTitle() {
      return this.$route.name;
    },
    async getMovies() {
      if (this.getSearchTerm) {
        this.catTitle = "Search Results";
        this.movies = await searchMovies(this.getSearchTerm);
      } else {
        this.catTitle = this.getTitle;
        this.movies = await getMovies(this.getMovieCategory);
      }
      return this.movies;
    }
  },
  watch: {
    getSearchTerm: {
      immediate: true,
      async handler() {
        this.getMovies;
      }
    }
  },
  methods: {
    async getFullDetails(e, movie) {
      this.fullMode = true;
      this.fullMovieContent = await getMoviesById(movie.id);
      this.genres = getGenres(this.fullMovieContent.genres);
      this.casts = await getMovieCast(movie.id);
      this.videos = await getVideos(movie.id);
      this.movieTitle = this.getMovieTitle(this.fullMovieContent);
    },
    async backToMovieList() {
      this.movies = await getMovies(this.getMovieCategory);
      this.fullMode = false;
      this.fullMovieContent = [];
      this.casts = {};
      this.videos = {};
      this.movieTitle = "";
    },
    getMovieTitle(movieDetails) {
      this.movieTitle = movieDetails.title;
      if (movieDetails.title === movieDetails.original_title) {
        return movieDetails.title;
      } else {
        return movieDetails.title + " (" + movieDetails.original_title + ")";
      }
    },
    async getCastDetails(creditId) {
      this.showModal();
      this.fullCast = await getCastFullDetails(creditId);
      this.personDetails = await getPersonDetails(this.fullCast.person.id);
      console.log(this.personDetails);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.fullCast = {};
      this.personDetails = {};
      this.isModalVisible = false;
    }
  }
};
