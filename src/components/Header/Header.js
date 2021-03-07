import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "Nav",
  components: {
    FontAwesomeIcon
  },
  computed: {
    getValue() {
      return this.$store.state.common.searchTerm;
    }
  },
  methods: {
    updateSearch(e) {
      this.$store.commit("updateSearch", e.target.value);
    }
  }
};
