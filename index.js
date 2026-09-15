const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
`👋 Bienvenue sur ROMA BET IA 🇨🇮

Choisis une commande :

🎯 /ticket - Ticket Betclic du jour
⚽ /score - Scores exacts
🥅 /buteur - Buteurs probables
🔥 /double - Les deux équipes marquent
💎 /safe - Ticket sécurisé
🚀 /grossecote - Grosse cote 10 à 20`);
});

bot.onText(/\/ticket/, (msg) => {
  bot.sendMessage(msg.chat.id,
`🎯 TICKET BETCLIC DU JOUR

✅ PSG gagne
✅ Inter Milan gagne
✅ Les deux équipes marquent : Marseille - Lyon
✅ Plus de 2,5 buts : Real Madrid - Atletico

💰 Cote estimée : 12.80`);
});

bot.onText(/\/score/, (msg) => {
  bot.sendMessage(msg.chat.id,
`📊 SCORES EXACTS

⚽ PSG 2-1 Nice
⚽ Inter 2-0 Bologna
⚽ Real Madrid 3-1 Atletico`);
});

bot.onText(/\/buteur/, (msg) => {
  bot.sendMessage(msg.chat.id,
`🥅 BUTEURS PROBABLES

⭐ Mbappé
⭐ Lautaro Martinez
⭐ Vinicius Junior`);
});

bot.onText(/\/double/, (msg) => {
  bot.sendMessage(msg.chat.id,
`🔥 LES DEUX ÉQUIPES MARQUENT

✅ Marseille - Lyon
✅ Newcastle - Tottenham
✅ Villarreal - Betis`);
});

bot.onText(/\/safe/, (msg) => {
  bot.sendMessage(msg.chat.id,
`💎 TICKET SÉCURISÉ

✅ PSG gagne
✅ Inter ou Nul
✅ Plus de 1,5 buts

💰 Cote : 3.75`);
});

bot.onText(/\/grossecote/, (msg) => {
  bot.sendMessage(msg.chat.id,
`🚀 GROSSE COTE BETCLIC

✅ PSG gagne
✅ Real Madrid gagne
✅ Inter gagne
✅ Marseille gagne
✅ Les deux équipes marquent : Newcastle - Tottenham

💰 Cote : 18.40`);
});

console.log("DOMI V2 est lancé !");
