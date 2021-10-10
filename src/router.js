import { Router } from "@vaadin/router";

import "./views/main-view";

/**
 * Defines the App routes
 * @param {object} HTML node to host components
 */
export const initRouter = (node) => {
  const router = new Router(node, { baseUrl: "" });

  router.setRoutes([
    {
      path: "/marcosmonzon/",
      component: "main-view",
    },
    {
      path: "/marcosmonzon/work",
      component: "work-view",
      action: () =>
        import(
          /* webpackChunkName: "work-view" */ "./views/work-view/work-view.js"
        ),
    },
    {
      path: "/marcosmonzon/about",
      component: "about-view",
      action: () =>
        import(/* webpackChunkName: "about-view" */ "./views/about-view.js"),
    },
    {
      path: "(.*)",
      component: "view-404",
      action: () =>
        import(/* webpackChunkName: "view-404" */ "./views/view-404.js"),
    },
  ]);
};
