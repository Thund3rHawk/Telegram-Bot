import { Request, Response } from "express";
import TelegramBot from "node-telegram-bot-api";
import { aiResponse } from "../utils/aiResponse";


const telegramBot = async (req: Request, res: Response) => {
    const token = process.env.TELEGRAM_BOT_TOKEN as string;
    const bot = new TelegramBot(token, { polling: false });
    try {
        bot.onText(/\/echo (.+)/, async (msg) => {
            const chatId = msg.chat.id;
            const message = await aiResponse(msg.text as string);
            bot.sendMessage(chatId, message as string);
        });

        // bot.on('message', async (msg) => {
        //     const chatId = msg.chat.id;
        //     console.log("msg from telegram: ", msg);
        //     bot.sendMessage(chatId, 'message recieved');
        // });

    } catch (error) {
        console.log("telegram bot api error: ", error);
    }

}

export { telegramBot }