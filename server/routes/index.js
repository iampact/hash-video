// TODO: 추가되는 route는 여기에 import
import SearchRoutes from "../api/search/route/search-route";
import CommonRoutes from "../api/common/route/common-route";
import SessionRoutes from "../api/session/route/session-route";
import StaticDispatcher from "../commons/static/index";

export default class Routes {
   static init(app, router) {

     CommonRoutes.init(router);
     SearchRoutes.init(router);
     SessionRoutes.init(router);

     router
       .route("*")
       .get(StaticDispatcher.sendIndex);

     app.use("/", router);
   }
}
