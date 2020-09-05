const mongo = require("../../../infra/database/mongoose");

class UsersRepository {
  async add(data) {
    const user = await mongo
      .collection("users")
      .insertOne(data)
      .then((result) => {
        return result;
      });

    delete user.ops[0].password;

    return user;
  }
}

module.exports = new UsersRepository();