const CC = require('currency-converter-lt')

async function getCurrency(firstCurrency , secondCurrency) {
    let currencyConverter = new CC({from:firstCurrency, to:secondCurrency, amount:1})
    let result = await currencyConverter.convert()
    if(result === undefined) return 0
    if(result.toString().length === 4) {
        let newResult = result.toString().slice(0,2) + "." + result.toString().slice(2,4)
        return parseFloat(newResult)
    }
    return result
}
module.exports = getCurrency