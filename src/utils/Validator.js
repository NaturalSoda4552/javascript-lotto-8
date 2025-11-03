import ERROR_MESSAGES from '../constants/errorMessages.js';

class Validator {
  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount % 1000 !== 0 || amount === 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
  }
  validateBonusNumber(number) {
    if (!Number.isInteger(number))
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_MUST_BE_INTEGER);
    if (number < 1 || number > 45) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE_BONUS_NUMBER);
    }
  }
  validateWinningNumbersAndBonusNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber))
      throw new Error(
        ERROR_MESSAGES.DUPLICATE_WINNING_NUMBERS_AND_BONUS_NUMBER,
      );
  }
}

export default Validator;
