import { Random } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';
import WinningStatistics from './WinningStatistics.js';

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
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    this.#lottos.forEach((lotto) => {
      const rank = winningLotto.match(lotto);
      if (rank !== 0) {
        rankCounts[rank]++;
      }
    });

    return new WinningStatistics(rankCounts, this.#purchaseAmount);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoGame;
