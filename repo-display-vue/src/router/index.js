import { createRouter, createWebHistory } from "vue-router";
import RepoList from "@/components/RepoList.vue";
import HomeView from "@/views/HomeView.vue";
import RepoDetails from "@/components/RepoDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/repos",
      name: "repos",
      component: RepoList,
    },
    {
      path: "/repos/:owner/:repoName",
      name: "repoDetails",
      component: RepoDetails,
      props: true,
    },
    {
      path: "/:notFound",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
