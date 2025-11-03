import Validator from '../../src/utils/Validator.js';
import ERROR_MESSAGES from '../../src/constants/errorMessages.js';
import Lotto from '../../src/model/Lotto.js';

describe('Validator 클래스 테스트', () => {
  const validator = new Validator();

  describe('validatePurchaseAmount 테스트', () => {
    test.each([
      ['숫자가 아닌 경우', 'abc'],
      ['1000원 단위가 아닌 경우', 1500],
      ['0인 경우', 0],
    ])('%s, 예외가 발생해야 한다.', (description, amount) => {
      expect(() => validator.validatePurchaseAmount(amount)).toThrow(
        ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT,
      );
    });

    test('유효한 구매 금액인 경우, 예외가 발생하지 않는다.', () => {
      expect(() => validator.validatePurchaseAmount(3000)).not.toThrow();
    });
  });

  describe('validateBonusNumber 테스트', () => {
    test.each([
      ['정수가 아닌 경우', 1.5, ERROR_MESSAGES.BONUS_NUMBER_MUST_BE_INTEGER],
      ['범위를 벗어난 경우 (0)', 0, ERROR_MESSAGES.OUT_OF_RANGE_BONUS_NUMBER],
      ['범위를 벗어난 경우 (46)', 46, ERROR_MESSAGES.OUT_OF_RANGE_BONUS_NUMBER],
    ])('%s, 예외가 발생해야 한다.', (description, number, expectedError) => {
      expect(() => validator.validateBonusNumber(number)).toThrow(
        expectedError,
      );
    });

    test('유효한 보너스 번호인 경우, 예외가 발생하지 않는다.', () => {
      expect(() => validator.validateBonusNumber(7)).not.toThrow();
    });
  });

  describe('validateWinningNumbersAndBonusNumber 테스트', () => {
    test('보너스 번호가 당첨 번호와 중복될 경우, 예외가 발생해야 한다.', () => {
      const winningNumberLotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const bonusNumber = 6;
      expect(() =>
        validator.validateWinningNumbersAndBonusNumber(
          winningNumberLotto,
          bonusNumber,
        ),
      ).toThrow(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBERS_AND_BONUS_NUMBER);
    });

    test('보너스 번호가 당첨 번호와 중복되지 않는 경우, 예외가 발생하지 않는다.', () => {
      const winningNumberLotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const bonusNumber = 7;
      expect(() =>
        validator.validateWinningNumbersAndBonusNumber(
          winningNumberLotto,
          bonusNumber,
        ),
      ).not.toThrow();
    });
  });
});
