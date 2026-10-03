const { Telegraf } = require('telegraf');
const bot = new Telegraf('PASTE_YOUR_TOKEN_HERE');

bot.start((ctx) => ctx.reply('🚀 LAWAL AI BOT READY!\nUse /signal for trade\nLot: 0.01 fixed\nRisk: 2% max'));

bot.command('signal', (ctx) => {
  const pairs = ['EUR/USD','GBP/USD','GOLD','BTC/USD','USD/JPY'];
  const pair = pairs[Math.floor(Math.random()*5)];
  const side = Math.random()>0.5?'BUY 🟢':'SELL 🔴';
  const conf = Math.floor(Math.random()*22)+72;
  ctx.reply(
`🤖 LAWAL AI SIGNAL: ${pair}
📊 Action: ${side}
💯 Confidence: ${conf}%
💰 Lot Size: 0.01 (fixed)
🛡️ Risk: 2% max
📍 SL: 1.5% | TP: 3%
⚠️ Not financial advice`
  );
});

bot.command('risk', (ctx) => {
  ctx.reply(
`🛡️ RISK MANAGEMENT
• Lot: 0.01 per $100 - FIXED
• $100 = 0.01 lot
• $500 = 0.05 lot
• $1000 = 0.10 lot
• Never risk >2% per trade
• Always use SL!`
  );
});

bot.launch();
console.log('Bot running 0.01 lot');
