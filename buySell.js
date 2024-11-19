function maxProfit(prices) {
  let maxProfit = 0;
  let bestBuy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < bestBuy) {
      bestBuy = prices[i]; // Update the lowest price seen so far
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - bestBuy); // Calculate the profit and update maxProfit
    }
  }

  return maxProfit;
}

console.log(maxProfit([8, 7, 9, 2, 5, 1]));
