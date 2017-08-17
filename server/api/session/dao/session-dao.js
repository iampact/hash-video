import Promise from "bluebird";
import dbConfig from "../../../config/db.conf";
import passport from "passport";
import auth from "../../../auth/local/auth";

let Session = {
  login: (req, res) => {
    return new Promise((resolve, reject) => {

      // TODO: login db add

      //  패스포트 모듈로 인증 시도
      passport.authenticate('local', (err, user) => {
        // error
        if (err) {
          reject(err);
        }

        // user 정보가 없다
        if (!user) {
          reject(new Error({
            status: 404,
            message: 'Something went wrong, please try again.'
          }));
        }

        if (user) {
          // 통과하면
          // access token 생성
          let token = auth.signToken(user.user_id);

          resolve({
            access_token: token
          });
        }
      })(req, res);
    });
  },

  logout: () => {
    return new Promise((resolve, reject) => {

      // TODO: logout db remove
      let _query = "Select * from users";
      let db = dbConfig.getConnection();

      db.query(_query, (err, todos) => {
        err ? reject(err) : resolve(rows);
      });
    })
  },

  current: (req, res) => {
    return new Promise((resolve, reject) => {

      let isAuthenticated = auth.isAuthenticated();
      console.log('isAuthenticated', isAuthenticated);

      if (isAuthenticated) {
        resolve(req.user);
      } else {
        reject(new Error({
          status: 401,
          message: 'not found session'
        }))
      }
    });
  }
};

export default Session;
