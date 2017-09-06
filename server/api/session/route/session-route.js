import SessionController from "../controller/session-controller";
import auth from "../../../auth/local/auth";

export default class SessionRoutes {
  static init(router) {
    router
      .route("/api/sessions")
      .post(SessionController.login);

    router.use("/api/sessions/current", auth.authMiddleware);
    router.get("/api/sessions/current", SessionController.current);
    router.delete("/api/sessions/current", SessionController.logout);
  }
}
