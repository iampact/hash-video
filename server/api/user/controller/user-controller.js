import UserDAO from "../dao/user-dao";

export default class UserController {
  /*
  * add user
  * @param req, res
  * @return result
  * */
  static addUser (req, res) {
    UserDAO
      .addUser(req.body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }
  /*
  * get user
  * @param req, res
  * @return user
  * */
  static getUser (req, res) {
    UserDAO
      .getUser(req.params)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }
  /*
  * search users
  * @param req, res
  * @return users
  * */
  static searchUsers (req, res) {
    UserDAO
      .searchUsers(req.body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(400).json(error));
  }
}
