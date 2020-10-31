class FinanceRepositoryFake {
  async add(data) {
    const dataFormat = {
      id: 'any_id',
      ...data,
    };
    return dataFormat;
  }
}

module.exports = FinanceRepositoryFake;
