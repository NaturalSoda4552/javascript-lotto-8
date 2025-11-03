import ERROR_MESSAGES from '../constants/errorMessages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS_COUNT);
    }
    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_MUST_BE_INTEGER);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBERS);
    }
    if (numbers.some((n) => n < 1 || n > 45)) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE_WINNING_NUMBERS);
    }
  }

  // TODO: 추가 기능 구현
  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
