import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/home.vue";
import About from "@/views/about/about.vue";
import NowPlaying from "@/views/now-playing/now-playing.vue";
import Popular from "@/views/popular/popular.vue";
import TopRated from "@/views/top-rated/top-rated.vue";
import Upcoming from "@/views/upcoming/upcoming.vue";
import WatchLater from "@/views/watch-later/watch-later.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/now-playing",
    component: Home,
    children: [
      {
        path: "/now-playing",
        name: "Now Playing",
        component: NowPlaying
      },
      {
        path: "/popular",
        name: "Popular",
        component: Popular
      },
      {
        path: "/top-rated",
        name: "Top Rated",
        component: TopRated
      },
      {
        path: "/upcoming",
        name: "Upcoming",
        component: Upcoming
      },
      {
        path: "/watch-later",
        name: "Watch Later",
        component: WatchLater
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = new VueRouter({
  routes
});

export default router;
