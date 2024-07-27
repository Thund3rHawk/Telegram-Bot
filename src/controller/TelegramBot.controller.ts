import TelegramBot from "node-telegram-bot-api";
import { aiResponse } from "../utils/aiResponse";

export async function telegramBot() {
    try {
        const token = process.env.TELEGRAM_BOT_TOKEN as string;
        const bot = new TelegramBot(token, {polling: false});
        
        bot.on('message', async (msg) => {
            const chatId = msg.chat.id;
            const message = await aiResponse(msg.text as string);
            bot.sendMessage(chatId, message as string);
        });        
        
    } catch (error) {
        console.log("telegram bot api error: ", error);
    }
}
