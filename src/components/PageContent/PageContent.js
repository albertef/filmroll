import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { getMovies, searchMovies, getMoviesById, getMovieCast, getVideos, getCastFullDetails, getPersonDetails } from "@/controller/api";
import SkeletonLoader from "@/components/Skeleton/Skeleton.vue";
import { getGenres } from "@/utils/metaUtils";
import Modal from "@/components/Modal/Modal.vue";

export default {
    name: 'PageContent',
    components: {
      FontAwesomeIcon,
      SkeletonLoader,
      Modal
    },
    props: {
      category: String,
      title: String,
      searchTerm: String
    },
    data: function() {
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
      }
    },
    async created() {
      if(this.searchTerm){
        this.catTitle = "Search Results";
        this.movies = await searchMovies(this.searchTerm);
      }
      else {
        this.catTitle = this.title ? this.categoryTitle() : "Now Playing";
        this.movies = await getMovies(this.category);
      }
    },
    computed: {
      
    },
    watch: {
      category: {
        immediate: true,
        async handler() {
          this.movies = await getMovies(this.category);
        }
      },
      title: {
        immediate: true,
        handler() {
          this.catTitle = this.title ? this.categoryTitle() : "Now Playing";
        }
      },
      searchTerm: {
        immediate: true,
        async handler() {
          if(this.searchTerm){
            this.$emit('removeActive', true);
            this.catTitle = "Search Results";
            this.movies = await searchMovies(this.searchTerm);
          }
          else {
            this.$emit('removeActive', this.category);
            this.catTitle = this.title ? this.categoryTitle() : "Now Playing";
            this.movies = await getMovies(this.category);
          }
        }
      }
    },
    methods: {
      categoryTitle(){
        this.catTitle = this.title.toLowerCase().replace(/_/g, ' ')
        .replace(/(?: |\b)(\w)/g, function(key) {
          return key.toUpperCase();   
        });
        return this.catTitle;
      },
      async getFullDetails(e, movie) {
        this.$emit('fullMode', false);
        this.fullMode = true;
        this.fullMovieContent = await getMoviesById(movie.id);
        this.genres = getGenres(this.fullMovieContent.genres);
        this.casts = await getMovieCast(movie.id);
        this.videos = await getVideos(movie.id);
        this.movieTitle = this.getMovieTitle(this.fullMovieContent);
      },
      async backToMovieList() {
        this.$emit('fullMode', true);
        this.movies = await getMovies(this.category);
        this.fullMode=false;
        this.fullMovieContent = [];
        this.casts = {};
        this.videos = {};
        this.movieTitle = "";
      },
      getMovieTitle(movieDetails) {
        this.movieTitle = movieDetails.title;
        if(movieDetails.title === movieDetails.original_title) {
          return movieDetails.title;
        }
        else {
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
  }