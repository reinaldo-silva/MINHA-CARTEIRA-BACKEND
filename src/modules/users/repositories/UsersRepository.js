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

    const userFormat = {
      // eslint-disable-next-line
      id: user.ops[0]._id,
      ...user.ops[0],
    };

    delete userFormat.password;
    // eslint-disable-next-line
    delete userFormat._id;

    return userFormat;
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
