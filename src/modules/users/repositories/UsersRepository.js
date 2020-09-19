const mongo = require('../../../infra/database/mongoose');

class UsersRepository {
  // eslint-disable-next-line class-methods-use-this
  async add(data) {
    const user = await mongo
      .collection('users')
      .insertOne(data)
      .then(result => {
        return result;
      });

    delete user.ops[0].password;

    return user;
  }

  // eslint-disable-next-line class-methods-use-this
  async findByEmail(email) {
    const user = await mongo
      .collection('users')
      .findOne({ email })
      .then(result => {
        return result;
      });
    return user;
  }
}

module.exports = UsersRepository;
