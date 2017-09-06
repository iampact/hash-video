import Promise from "bluebird";
import dbConfig from "../../../config/db.conf";
import passport from "passport";
import auth from "../../../auth/local/auth";
import UserDAO from "../../user/dao/user-dao";

let Session = {
  login: (req, res) => {
    return new Promise((resolve, reject) => {

      //  패스포트 모듈로 인증 시도
      passport.authenticate('local', (err, authUser, resData) => {
        // error
        if (err) {
          console.log('ERROR:', err);
          reject(err);
        }

        // user 정보가 없다
        if (!authUser) {
          console.log('ERROR USER:', err, authUser, resData);
          reject(resData);
        }

        if (authUser) {
          // 통과하면
          // access token 생성
          let token = auth.signToken(authUser);

          UserDAO.getUser({
            id: authUser.USER_ID
          }).then(user => {
            resolve({
              status: 200,
              success: true,
              data: {
                access_token: token,
                user: user
              }
            }).catch(error => {
              reject({
                status: 403,
                success : false,
                data: {
                  message: '사용자 정보를 찾을 수 없습니다.'
                }
              })
            });
          });
        }
      })(req, res);
    });
  },

  logout: (req, res) => {
    return new Promise((resolve, reject) => {

      let sid = req.sessionID;

      console.log('CONSOLE.LOG:', sid);
      //console.log(req.session);

      req.logout();
      res.clearCookie(sid);

      if (req.session && req.session.destroy) {
        req.session.destroy()
      }

      resolve({
        status: 200,
        success : true,
        data: {
          message: '로그아웃 되었습니다.'
        }
      })
    })
  },

  current: (req, res) => {
    return new Promise((resolve, reject) => {
      if (req.decoded) {
        UserDAO.getUser({
          id: req.decoded.USER_ID
        }).then(user => {
          // user 정보
          resolve({
            status: 200,
            success: true,
            data: {
              user: user
            }
          }).catch((error) => {
            reject({
              status: 403,
              success : false,
              data: {
                message: 'USER 정보를 찾을 수 없습니다.'
              }
            })
          });
        });
      } else {
        reject({
          status: 401,
          success : false,
          data: {
            message: '세션이 존재하지 않습니다.'
          }
        })
      }
    });
  }
};

export default Session;
