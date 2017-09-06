import SessionDAO from "../dao/session-dao";

export default class SessionController {
  static login(req, res) {

    SessionDAO
      .login(req, res)
      .then(result => res.status(200).json(result))
      .catch(error => {
        res.status(error.status).json(error);
      });
  }

  static logout(req, res) {
    SessionDAO
      .logout(req, res)
      .then(result => res.status(200).json(result))
      .catch(error => {
        res.status(error.status).json(error);
      });
  }

  static current(req, res) {
    SessionDAO
      .current(req, res)
      .then(result => res.status(200).json(result))
      .catch(error => {
        res.status(error.status).json(error);
      });
  }
}
