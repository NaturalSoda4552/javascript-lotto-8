import Lotto from '../../src/model/Lotto.js';
import WinningLotto from '../../src/model/WinningLotto.js';
import { RANK } from '../../src/constants/lottoConstants.js';

describe('WinningLotto 클래스 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const winningLotto = new WinningLotto(new Lotto(winningNumbers), bonusNumber);

  test.each([
    ['1등(6개 일치)', new Lotto([1, 2, 3, 4, 5, 6]), RANK.FIRST],
    ['2등(5개 + 보너스 일치)', new Lotto([1, 2, 3, 4, 5, 7]), RANK.SECOND],
    ['3등(5개 일치)', new Lotto([1, 2, 3, 4, 5, 8]), RANK.THIRD],
    ['4등(4개 일치)', new Lotto([1, 2, 3, 4, 8, 9]), RANK.FOURTH],
    ['5등(3개 일치)', new Lotto([1, 2, 3, 8, 9, 10]), RANK.FIFTH],
    ['꽝', new Lotto([1, 2, 8, 9, 10, 11]), RANK.NO_PRIZE],
  ])(
    '%s일때, 올바른 등수를 반환해야 한다.',
    (description, userLotto, expectedRank) => {
      const rank = winningLotto.match(userLotto);
      expect(rank).toBe(expectedRank);
    },
  );
});
