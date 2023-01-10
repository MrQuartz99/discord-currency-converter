const {WebhookClient} = require('discord.js')
let firstCurrency = "USD"
let secondCurrency = "EGP"
require('dotenv').config()
const webhookURL = process.env.webhookURL
const webhookClient = new WebhookClient({url: webhookURL})
const getCurrency = require('./src/functions/getCurrency')
const createImage = require('./src/functions/createImage')

let previousResult = 0
setInterval(async () => {
    let currency = await getCurrency( firstCurrency , secondCurrency)
    if (previousResult === currency) return
    let attachment = await createImage(currency , previousResult > currency ? "down" : "up")
    previousResult = currency
    webhookClient.send({files: [attachment]})

    
}, 1000 * 60* 5)

