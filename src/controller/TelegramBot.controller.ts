import TelegramBot from "node-telegram-bot-api";
import { aiResponse } from "../utils/aiResponse";

const token = process.env.TELEGRAM_BOT_TOKEN as string;

const telegramBot = async () => {
    try {
        const bot = new TelegramBot(token, {polling: false});
        
        bot.startPolling();
        bot.onText(/\/echo (.+)/, async (msg) => {
            const message = await aiResponse(msg.text as string);
            const chatId = msg.chat.id;
            bot.sendMessage(chatId, message as string);
        });        
        bot.stopPolling();
        
    } catch (error) {
        console.log("telegram bot api error: ", error);
    }

}

export { telegramBot }