import LottoGame from './model/LottoGame.js';
import WinningLotto from './model/WinningLotto.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async run() {
    let purchaseAmount;
    let winningNumbers;
    let bonusNumber;

    while (true) {
      try {
        purchaseAmount = await this.#inputView.inputPurchaseAmount();

        break;
      } catch (error) {
        this.#outputView.printError(error);
      }
    }
    const lottoGame = new LottoGame(purchaseAmount);
    this.#outputView.printLottos(lottoGame.getLottos());

    while (true) {
      try {
        winningNumbers = await this.#inputView.inputWinningNumbers();

        break;
      } catch (error) {
        this.#outputView.printError(error);
      }
    }
    while (true) {
      try {
        bonusNumber = await this.#inputView.inputBonusNumber();

        break;
      } catch (error) {
        this.#outputView.printError(error);
      }
    }

    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
    const winningStatistics = lottoGame.createWinningStatistics(winningLotto);
    this.#outputView.printWinningStatistics(winningStatistics);
  }
}

export default App;
