const UsersRepositoryFake = require('../repositories/UsersRepositoryFake');
const SingUpService = require('./SingUpServices');

describe('SingUpService', () => {
  test('should be able to create a new user', async () => {
    const data = {
      name: 'any_user',
      email: 'any@email.com',
      password: 'any_password',
    };

    const userRepositopryFake = new UsersRepositoryFake();
    const singUpServices = new SingUpService(userRepositopryFake);

    const user = await singUpServices.execute(data);

    expect(user.ops[0]).toHaveProperty('_id');
  });
});
