const {WebhookClient } = require('discord.js')
let firstCurrency = "USD"
let secondCurrency = "EGP"
require('dotenv').config()
const webhookURL = process.env.webhookURL
const webhookClient = new WebhookClient({url: webhookURL})
const getCurrency = require('./src/functions/getCurrency')
const createImage = require('./src/functions/createImage')
const makeEmbed = require('./src/functions/embedMaker')

let previousResult = 0
setInterval(async () => {
    let currency = await getCurrency( firstCurrency , secondCurrency)
    if (previousResult === currency) return
    let data = await createImage(currency , previousResult > currency ? "down" : "up" , firstCurrency , secondCurrency)
    previousResult = currency
    let embed = makeEmbed(data , firstCurrency , secondCurrency)
    webhookClient.send({embeds: [embed] , files: [data.attachment]})
}, 1000  * 5)

