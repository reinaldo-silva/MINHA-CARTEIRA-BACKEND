const HashProvider = require('../providers/HashProvider/models/HashProviderModels');
const UsersRepositoryFake = require('../repositories/UsersRepositoryFake');
const SingInService = require('./SingInServices');

describe('SingIpService', () => {
  test('should be able user login if email and password match', async () => {
    const data = {
      email: 'exist@email.com',
      password: 'any_password',
    };

    const userRepositopryFake = new UsersRepositoryFake();
    const hashProvider = new HashProvider();
    const singInServices = new SingInService(userRepositopryFake, hashProvider);

    const user = await singInServices.execute(data);

    expect(user).toHaveProperty('id');
  });
});
