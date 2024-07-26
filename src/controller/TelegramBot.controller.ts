import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import TelegramBot from "node-telegram-bot-api";


const telegramBot = asyncHandler (async (req:Request,res:Response)=>{
    // const {message} = req.body;
    try {
        const token = process.env.TELEGRAM_BOT_TOKEN as string;
        const bot = new TelegramBot(token, {polling: true});
        
        bot.onText(/\/echo (.+)/, (msg, match) => {
            const chatId = msg.chat.id;
            // console.log(msg);
            
            if (match != null){
                const resp = match[1];
                bot.sendMessage(chatId, resp);
            }
        });
        
        bot.on('message', async (msg) => {
            const chatId = msg.chat.id;
            console.log("msg from telegram: ", msg);
            // const message = await aiResponse(msg as string);
            bot.sendMessage(chatId, 'message recieved');
          });
        
    } catch (error) {
        console.log ("telegram bot api error: ", error);
    }
    
})

export {telegramBot}