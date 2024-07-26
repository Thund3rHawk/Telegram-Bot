import express from 'express'
import { telegramBot } from '../src/controller/TelegramBot.controller';

const router = express.Router();

router.route('/').get(telegramBot)

export {router}