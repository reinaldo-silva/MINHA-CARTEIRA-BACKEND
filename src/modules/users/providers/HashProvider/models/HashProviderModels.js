class HashProviderModels {
  // eslint-disable-next-line
  async hash(password, salt) {
    return 'any_hash';
  }

  async compare(password, passwordHashed) {
    return password === passwordHashed;
  }
}

module.exports = HashProviderModels;
