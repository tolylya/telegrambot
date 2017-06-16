// OdessaJSBot
const TelegramBot = require('node-telegram-bot-api');
const token = '413112769:AAH45Jt4qYWKcMNjQMls9u_lunlRAoYo27o';
const options = {
    polling: true,
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Кнопка 1', callback_data: '1' }],
            [{ text: 'Кнопка 2', callback_data: 'data 2' }],
            [{ text: 'Кнопка 3', callback_data: 'text 3' }]
        ]
    })
};
const bot = new TelegramBot(token, options);

bot.on('message', (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'так блэт');
});
