import Lotto from '../../src/model/Lotto.js';
import ERROR_MESSAGES from '../../src/constants/errorMessages.js';

describe('Lotto 클래스 테스트', () => {
  describe('로또 번호 유효성 검사', () => {
    test.each([
      {
        description: '번호가 6개가 아닐 때 (7개)',
        input: [1, 2, 3, 4, 5, 6, 7],
        expectedError: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_COUNT,
      },
      {
        description: '번호가 6개가 아닐 때 (5개)',
        input: [1, 2, 3, 4, 5],
        expectedError: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_COUNT,
      },
      {
        description: '번호에 중복된 숫자가 있을 때',
        input: [1, 2, 3, 4, 5, 5],
        expectedError: ERROR_MESSAGES.DUPLICATE_WINNING_NUMBERS,
      },
      {
        description: '번호에 문자가 있을 때',
        input: [1, 2, 3, 4, 5, 'a'],
        expectedError: ERROR_MESSAGES.WINNING_NUMBERS_MUST_BE_INTEGER,
      },
      {
        description: '번호에 실수가 있을 때',
        input: [1, 2, 3, 4, 5, 6.6],
        expectedError: ERROR_MESSAGES.WINNING_NUMBERS_MUST_BE_INTEGER,
      },
      {
        description: '번호가 1~45 범위를 벗어날 때 (0)',
        input: [0, 1, 2, 3, 4, 5],
        expectedError: ERROR_MESSAGES.OUT_OF_RANGE_WINNING_NUMBERS,
      },

      [
        '번호가 1~45 범위를 벗어날 때 (46)',
        [1, 2, 3, 4, 5, 45],
        ERROR_MESSAGES.OUT_OF_RANGE_WINNING_NUMBERS,
      ],
    ])('%s, 예외가 발생해야 한다.', ({ input, expectedError }) => {
      expect(() => new Lotto(input)).toThrow(expectedError);
    });
  });

  describe('기능 테스트', () => {
    test('Lotto 객체는 번호를 오름차순으로 정렬하여 저장한다.', () => {
      const numbers = [6, 5, 4, 3, 2, 1];
      const lotto = new Lotto(numbers);
      expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("toString 메서드는 '[1, 2, 3, 4, 5, 6]' 형식의 문자열을 반환한다.", () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const lotto = new Lotto(numbers);
      expect(lotto.toString()).toEqual('[1, 2, 3, 4, 5, 6]');
    });
  });
});
