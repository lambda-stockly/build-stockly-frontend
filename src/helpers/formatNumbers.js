export function formatPrice(numAsString) {
  return parseFloat(numAsString, 10).toFixed(2);
}

export function formatPriceChange(numAsStr) {
  const strToNum = parseFloat(numAsStr, 10).toFixed(2);
  return Math.sign(strToNum) > 0
    ? '+' + strToNum
    : parseFloat(numAsStr, 10).toFixed(2);
}

export function formatPercentChange(str) {
  const numOnly = parseFloat(str.split('%')[0], 10).toFixed(2);
  return Math.sign(numOnly) > 0 ? '+' + numOnly + '%' : numOnly + '%';
}
