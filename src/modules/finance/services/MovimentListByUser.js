class MovimentListByUser {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(user_id, type, frequency) {
    const moviment = await this.financeRepository.movimentsByUser(
      user_id,
      type,
      frequency,
    );

    return moviment;
  }
}

module.exports = MovimentListByUser;
