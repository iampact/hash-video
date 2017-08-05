import CommonController from "../controller/common-controller";

export default class CommonRoutes {
  static init(router) {

    router
      .route("/api/common/conf/:category/:key")
      .get(CommonController.getConf);

    router
      .route("/api/common/conf/:category")
      .get(CommonController.getConfList);

    router
      .route("/api/common/confui/:item/:value")
      .get(CommonController.getConfUI);

    router
      .route("/api/common/confui/:item")
      .get(CommonController.getConfUIList);
  }
}
