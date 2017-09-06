import UserController from "../controller/user-controller";

export default class UserRoutes {
  static init(router) {
    router
      .route("/api/user")
      .post(UserController.addUser);

    router
      .route("/api/user/:user_id")
      .get(UserController.getUser);

    router
      .route("/api/user/search")
      .post(UserController.searchUsers)
  }
}
