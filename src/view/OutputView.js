import { Console } from '@woowacourse/mission-utils';

class OutputView {
  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다. \n`);
    lottos.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  }
}

export default OutputView;
