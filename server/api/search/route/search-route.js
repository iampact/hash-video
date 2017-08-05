import SearchController from "../controller/search-controller";

export default class SearchRoutes {
  static init(router) {
    router
      .route("/api/search")
      .post(SearchController.search);

    router
      .route("/api/search/es")
      .post(SearchController.searchES);

    router
      .route("/api/search/es/ping")
      .post(SearchController.checkES);
  }
}
