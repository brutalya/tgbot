require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
	const chatId = msg.chat.id;

	bot.sendMessage(
		chatId,
		'Welcome to Gryadki Game! Click the button below to open the game.',
		{
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: 'Open Gryadki Game',
							web_app: { url: 'https://gryadki.click' },
						},
					],
				],
			},
		}
	);
});

console.log('Bot is running...');
