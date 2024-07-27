import TelegramBot from "node-telegram-bot-api";
import { aiResponse } from "../utils/aiResponse";

const token = process.env.TELEGRAM_BOT_TOKEN as string;
const bot = new TelegramBot(token, { polling: true });

const telegramBot = async () => {
    try {
        bot.onText(/\/echo (.+)/, async (msg) => {
            const message = await aiResponse(msg.text as string);            

            bot.on('message', async (msg) => {
                const chatId = msg.chat.id;
                bot.sendMessage(chatId, message as string);
            });
            console.log('message', msg.text);
            console.log ('Response', message);            
        });


    } catch (error) {
        console.log("telegram bot api error: ", error);
    }

}

export { telegramBot }