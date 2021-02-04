import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    name: 'modal',
    components: {
        FontAwesomeIcon
      },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };