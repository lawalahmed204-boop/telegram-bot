 require('http').createServer((_,res)=>res.end('Bot is alive')).listen(process.env.PORT||10000);const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome! Bot is online ✅'));
bot.on('text', (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

bot.launch().then(() => console.log('Bot started'));
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
