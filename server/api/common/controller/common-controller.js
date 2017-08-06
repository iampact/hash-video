import CommonDAO from "../dao/common-dao";

export default class CommonController {
  static getConf (req, res) {
    CommonDAO
      .getConf(req.params)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }

  static getConfList (req, res) {
    CommonDAO
      .getConfList(req.params)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }

  static getConfUI (req, res) {
    CommonDAO
      .getConfUI(req.params)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }

  static getConfUIList (req, res) {
    CommonDAO
      .getConfUIList(req.params)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }
}
