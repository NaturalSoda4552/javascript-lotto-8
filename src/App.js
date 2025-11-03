import Lotto from './model/Lotto.js';
import LottoGame from './model/LottoGame.js';
import WinningLotto from './model/WinningLotto.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Validator from './utils/Validator.js';

class App {
  #inputView;
  #outputView;
  #validator;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#validator = new Validator();
  }

  async run() {
    let purchaseAmount;
    let winningNumberLotto;
    let bonusNumber;

    while (true) {
      try {
        purchaseAmount = await this.#inputView.inputPurchaseAmount();
        this.#validator.validatePurchaseAmount(purchaseAmount);

        break;
      } catch (error) {
        this.#outputView.printError(error);
      }
    }
    const lottoGame = new LottoGame(purchaseAmount);
    this.#outputView.printLottos(lottoGame.getLottos());

    while (true) {
      try {
        let winningNumbers = await this.#inputView.inputWinningNumbers();
        winningNumberLotto = new Lotto(winningNumbers);

        break;
      } catch (error) {
        this.#outputView.printError(error);
      }
    }
    while (true) {
      try {
        bonusNumber = await this.#inputView.inputBonusNumber();
        this.#validator.validateBonusNumber(bonusNumber);
        this.#validator.validateWinningNumbersAndBonusNumber(
          winningNumberLotto,
          bonusNumber,
        );

        break;
      } catch (error) {
        this.#outputView.printError(error);
      }
    }

    const winningLotto = new WinningLotto(winningNumberLotto, bonusNumber);
    const winningStatistics = lottoGame.createWinningStatistics(winningLotto);
    this.#outputView.printWinningStatistics(winningStatistics);
  }
}

export default App;
