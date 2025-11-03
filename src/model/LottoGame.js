import { Random } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';
import WinningStatistics from './WinningStatistics.js';
import { RANK } from '../constants/lottoConstants.js';

class LottoGame {
  #purchaseAmount;
  #lottos;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#lottos = this.#createLottos();
  }

  #createLottos() {
    const gameCount = this.#purchaseAmount / 1000;
    const lottos = [];
    for (let i = 0; i < gameCount; i++) {
      lottos.push(this.#createOneLotto());
    }
    return lottos;
  }
  #createOneLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);
    return new Lotto(numbers);
  }

  createWinningStatistics(winningLotto) {
    const rankCounts = {
      [RANK.FIRST]: 0,
      [RANK.SECOND]: 0,
      [RANK.THIRD]: 0,
      [RANK.FOURTH]: 0,
      [RANK.FIFTH]: 0,
    };

    this.#lottos.forEach((lotto) => {
      const rank = winningLotto.match(lotto);
      if (rank !== RANK.NO_PRIZE) {
        rankCounts[rank] += 1;
      }
    });

    return new WinningStatistics(rankCounts, this.#purchaseAmount);
  }

  getLottos() {
    return [...this.#lottos];
  }
}

export default LottoGame;
