export const LOTTO_RULES = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBER_COUNT: 6,
  PRICE: 1000,
});

export const RANK = Object.freeze({
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  NO_PRIZE: 0,
});

export const RANK_PRIZE_MONEY = Object.freeze({
  [RANK.FIRST]: 2_000_000_000,
  [RANK.SECOND]: 30_000_000,
  [RANK.THIRD]: 1_500_000,
  [RANK.FOURTH]: 50_000,
  [RANK.FIFTH]: 5_000,
});

export const MESSAGES = Object.freeze({
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',

  OUTPUT_PURCHASE_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  OUTPUT_STATISTICS_HEADER: '\n당첨 통계\n---',
  OUTPUT_PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
});

export const STATISTICS_FORMAT = Object.freeze({
  [RANK.FIFTH]: (count) => `3개 일치 (5,000원) - ${count}개`,
  [RANK.FOURTH]: (count) => `4개 일치 (50,000원) - ${count}개`,
  [RANK.THIRD]: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  [RANK.SECOND]: (count) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  [RANK.FIRST]: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
});
