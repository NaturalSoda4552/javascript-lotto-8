import ERROR_MESSAGES from '../constants/errorMessages.js';
import { LOTTO_RULES } from '../constants/lottoConstants.js';

class Validator {
  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount % LOTTO_RULES.PRICE !== 0 || amount === 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
  }
  validateBonusNumber(number) {
    if (!Number.isInteger(number))
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_MUST_BE_INTEGER);
    if (number < LOTTO_RULES.MIN_NUMBER || number > LOTTO_RULES.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE_BONUS_NUMBER);
    }
  }
  validateWinningNumbersAndBonusNumber(winningNumberLotto, bonusNumber) {
    if (winningNumberLotto.getNumbers().includes(bonusNumber))
      throw new Error(
        ERROR_MESSAGES.DUPLICATE_WINNING_NUMBERS_AND_BONUS_NUMBER,
      );
  }
}

export default Validator;
