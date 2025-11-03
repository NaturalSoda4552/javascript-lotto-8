import Lotto from './Lotto.js';

class WinningLotto {
  #winningNumberLotto;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#validate(winningNumbers, bonusNumber);
    winningNumbers.sort((a, b) => a - b);
    this.#winningNumberLotto = new Lotto(winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  #validate(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber))
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
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
