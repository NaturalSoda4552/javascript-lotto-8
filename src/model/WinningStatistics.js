import { RANK_PRIZE_MONEY } from '../constants/lottoConstants.js';

class WinningStatistics {
  #rankCounts;
  #purchaseAmount;

  constructor(rankCounts, purchaseAmount) {
    this.#rankCounts = rankCounts;
    this.#purchaseAmount = purchaseAmount;
  }

  getTotalPrize() {
    const totalPrize = Object.keys(this.#rankCounts).reduce((acc, rank) => {
      return acc + this.#rankCounts[rank] * RANK_PRIZE_MONEY[rank] || 0;
    }, 0);

    return totalPrize;
  }

  getProfitRate() {
    const totalPrize = this.getTotalPrize();
    if (this.#purchaseAmount === 0) return 0;

    const profitRate = (totalPrize / this.#purchaseAmount) * 100;
    return Math.round(profitRate * 10) / 10;
  }

  getRankCounts() {
    return { ...this.#rankCounts };
  }
}

export default WinningStatistics;
