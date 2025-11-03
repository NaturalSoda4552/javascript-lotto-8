class WinningLotto {
  #winningNumberLotto;
  #bonusNumber;

  constructor(winningNumberLotto, bonusNumber) {
    this.#winningNumberLotto = winningNumberLotto;
    this.#bonusNumber = bonusNumber;
  }

  match(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const winningNumbersSet = new Set(this.#winningNumberLotto.getNumbers());

    const matchCount = lottoNumbers.filter((number) =>
      winningNumbersSet.has(number),
    ).length;
    const hasBonus = lottoNumbers.includes(this.#bonusNumber);

    return this.extractRank(matchCount, hasBonus);
  }

  extractRank(matchCount, hasBonus) {
    if (matchCount === 6) return 1;
    if (matchCount === 5 && hasBonus) return 2;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
    return 0;
  }
}

export default WinningLotto;
