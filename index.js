const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const WEB_URL = "https://i-kalmyk.vercel.app/";
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    bot.sendMessage(chatId, "Нажми на кнопку чтобы открыть web приложение", {
      reply_markup: {
        keyboard: [
          [
            { text: "Искать", web_app: { url: WEB_URL } },
            { text: "Искать", web_app: { url: WEB_URL } },
            { text: "Искать", web_app: { url: WEB_URL } },
          ],
        ],
      },
    });
  }
});
