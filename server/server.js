if (process.env.NODE_ENV === "production") {
  require("newrelic");
}

const PORT = process.env.PORT || 3000;

import os from "os";
import express from "express";
import session from "express-session";
import http from "http";
import RoutesConfig from "./config/routes.conf";
import DBConfig from "./config/db.conf";
import ESClientConfig from "./config/es.client.conf";
import Routes from "./routes/index";
import AuthPassport from "./auth/local/passport";
import SecretConfig from "./constants/secret.config";

const app = express();

// es client config
ESClientConfig.init();

// 패스포트 세팅
AuthPassport.setup();

// route config
RoutesConfig.init(app);
Routes.init(app, express.Router());

// mysql db connection
DBConfig.connection();

// session store config
let sessionStore = DBConfig.newMysqlStore(session);
app.use(session({
  secret: SecretConfig.session,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 10 // 쿠키 유효기간 10분
  },
  store: sessionStore
}));

// setting jwt-secret
app.set('jwt-secret', SecretConfig.jwt);

http.createServer(app).listen(PORT, () => {
  console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
  console.log(`enviroment: ${process.env.NODE_ENV}`);
});
