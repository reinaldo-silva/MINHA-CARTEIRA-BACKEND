class SingUpServices {
  constructor(usersRepository, cryptProvider) {
    this.usersRepository = usersRepository;
    this.cryptProvider = cryptProvider;
  }

  async execute(data) {
    const { name, email, password } = data;

    const emailAlreadyUsed = await this.usersRepository.findByEmail(email);

    if (emailAlreadyUsed)
      return { error: 'email not avaliable. Choise another!' };

    const passwordHashed = await this.cryptProvider.hash(password, 10);

    const user = await this.usersRepository.add({
      name,
      email,
      password: passwordHashed,
    });

    return user;
  }
}

module.exports = SingUpServices;
