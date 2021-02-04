export default {
    name: 'Nav',
    props: {
      activeStatus: Boolean
    },
    data: function() {
      return {
        active: "",
        tempActive: ""
      }
    },
    created() {
      this.active = 'now_playing';
    },
    methods: {
      getMovieCategory(category) {
        this.active = category;
        this.$emit('category', category);
      }
    },
    watch: {
      activeStatus: {
        immediate: true,
        handler() {
          if (this.activeStatus === true) {
            this.active = false;
          }
          else {
            this.getMovieCategory(this.active);
          }
        }
      }
    }
  }