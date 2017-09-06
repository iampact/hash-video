import Promise from "bluebird";
import _ from "lodash";
import dbConfig from "../../../config/db.conf";
import MysqlQueryClient from "../../../commons/static/mysql.query.client";

let User = {

  findUserId: (id) => {
    return new Promise((resolve, reject) => {
      const QUERY = 'SELECT.FIND_USER_ID';
      let _query = MysqlQueryClient.getQuery(QUERY);
      let _values = [id];
      let _db = dbConfig.getConnection();

      _db.query(_query, _values, (err, results, fields) => {
        err ? reject(err) : resolve(results[0]);
      });
    })
  },

  checkPassword: (id, password) => {
    return new Promise((resolve, reject) => {
      const QUERY = 'SELECT.CHECK_USER_AUTH';
      let _query = MysqlQueryClient.getQuery(QUERY);
      let _values = [id, password];
      let _db = dbConfig.getConnection();

      _db.query(_query, _values, (err, results, fields) => {
        err ? reject(err) : resolve(results.length === 1);
      });
    })
  },

  addUser: (data) => {
    return new Promise((resolve, reject) => {
      const QUERY = 'INSERT.ADD_USER';
      let _query = MysqlQueryClient.getQuery(QUERY);
      let _values = [data.user_id, data.user_name, data.user_password, data.user_roleid, data.user_authstatus, data.user_lostauthcode];
      let _db = dbConfig.getConnection();

      _db.query(_query, _values, (err, results, fields) => {
        err ? reject(err) : resolve(results);
      });
    })
  },

  getUser: (params) => {
    return new Promise((resolve, reject) => {
      const QUERY = 'SELECT.GET_USER_ITEM';
      let _query = MysqlQueryClient.getQuery(QUERY);
      let _values = [params.id];
      let _db = dbConfig.getConnection();

      _db.query(_query, _values, (err, results, fields) => {
        err ? reject(err) : resolve(_.omit(results[0], ['USER_PASSWORD', 'USER_LOSTAUTHCODE', 'USER_AUTHSTATUS', 'USER_AUTHFAILCNT', 'USER_AUTHLAST']));
      });
    })
  },

  searchUsers: (data) => {
    return new Promise((resolve, reject) => {
      const QUERY = 'SELECT.GET_USER_LIST';
      let _query = MysqlQueryClient.getQuery(QUERY);
      let _values = [data.user_name];
      let _db = dbConfig.getConnection();

      _db.query(_query, _values, (err, results, fields) => {
        err ? reject(err) : resolve(results);
      });
    })
  }

};

export default User;
