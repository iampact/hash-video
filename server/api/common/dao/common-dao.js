import Promise from "bluebird";
import dbConfig from "../../../config/db.conf";
import MysqlQueryClient from "../../../commons/static/mysql.query.client";

let Search = {

  getConf: (params) => {
    return new Promise((resolve, reject) => {
      const QUERY = 'SELECT.GET_CONF_ITEM';
      let _query = MysqlQueryClient.getQuery(QUERY);
      let _values = [params.category, params.key];
      let _db = dbConfig.getConnection();

      _db.query(_query, _values, (err, results, fields) => {
        err ? reject(err) : resolve(results);
      });
    });
  },

  getConfList: (params) => {
    return new Promise((resolve, reject) => {
      const QUERY = 'SELECT.GET_CONF_LIST';
      let _query = MysqlQueryClient.getQuery(QUERY);
      let _values = [params.category];
      let _db = dbConfig.getConnection();

      _db.query(_query, _values, (err, results, fields) => {
        err ? reject(err) : resolve(results);
      });
    });
  },

  getConfUI: (params) => {
    return new Promise((resolve, reject) => {
      const QUERY = 'SELECT.GET_CONFUI_ITEM';
      let _query = MysqlQueryClient.getQuery(QUERY);
      let _values = [params.item, params.value];
      let _db = dbConfig.getConnection();

      _db.query(_query, _values, (err, results, fields) => {
        err ? reject(err) : resolve(results);
      });
    });
  },

  getConfUIList: (params) => {
    return new Promise((resolve, reject) => {
      const QUERY = 'SELECT.GET_CONFUI_LIST';
      let _query = MysqlQueryClient.getQuery(QUERY);
      let _values = [params.item];
      let _db = dbConfig.getConnection();

      _db.query(_query, _values, (err, results, fields) => {
        err ? reject(err) : resolve(results);
      });
    });
  }

};

export default Search;
