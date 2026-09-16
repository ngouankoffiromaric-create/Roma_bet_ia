const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === "🎯 Ticket du jour") {
    bot.sendMessage(chatId, "🎯 TICKET BETCLIC DU JOUR\n\n✅ PSG gagne\n✅ Inter Milan gagne\n💰 Cote estimée : 12.80");
  }

  if (msg.text === "⚽ Scores exacts") {
    bot.sendMessage(chatId, "⚽ SCORES EXACTS\n\nPSG 2-0\nInter 2-1\nReal Madrid 3-1 Atlético");
  }

  if (msg.text === "💰 Grosse cote") {
    bot.sendMessage(chatId, "💰 GROSSE COTE BETCLIC\n\nCote estimée : 18.50");
  }

  if (msg.text === "👟 Buteurs") {
    bot.sendMessage(chatId, "👟 BUTEURS\n\nMbappé\nLautaro Martínez\nVinícius Jr");
  }

  if (msg.text === "🚩 Corners") {
    bot.sendMessage(chatId, "🚩 CORNERS\n\nPSG +9\nReal Madrid +10");
  }

  if (msg.text === "✅ Les deux équipes marquent") {
    bot.sendMessage(chatId, "✅ BTTS\n\nMarseille – Lyon\nReal Madrid – Atlético");
  }
});
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👋 Bienvenue sur ROMA BET IA 🇨🇮\n\nChoisis une option 👇",
    {
      reply_markup: {
        keyboard: [
          ["🎯 Ticket du jour", "⚽ Scores exacts"],
          ["💰 Grosse cote", "👟 Buteurs"],
          ["🚩 Corners", "✅ Les deux équipes marquent"]
        ],
        resize_keyboard: true
      }
    }
  );
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
bot.onText(/\/bonjour/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👋 Salut mon frère ! DOMI V3 est bien en ligne 🇨🇮🔥"
  );
});
bot.onText(/\/domi/, (msg) => {
  bot.sendMessage(msg.chat.id, `
🇨🇮🔥 DOMI BET IA – Ticket du jour

🎯 TICKET SÉCURISÉ
✅ PSG gagne
✅ Inter Milan ou Nul
✅ Plus de 1,5 buts : Real Madrid – Atlético

💎 TICKET COTE 10 À 20
✅ Real Madrid gagne
✅ Marseille gagne
✅ Les deux équipes marquent : Newcastle – Tottenham
✅ Plus de 2,5 buts : Juventus – Lazio

📊 Confiance DOMI : 87%
💰 Cote estimée : 14.80
  `);
});
console.log("DOMI V2 est lancé !");


const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DOMI V2 est en ligne !");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});

