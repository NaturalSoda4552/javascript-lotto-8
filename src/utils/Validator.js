class Validator {
  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount % 1000 !== 0 || amount === 0) {
      throw new Error(`[ERROR] 구입 금액은 1000원 단위의 숫자여야 합니다.`);
    }
  }
  validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`[ERROR] 로또 번호는 6개여야 합니다.`);
    }

    if (numbers.some((number) => !Number.isInteger(number)))
      throw new Error('[ERROR] 로또 번호는 모두 정수여야 합니다');
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(`[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`);
    }
  }
  validateBonusNumber(number) {
    if (!Number.isInteger(number))
      throw new Error('[ERROR] 보너스 번호는 정수여야 합니다.');
    if (number < 1 || number > 45) {
      throw new Error(`[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.`);
    }
  }
}

export default Validator;
