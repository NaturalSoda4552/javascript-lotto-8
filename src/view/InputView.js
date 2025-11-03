import { Console } from '@woowacourse/mission-utils';

import Validator from '../utils/Validator.js';

class InputView {
  #validator;

  constructor() {
    this.#validator = new Validator();
  }

  async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      '구입금액을 입력해 주세요. \n',
    );
    const amount = Number(purchaseAmount);
    this.#validator.validatePurchaseAmount(amount);

    return amount;
  }

  async inputWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요. \n',
    );
    const numbers = winningNumbers.split(',').map(Number);
    this.#validator.validateWinningNumbers(numbers);

    return numbers;
  }

  async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요. \n',
    );
    const number = Number(bonusNumber);
    this.#validator.validateBonusNumber(number);

    return number;
  }
}

export default InputView;
