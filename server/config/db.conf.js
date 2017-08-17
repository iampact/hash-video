import dbConst from "../constants/db.json";
import mysql from "mysql";
import MySQLStore from "express-mysql-session";

export default class DBConfig {
    _connection;
    static connection () {
      let url = DBConfig.getConnectUrl();

      this._connection = mysql.createConnection({
        host     : url,
        port     : dbConst.port,
        user     : dbConst.user,
        password : dbConst.password,
        database : dbConst.database
      });

      // connection
      this._connection.connect(function (error) {
        if (error) {
          console.error('error connecting: ' + error.stack);
          return;
        }
        //console.log('connected as id ' + this._connection.threadId);
      });
    }

    // mysql store
    static newMysqlStore (session) {
      let url = DBConfig.getConnectUrl();
      let options = {
        host      : url,
        port      : dbConst.port,
        user      : dbConst.user,
        password  : dbConst.password,
        database  : dbConst.database
      };
      let mySQLStore = MySQLStore(session);
      return new mySQLStore(options);
    }

    static end () {
      if (this._connection) {
        this._connection.end();
      }
    }

    static getConnection () {
      return this._connection;
    }

    static getConnectUrl () {
      return (process.env.NODE_ENV === "production") ? process.env.MYSQL_URL : dbConst.localhost;
    }
};
