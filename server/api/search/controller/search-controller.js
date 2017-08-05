import SearchDAO from "../dao/search-dao";
import ESClient from "../../../commons/static/es.client";

export default class SearchController {
  static search(req, res) {
    SearchDAO
      .search(req.params)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }

  static searchES(req, res) {
    ESClient.getEsClient()
      .search(req.params)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }

  static checkES(req, res) {
    ESClient.getEsClient()
      .ping(req.params)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }
}
