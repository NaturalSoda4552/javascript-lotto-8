import { Console } from '@woowacourse/mission-utils';
import { MESSAGES, STATISTICS_FORMAT } from '../constants/lottoConstants.js';

class OutputView {
  printLottos(lottos) {
    Console.print(MESSAGES.OUTPUT_PURCHASE_COUNT(lottos.length));
    lottos.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  }

  printWinningStatistics(winningStatistics) {
    Console.print(MESSAGES.OUTPUT_STATISTICS_HEADER);

    const rankCounts = winningStatistics.getRankCounts();
    Object.keys(STATISTICS_FORMAT)
      .sort((a, b) => b - a)
      .forEach((rank) => {
        Console.print(STATISTICS_FORMAT[rank](rankCounts[rank] || 0));
      });

    const profitRate = winningStatistics.getProfitRate();
    Console.print(MESSAGES.OUTPUT_PROFIT_RATE(profitRate));
  }

  printError(error) {
    Console.print(error.message);
  }
}

export default OutputView;
