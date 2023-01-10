const CC = require('currency-converter-lt')

async function getCurrency(firstCurrency , secondCurrency) {
    let currencyConverter = new CC({from:firstCurrency, to:secondCurrency, amount:1})
    let result = await currencyConverter.convert()
    return result
}
module.exports = getCurrency