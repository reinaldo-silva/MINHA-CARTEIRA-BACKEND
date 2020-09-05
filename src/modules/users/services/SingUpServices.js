const UsersRepository = require("../repositories/UsersRepository");

class SingUpServices {
  async execute(data) {
    const { name, email, password } = data;

    const emailAlreadyUsed = await UsersRepository.findByEmail(email);

    if (emailAlreadyUsed)
      return { error: "email not avaliable. Choise another!" };

    const user = await UsersRepository.add({ name, email, password });

    return user;
  }
}

module.exports = new SingUpServices();
