import Promise from "bluebird";
import dbConfig from "../../../config/db.conf";

let Search = {
  search: () => {
    return new Promise((resolve, reject) => {
      let _query = "Select * from users";
      let db = dbConfig.getConnection();

      db.query(_query, (err, todos) => {
        err ? reject(err) : resolve(rows);
      });
    });
  }
};

export default Search;
