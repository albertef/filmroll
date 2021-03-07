import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import PageContent from "@/components/PageContent/PageContent.vue";

export default {
  name: "App",
  components: {
    Nav,
    Header,
    PageContent
  },
  data() {
    return {
      movieCategory: this.category,
      query: "",
      active: false,
      textValue: "",
      fullMode: true
    };
  },
  props: {
    category: String,
    searchTerm: String
  },
  methods: {
    getCategory(e) {
      this.movieCategory = e;
      this.textValue = "";
    },
    searchMovies(e) {
      this.query = e;
    },
    removeActive(e) {
      this.active = e;
    },
    fullDetail(e) {
      this.fullMode = e;
    }
  }
};
