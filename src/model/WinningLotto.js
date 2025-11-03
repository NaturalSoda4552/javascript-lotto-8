import { RANK } from '../constants/lottoConstants.js';

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
    if (matchCount === 6) return RANK.FIRST;
    if (matchCount === 5 && hasBonus) return RANK.SECOND;
    if (matchCount === 5) return RANK.THIRD;
    if (matchCount === 4) return RANK.FOURTH;
    if (matchCount === 3) return RANK.FIFTH;
    return RANK.NO_PRIZE;
  }
}

export default WinningLotto;
