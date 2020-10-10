const HashProvider = require('../providers/HashProvider/models/HashProviderModels');
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
    const hashProvider = new HashProvider();
    const singUpServices = new SingUpService(userRepositopryFake, hashProvider);

    const user = await singUpServices.execute(data);

    expect(user).toHaveProperty('id');
  });

  test('should be error message if email already used', async () => {
    const data = {
      name: 'any_user',
      email: 'exist@email.com',
      password: 'any_password',
    };

    const userRepositopryFake = new UsersRepositoryFake();
    const hashProvider = new HashProvider();
    const singUpServices = new SingUpService(userRepositopryFake, hashProvider);

    const user = await singUpServices.execute(data);

    expect(user).toHaveProperty('error');
  });
});
