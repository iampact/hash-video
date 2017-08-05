if (process.env.NODE_ENV === "production") {
  require("newrelic");
}

const PORT = process.env.PORT || 3000;

import os from "os";
import express from "express";
import http from "http";
import RoutesConfig from "./config/routes.conf";
import DBConfig from "./config/db.conf";
import ESClientConfig from "./config/es.client.conf";
import Routes from "./routes/index";

const app = express();

RoutesConfig.init(app);
ESClientConfig.init();
Routes.init(app, express.Router());
// mysql db connection
DBConfig.connection();

http.createServer(app).listen(PORT, () => {
  console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
  console.log(`enviroment: ${process.env.NODE_ENV}`);
});
