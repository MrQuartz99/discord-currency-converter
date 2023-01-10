const { AttachmentBuilder } = require('discord.js')
const { createCanvas, loadImage , registerFont } = require('canvas')
async function createImage(currency , direction , firstCurrency , secondCurrency) {
    const { createCanvas, loadImage  } = require('canvas')

    const canvas = createCanvas(800	, 300)
    const ctx = canvas.getContext('2d')
    ctx.fillRect(0, 0, 800, 300)
    

    ctx.font = "40px Sans-Serif";
    // color of the text 

    ctx.textAlign = "center";
    if(direction === "up") {
        ctx.fillStyle = "#00ff14"
    } else {
        ctx.fillStyle = "#f00c0c"
    }
    let backgroundImage = "https://i.ibb.co/8zfhPbV/Untitled-design-11.png"
    let image = await loadImage(backgroundImage)
    ctx.drawImage(image, 0, 0, 800, 300)
    // at the middle of the canvas
    ctx.fillText(`${firstCurrency} to ${secondCurrency} Converter ${direction === "up" ? "📈" : "📉"}`, 400, 50);
    ctx.fillText(`1 ${firstCurrency} = ${currency} ${secondCurrency}`, 400, 100     );
    ctx.fillText(`5 ${firstCurrency} = ${Number(currency * 5).toFixed(2)} ${secondCurrency}`, 400, 150);
    ctx.fillText(`10 ${firstCurrency} = ${Number(currency * 10).toFixed(2)} ${secondCurrency}`, 400, 200);
    ctx.fillText(`100 ${firstCurrency} = ${Number(currency * 100).toFixed(2)} ${secondCurrency}`, 400, 250);
    ctx.fillText(`Made With ❤️ By MrQuartz#3328`, 400, 300);
    // Get the buffer
    const buffer = canvas.toBuffer('image/png')
    // make a new discord attachment
    const attachment = new AttachmentBuilder(buffer , {name: 'image.png'})
    return {
        attachment,
        direction
    }
 
}
  
module.exports = createImage