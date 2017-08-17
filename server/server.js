if (process.env.NODE_ENV === "production") {
  require("newrelic");
}

const PORT = process.env.PORT || 3000;

import cookieParser from "cookie-parser";
import os from "os";
import express from "express";
import session from "express-session";
import http from "http";
import RoutesConfig from "./config/routes.conf";
import DBConfig from "./config/db.conf";
import ESClientConfig from "./config/es.client.conf";
import Routes from "./routes/index";
import _ from "lodash";
import AuthPassport from "./auth/local/passport";

const app = express();

// 패스포트 세팅
AuthPassport.setup();

RoutesConfig.init(app);
ESClientConfig.init();
Routes.init(app, express.Router());
// mysql db connection
DBConfig.connection();
let sessionStore = DBConfig.newMysqlStore(session);

// setting cookie and session
app.use(cookieParser());
app.use(session({
  secret: _.uniqueId('session'), // just a long random string
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 // 쿠키 유효기간 1시간
  },
  store: sessionStore
}));

http.createServer(app).listen(PORT, () => {
  console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
  console.log(`enviroment: ${process.env.NODE_ENV}`);
});
