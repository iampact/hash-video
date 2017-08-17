import passport from "passport";
import LocalStrategy from "passport-local";

export default class AuthPassport {
  static setup () {

    passport.use(new LocalStrategy.Strategy({
        usernameField: 'user_id',
        passwordField: 'user_pw'
      },

      (loginName, loginPassword, done) => {
        // //TODO: 인증 정보 체크 로직
        console.log(loginName, loginPassword);

        if (loginName === 'emasion84@gmail.com' && loginPassword === 'rkdehddhks') {
          // 로그인 성공시 유저 아이디를 넘겨준다.
          let user = {
            user_id: loginName,
            user_name: '강동완'
          };
          return done(null, user);
        } else {
          return done(null, false, { message: 'Fail to login.' });
        }
      }
    ));
  }
}
