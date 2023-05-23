const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const WEB_URL = process.env.WEB_URL;
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    bot.sendMessage(chatId, "Нажми на кнопку чтобы открыть web приложение", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Словарь", web_app: { url: WEB_URL } },
            { text: "Избранное", web_app: { url: WEB_URL + "favourites" } },
            { text: "Квест", web_app: { url: WEB_URL + "quests" } },
          ],
        ],
      },
    });
  }
});
