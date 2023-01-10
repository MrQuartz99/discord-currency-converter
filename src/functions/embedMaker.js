const { EmbedBuilder } = require('discord.js');
function makeEmbed(data , firstCurrency , secondCurrency) {

    let embed = new EmbedBuilder()
    .setTitle(`Currency Exchanger`)
    .setFooter({text: `From ${firstCurrency} to ${secondCurrency}`})
    .setColor(data.direction === "up" ? "#00ff14" : "#f00c0c")
    .setImage('attachment://image.png')
    return embed

}
module.exports = makeEmbed