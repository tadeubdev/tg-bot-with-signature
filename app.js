require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const db = require('./database');
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const MOCK_PAYMENT_LINK = 'https://mock-payment.com/pay';

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const welcomeMessage = `Olá ${msg.from.first_name}, bem-vindo ao nosso serviço de assinaturas VIP! Escolha um canal para acessar:`;

  // Aqui você listaria os canais disponíveis para o usuário escolher
  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Canal VIP 1", callback_data: '2245433879' }],
      ]
    }
  };
  
  bot.sendMessage(chatId, welcomeMessage, options);
});

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const selectedChannel = query.data; // 'vip1' or 'vip2'
  
  // Gerar link de pagamento (aqui é um mock)
  const paymentLink = `${MOCK_PAYMENT_LINK}?channel=${selectedChannel}&user=${chatId}`;

  bot.sendMessage(chatId, `Clique no link para realizar o pagamento: ${paymentLink}`);
  
  // Aqui você pode adicionar lógica para salvar a tentativa de pagamento no banco de dados
});

bot.onText(/\/checkpayment/, (msg) => {
  const chatId = msg.chat.id;

  // Aqui você pode simular a checagem do pagamento (mock)
  const paymentSuccess = true; // Simulação: pagamento foi bem-sucedido

  if (paymentSuccess) {
    // Gerar link de acesso ao canal (expira ao ser usado)
    const accessLink = `https://t.me/joinchat/2245433879?user=${chatId}`;

    // Salvar no banco de dados o status de assinatura do usuário
    db.run(`UPDATE users SET subscription_status = 'active', channel_id = 'vip1', subscription_expires_at = 'YYYY-MM-DD' WHERE telegram_id = ?`, [chatId]);

    bot.sendMessage(chatId, `Pagamento confirmado! Aqui está o seu link de acesso: ${accessLink}`);
  } else {
    bot.sendMessage(chatId, `Não conseguimos confirmar o pagamento. Por favor, tente novamente.`);
  }
});