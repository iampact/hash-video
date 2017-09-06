import ExternalSessionDAO from "../dao/external-session-dao";

export default class ExternalSessionController {
  // facebook
  static facebookCallback(req, res) {
    SessionDAO
      .facebookCallback(req, res)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }
}
