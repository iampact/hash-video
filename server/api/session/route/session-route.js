import SessionController from "../controller/session-controller";

export default class SessionRoutes {
  static init(router) {
    router
      .route("/api/sessions")
      .post(SessionController.login);

    router
      .route("/api/sessions/current")
      .get(SessionController.current)
      .delete(SessionController.logout);
  }
}
