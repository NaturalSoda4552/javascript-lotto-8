import { Console } from '@woowacourse/mission-utils';

class InputView {
  async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      '구입금액을 입력해 주세요. \n',
    );
    const amount = Number(purchaseAmount);

    return amount;
  }

  async inputWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요. \n',
    );
    const numbers = winningNumbers.split(',').map(Number);

    return numbers;
  }

  async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요. \n',
    );
    const number = Number(bonusNumber);

    return number;
  }
}

export default InputView;
