import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/lottoConstants.js';

class InputView {
  async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      MESSAGES.INPUT_PURCHASE_AMOUNT,
    );
    const amount = Number(purchaseAmount);

    return amount;
  }

  async inputWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGES.INPUT_WINNING_NUMBERS,
    );
    const numbers = winningNumbers.split(',').map(Number);

    return numbers;
  }

  async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      MESSAGES.INPUT_BONUS_NUMBER,
    );
    const number = Number(bonusNumber);

    return number;
  }
}

export default InputView;
