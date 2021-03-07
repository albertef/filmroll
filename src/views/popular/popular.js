import PageContent from "@/components/PageContent/PageContent.vue";
import { common } from "@/utils/common";

export default {
  name: "NowPlaying",
  components: {
    PageContent
  },
  created() {
    this.$store.commit("updateCategory", common.getMovieCategory(this.$route.name));
    this.$store.commit("updateSearch", "");
  }
};
