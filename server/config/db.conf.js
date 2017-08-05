import dbConst from "../constants/db.json";
import mysql from "mysql";

export default class DBConfig {
    _connection;
    static connection() {
      const URL = (process.env.NODE_ENV === "production") ? process.env.MYSQL_URL
                                                          : dbConst.localhost;

      this._connection = mysql.createConnection({
        host     : URL,
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

    static end() {
      if (this._connection) {
        this._connection.end();
      }
    }

    static getConnection () {
      return this._connection;
    }
};
