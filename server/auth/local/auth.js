import jwt from "jsonwebtoken";
import compose from "composable-middleware";
import _ from "lodash";
import expressJwt from "express-jwt";

const SECRET = _.uniqueId('session');
// jwt에서 사용한 시크릿 문자열과 동일한 문자열로 객체 생성
let validateJwt = expressJwt({secret: SECRET});

export default class Auth {

  static signToken (id) {
    const EXPIRES_SESSION_TIME = 60; // 1 hour
    return jwt.sign({
      id: id
    }, SECRET, {
      expiresInMinutes: EXPIRES_SESSION_TIME
    });
  }

  static isAuthenticated () {

    return compose ()
      // Validate jwt
      .use((req, res, next) => {
        /*let decoded = jwt.verify(req.headers.authorization, SECRET);
        console.log(decoded); // '{id: 'user_id'}'
        req.user = decoded;*/

        if(req.query && req.query.hasOwnProperty('access_token')) {
          req.headers.authorization = 'Bearer ' + req.query.access_token;
        }

        // 토큰 인증 로직
        validateJwt(req, res, next);

      })
      // Attach user to request
      .use((req, res, next) => {
        req.user = {
          user_id: req.user.user_id,
          user_name: 'name of ' + req.user.user_id
        };
        next();
      });
  }
}
