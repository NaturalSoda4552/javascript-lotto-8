import { Console } from '@woowacourse/mission-utils';

const rankDetails = {
  1: { match: 6, prize: '2,000,000,000', text: '6개 일치' },
  2: { match: 5, prize: '30,000,000', text: '5개 일치, 보너스 볼 일치' },
  3: { match: 5, prize: '1,500,000', text: '5개 일치' },
  4: { match: 4, prize: '50,000', text: '4개 일치' },
  5: { match: 3, prize: '5,000', text: '3개 일치' },
};

class OutputView {
  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다. \n`);
    lottos.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  }

  printWinningStatistics(winningStatistics) {
    Console.print('\n당첨 통계\n---');

    const rankCounts = winningStatistics.getRankCounts();
    const ranks = [5, 4, 3, 2, 1].forEach((rank) => {
      Console.print(
        `${rankDetails[rank].text} (${rankDetails[rank].prize}원) - ${rankCounts[rank]}`,
      );
    });

    const profitRate = winningStatistics.getProfitRate();
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  printError(error) {
    Console.print(error.message);
  }
}

export default OutputView;
