import { LOTTO_RULES } from '../constants/lottoConstants.js';

const ERROR_MESSAGES = Object.freeze({
  DUPLICATE_WINNING_NUMBERS_AND_BONUS_NUMBER:
    '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',

  INVALID_PURCHASE_AMOUNT: `[ERROR] 구입 금액은 ${LOTTO_RULES.PRICE}원 단위의 숫자여야 합니다.`,
  INVALID_WINNING_NUMBERS_COUNT: `[ERROR] 로또 번호는 ${LOTTO_RULES.NUMBER_COUNT}개여야 합니다.`,
  WINNING_NUMBERS_MUST_BE_INTEGER: '[ERROR] 로또 번호는 모두 정수여야 합니다',
  DUPLICATE_WINNING_NUMBERS: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
  OUT_OF_RANGE_WINNING_NUMBERS: `[ERROR] 로또 번호는 ${LOTTO_RULES.MIN_NUMBER}부터 ${LOTTO_RULES.MAX_NUMBER} 사이의 숫자여야 합니다.`,
  BONUS_NUMBER_MUST_BE_INTEGER: '[ERROR] 보너스 번호는 정수여야 합니다.',
  OUT_OF_RANGE_BONUS_NUMBER: `[ERROR] 보너스 번호는 ${LOTTO_RULES.MIN_NUMBER}부터 ${LOTTO_RULES.MAX_NUMBER} 사이의 숫자여야 합니다.`,
});

export default ERROR_MESSAGES;
