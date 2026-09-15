const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👋 Bienvenue sur Roma Bet IA ! Tes pronostics Betclic arriveront ici."
  );
});

console.log("Roma Bet IA est lancé.");
