const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
     "👋 Bienvenue sur Roma Bet IA ! Envoie /ticket pour recevoir le ticket du jour."
  );
});
    
 bot.onText(/\/ticket/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `🎯 ROMA BET IA

✅ Ticket Betclic du jour

⚽ Real Madrid gagne
⚽ Inter Milan marque
⚽ Les deux équipes marquent : OUI
⚽ Plus de 2,5 buts

💰 Cote estimée : 8.50`
  );
});

console.log("Roma Bet IA est lancé.");
