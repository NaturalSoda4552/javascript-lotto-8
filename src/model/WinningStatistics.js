PRIZE_MONEY = Object.freeze({
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
});

class WinningStatistics {
  #rankCounts;
  #purchaseAmount;

  constructor(rankCounts, purchaseAmount) {
    this.#rankCounts = rankCounts;
    this.#purchaseAmount = purchaseAmount;
  }

  getTotalPrize() {
    const totalPrize = 0;
    for (const rank in this.#rankCounts) {
      if (this.#rankCounts[rank] > 0 && PRIZE_MONEY[rank]) {
        totalPrize += PRIZE_MONEY[rank] * this.#rankCounts[rank];
      }
    }
    return totalPrize;
  }
  getProfitRate() {
    const totalPrize = this.getTotalPrize();
    if (this.#purchaseAmount === 0) return 0;

    const profitRate = (totalPrize / this.#purchaseAmount) * 100;
    return Math.round(profitRate * 10) / 10;
  }
}
