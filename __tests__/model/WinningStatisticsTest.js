import WinningStatistics from '../../src/model/WinningStatistics.js';
import { RANK, RANK_PRIZE_MONEY } from '../../src/constants/lottoConstants.js';

describe('WinningStatistics 클래스 테스트', () => {
  describe('하나의 5등 당첨과 8000원 구매 시', () => {
    const rankCounts = {
      [RANK.FIRST]: 0,
      [RANK.SECOND]: 0,
      [RANK.THIRD]: 0,
      [RANK.FOURTH]: 0,
      [RANK.FIFTH]: 1,
    };
    const purchaseAmount = 8000;
    const stats = new WinningStatistics(rankCounts, purchaseAmount);

    test('getTotalPrize는 총상금을 정확히 계산한다.', () => {
      const expectedPrize = RANK_PRIZE_MONEY[RANK.FIFTH] * 1;
      expect(stats.getTotalPrize()).toBe(expectedPrize);
    });

    test('getProfitRate는 수익률을 정확히 계산한다.', () => {
      const expectedProfitRate = 62.5;
      expect(stats.getProfitRate()).toBe(expectedProfitRate);
    });
  });

  describe('등수에 들지 않는 경우', () => {
    const rankCounts = {
      [RANK.FIRST]: 0,
      [RANK.SECOND]: 0,
      [RANK.THIRD]: 0,
      [RANK.FOURTH]: 0,
      [RANK.FIFTH]: 0,
    };
    const purchaseAmount = 1000;
    const stats = new WinningStatistics(rankCounts, purchaseAmount);

    test('getTotalPrize는 0을 반환한다.', () => {
      expect(stats.getTotalPrize()).toBe(0);
    });

    test('getProfitRate는 0을 반환한다.', () => {
      expect(stats.getProfitRate()).toBe(0);
    });
  });

  describe('여러 등수 당첨 시', () => {
    const rankCounts = {
      [RANK.FIRST]: 1,
      [RANK.SECOND]: 1,
      [RANK.THIRD]: 1,
      [RANK.FOURTH]: 1,
      [RANK.FIFTH]: 1,
    };
    const purchaseAmount = 5000;
    const stats = new WinningStatistics(rankCounts, purchaseAmount);

    test('getTotalPrize는 총상금을 정확히 계산한다.', () => {
      const expectedPrize =
        RANK_PRIZE_MONEY[RANK.FIRST] +
        RANK_PRIZE_MONEY[RANK.SECOND] +
        RANK_PRIZE_MONEY[RANK.THIRD] +
        RANK_PRIZE_MONEY[RANK.FOURTH] +
        RANK_PRIZE_MONEY[RANK.FIFTH];
      expect(stats.getTotalPrize()).toBe(expectedPrize);
    });
  });
});
