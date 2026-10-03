const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.8823289593:AAFFeuoF0jTpL2CplY-RmOevow1d35DB0LA);

bot.start((ctx) => ctx.reply('Welcome! Bot is online ✅'));
bot.on('text', (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

bot.launch().then(() => console.log('Bot started'));
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
