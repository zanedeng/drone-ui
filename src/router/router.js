import Router from "vue-router";

import Account from "../views/Account.vue";
import Build from "../views/Build.vue";
import BuildConfig from "../views/BuildConfig.vue";
import Builds from "../views/Builds.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import LoginErr from "../views/LoginErr.vue";
import Logout from "../views/Logout.vue";
import Main from "../views/Main.vue";
import Repo from "../views/Repo.vue";
import Settings from "../views/Settings.vue";
import Search from "../views/Search.vue";
import BuildsFeed from "../views/BuildsFeed.vue";
import Branches from "../views/Branches.vue";
import Environments from "../views/Environments.vue";

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/welcome",
      redirect: '/login/form'
    },
    {
      path: "/login/form",
      name: "login",
      component: Login
    },
    {
      path: "/login/error",
      name: "loginerr",
      component: LoginErr
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/",
      component: Main,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
          meta: { requiresAuth: true }
        },
        {
          path: "/account",
          name: "account",
          component: Account,
          meta: { requiresAuth: true }
        },
        {
          path: "/search",
          name: "search",
          component: Search,
          meta: { requiresAuth: true }
        },
        {
          path: "/builds-feed",
          name: "builds-feed",
          component: BuildsFeed,
          meta: { requiresAuth: true }
        },
        {
          path: "/:namespace/:name",
          component: Repo,
          children: [
            {
              path: "",
              name: "builds",
              component: Builds
            },
            {
              path: "settings",
              name: "settings",
              component: Settings,
              meta: { requiresAuth: true }
            },
            {
              path: "branches",
              name: "branches",
              component: Branches,
              meta: { requiresAuth: true }
            },
            {
              path: "environments",
              name: "environments",
              component: Environments,
              meta: { requiresAuth: true }
            },
            {
              path: ":build",
              name: "build",
              component: Build
            },
            {
              path: ":build/config",
              name: "build-config",
              component: BuildConfig
            },
            {
              path: ":build/:stage/:step",
              name: "step",
              component: Build
            }
          ]
        }
      ],
    },
  ]
});
