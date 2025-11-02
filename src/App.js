import LottoGame from './model/LottoGame.js';
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
    const purchaseAmount = await this.#inputView.inputPurchaseAmount();

    const lottoGame = new LottoGame(purchaseAmount);
    this.#outputView.printLottos(lottoGame.getLottos());

    const winningNumbers = await this.#inputView.inputWinningNumbers();
    const bonusNumber = await this.#inputView.inputBonusNumber();
  }
}

export default App;
