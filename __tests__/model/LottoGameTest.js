import LottoGame from '../../src/model/LottoGame.js';
import WinningLotto from '../../src/model/WinningLotto.js';
import Lotto from '../../src/model/Lotto.js';
import { RANK } from '../../src/constants/lottoConstants.js';
import { mockRandoms } from './../../src/utils/testUtils.js';

describe('LottoGame 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('구매 금액에 해당하는 개수만큼 로또를 생성해야 한다.', () => {
    const purchaseAmount = 3000;
    const game = new LottoGame(purchaseAmount);
    const lottos = game.getLottos();

    expect(lottos.length).toBe(3);
  });

  test('createWinningStatistics는 올바른 당첨 통계를 생성해야 한다.', () => {
    // given
    const mockNumbers = [
      [1, 2, 3, 4, 5, 6], // 1등
      [1, 2, 3, 4, 5, 7], // 2등
      [1, 2, 3, 4, 5, 8], // 3등
    ];
    mockRandoms(mockNumbers);

    const purchaseAmount = 3000;
    const lottoGame = new LottoGame(purchaseAmount);

    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const winningLotto = new WinningLotto(
      new Lotto(winningNumbers),
      bonusNumber,
    );

    // when
    const statistics = lottoGame.createWinningStatistics(winningLotto);
    const rankCounts = statistics.getRankCounts();

    // then
    expect(rankCounts[RANK.FIRST]).toBe(1);
    expect(rankCounts[RANK.SECOND]).toBe(1);
    expect(rankCounts[RANK.THIRD]).toBe(1);
    expect(rankCounts[RANK.FOURTH]).toBe(0);
    expect(rankCounts[RANK.FIFTH]).toBe(0);
  });
});
