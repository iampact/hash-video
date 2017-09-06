import passport from "passport";
import LocalStrategy from "passport-local";
import FacebookStrategy from "passport-facebook";
import UserDAO from "../../api/user/dao/user-dao";

export default class AuthPassport {
  static setup () {

    passport.use(new LocalStrategy.Strategy({
        usernameField: 'user_id',
        passwordField: 'user_pw',
        session: true, // 세션에 저장 여부
        passReqToCallback: false,
      },
      (id, password, done) => {
        // 인증 정보 체크 로직
        UserDAO
          .findUserId(id)
          .then(user => {
            // 있으면 password 검증
            if (user) {
              UserDAO
                .checkPassword(id, password)
                .then(matchPw => {
                  // match password
                  //console.log('match password', result);
                  if (matchPw) {
                    return done(null, user);
                  }
                  // not match password
                  else {
                    return done(null, false, {
                      status: 403,
                      data : {
                        message: '비밀번호가 일치하지 않습니다.'
                      }
                    });
                  }
                })
                .catch((error) => {
                  return done(error);
                });
            } else {
              // error
              return done(null, false, {
                status: 404,
                data: {
                  message: '존재하지 않는 아이디입니다.'
                }
              });
            }
          }).catch((error) => {
            return done(error);
          });
      }
    ));

    passport.use(new FacebookStrategy.Strategy({
      // test app
      clientID: '351517451943695',
      clientSecret: '8c200e0fb84fbc1cf040ce83ca73697a',
      callbackURL: 'http://127.0.0.1:3000/api/sessions/facebook/callback',
      passReqToCallback: true,
    }, (req, accessToken, refreshToken, profile, done) => {

      // 인증 정보 체크 로직
      UserDAO
        .findUserId(profile.id)
        .then(user => {
          // 있으면 로그인
          if (user) {
            return done(null, user);
          }
          // 없으면 회원 생성
          else {
            let userInfo = {
              USER_ID: profile.id,
              USER_NAME: profile.name
              // 추가
            };
            // user 생성 후 return
            UserDAO.addUser(userInfo).then(result => {
              return done(null, result);
            })
          }
        }).catch((error) => {
        return done(error);
      });
    }));
  }
}
