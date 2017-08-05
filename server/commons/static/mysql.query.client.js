import queryConst from "../../constants/query.json";
import _ from "lodash";

export default class MysqlQueryClient {

  static getQuery (keyStr) {

    let splitKeyArr = keyStr.split('.');
    let query = queryConst.MYSQL;
    _.forEach(splitKeyArr, (key) => {
      if (query[key]) {
        query = query[key];
      }
    });

    return query;
  }
}
