import LottoGame from './model/LottoGame.js';
import InputView from './view/InputView.js';

class App {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async run() {
    const purchaseAmount = await this.#inputView.inputPurchaseAmount();
    const winningNumbers = await this.#inputView.inputWinningNumbers();
    const bonusNumber = await this.#inputView.inputBonusNumber();

    const lottoGame = new LottoGame(purchaseAmount);
  }
}

export default App;
