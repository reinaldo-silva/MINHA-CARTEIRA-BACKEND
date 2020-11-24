class SignInService {
  constructor(usersRepository, cryptProvider, tokenProvider) {
    this.usersRepository = usersRepository;
    this.cryptProvider = cryptProvider;
    this.tokenProvider = tokenProvider;
  }

  async execute(data) {
    const { email, password } = data;

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      return { error: 'User not found' };
    }

    const passwordMatch = await this.cryptProvider.compare(
      password,
      user.password,
    );

    if (!passwordMatch) {
      return { error: "password doesn't match" };
    }

    // Vamos Gerar o Token de autenticação aqui!

    delete user.password;

    const token = this.tokenProvider.generate(user.id);

    return { user, token };
  }
}

module.exports = SignInService;
