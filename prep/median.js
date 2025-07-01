function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];

  return median;
}
console.log(calculateMedian([10, 20, 30, 50, 60])); // Output: 30
module.exports = calculateMedian;
