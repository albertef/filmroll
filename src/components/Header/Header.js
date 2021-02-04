import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
    name: 'Nav',
    components: {
      FontAwesomeIcon
    },
    props: {
      value: String
    },
    methods: {
      updateSearch(e) {
        this.$emit('searchTerm', e.target.value)
      }
    }
  }