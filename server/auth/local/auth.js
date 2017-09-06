import jwt from "jsonwebtoken";
import SecretConfig from "../../constants/secret.config";

const SECRET = SecretConfig.jwt;
const EXPIRES_SESSION_TIME = 60 * 60; // 60 min

export default class Auth {

  /*
  * signToken token 발행
  */
  static signToken (user) {
    return jwt.sign(
      user,
      SECRET,
      {
        expiresIn: EXPIRES_SESSION_TIME,
        subject: 'userInfo'
      }
    );
  }

  /*
  * session 상태를 체크해야 하는 API의 경우 아래의 미들웨어를 항상 앞에 두어 헤더를 체크한다.
  */
  static authMiddleware (req, res, next) {

    //console.log(req.headers);
    let token = req.headers.authorization;

    // token이 없으면 로그아웃 상태
    if (!token) {
      return res.status(401).json({
        status: 401,
        success: false,
        data: {
          message: '세션이 존재하지 않습니다.'
        }
      });
    }

    // token 가공
    token = token.replace('Bearer', '').replace(/(\s*)/g, ''); // Bearer제거, 공백제거;
    //console.log('Token', token);

    const promise = new Promise((resolve, reject) => {
      // 토큰, SECRET 확인
      let decoded;
      try {
        decoded = jwt.verify(token, SECRET);
        resolve(decoded);
      } catch (err) {
        reject(err);
      }
    });

    const onError = (error) => {
      res.status(401).json({
        status: 401,
        success: false,
        data: {
          message: '세션이 만료되었습니다.'
        }
      });
    };

    promise
      .then((decoded) => {
        console.log('Auth Decoded: ', decoded);
        req.decoded = decoded; // 디코드된 데이터를 req 에 담는다.
        next(); // 실제 라우터 단 로직을 수행하기 위해 next()
      })
      .catch(onError);
  }
}
