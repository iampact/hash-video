import SessionDAO from "../dao/session-dao";

export default class SessionController {
  static login(req, res) {

    SessionDAO
      .login(req, res)
      .then(result =>
        res.status(200).json(result)
      )
      .catch((error) => {
        if (error.status === 404) {
          // not found session
          res.status(404).json(error);
        } else {
          res.status(400).json(error);
        }
      });
  }

  static logout(req, res) {
/*
    let sid = req.sessionID;

    // session 삭제
    req.session.destory();  // 세션 삭제
    res.clearCookie(sid); // 세션 쿠키 삭제
    res.status(200).json({
      message: 'success delete session'
    });*/

    SessionDAO
      .logout(req.params)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }

  static current(req, res) {
    SessionDAO
      .current(req, res)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(401).json(error));
  }
}
