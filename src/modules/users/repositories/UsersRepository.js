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

    const userFormatted = {
      id: user.ops[0]._id,
      ...user.ops[0],
    };

    delete userFormatted.password;
    delete userFormatted._id;

    return userFormatted;
  }

  // eslint-disable-next-line class-methods-use-this
  async findByEmail(email) {
    const user = await mongo
      .collection('users')
      .findOne({ email })
      .then(result => {
        return result;
      });
    const userFormatted = {
      id: user._id,
      ...user,
    };

    delete userFormatted._id;
    return userFormatted;
  }
}

module.exports = UsersRepository;
