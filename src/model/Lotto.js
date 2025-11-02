class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`[ERROR] 로또 번호는 6개여야 합니다.`);
    }
    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error(`[ERROR] 로또 번호는 정수여야 합니다.`);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
    if (numbers.some((n) => n < 1 || n > 45)) {
      throw new Error(`[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`);
    }
  }

  // TODO: 추가 기능 구현
  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
