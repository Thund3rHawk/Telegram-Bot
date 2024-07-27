import TelegramBot from "node-telegram-bot-api";
import { aiResponse } from "../utils/aiResponse";

const token = process.env.TELEGRAM_BOT_TOKEN as string;

const telegramBot = async () => {
    try {
        const bot = new TelegramBot(token);
        bot.onText(/\/echo (.+)/, async (msg, match) => {
            const chatId = msg.chat.id;
            if (match) {
                const resp = match[1]; 
                bot.sendMessage(chatId, resp);
            }          
        });

        bot.on('message', async (msg) => {
            const message = await aiResponse(msg.text as string);
            const chatId = msg.chat.id;
            bot.sendMessage(chatId, message as string);
            console.log('message', msg.text);
            console.log('Response', message);
        });
        

    } catch (error) {
        console.log("telegram bot api error: ", error);
    }

}

export { telegramBot }