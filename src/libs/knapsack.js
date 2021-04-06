function knapsack(values, weights, weightSum) {
  let dp = new Array(weightSum + 1).fill(0)
  for (let i = 0; i < weights.length; i++) {
    for (let j = weightSum; j >= weights[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i])
    }
  }
  return dp[weightSum]
}

let values = [6, 3, 5, 4, 6]
let weights = [2, 2, 6, 5, 4]
let weightSum = 10

let maxValue = knapsack(values, weights, weightSum)
// console.log(maxValue)


function climbStairs(n) {
  let dp = [1, 1]
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  
  return dp[n]
}

// console.log(climbStairs(5))