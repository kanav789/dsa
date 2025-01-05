// Brute force approach
var maxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let currprofit = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        currprofit = prices[j] - prices[i];
      }
      maxProfit = Math.max(currprofit, maxProfit);
    }
  }

  return maxProfit;
};

// Better solution

console.log(maxProfit([7, 6, 5, 4, 3, 2, 1]));
