import { Random } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';

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

  getLottos() {
    return this.#lottos;
  }
}

export default LottoGame;
