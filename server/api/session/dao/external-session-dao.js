import Promise from "bluebird";
import dbConfig from "../../../config/db.conf";
import passport from "passport";
import auth from "../../../auth/local/auth";
import UserDAO from "../../user/dao/user-dao";

let ExternalSession = {
  facebookCallback: (req, res) => {
    return new Promise((resolve, reject) => {
      // facebook callback 처리
      console.log(resolve);
      res.redirect('/');
    })
  }
};

export default ExternalSession;
