const Telegram = require("node-telegram-bot-api");
const request = require("request");

const token = "1094066828:AAEActYhCBxe1XCb9N01xNGamwkPfkTv_r8";

const bot = new Telegram(token, { polling: true });

// request(
//   "https://api.telegram.org/bot1094066828:AAEActYhCBxe1XCb9N01xNGamwkPfkTv_r8/getMe",
//   function(error, response, body) {
//     console.error("error:", error); // Print the error if one occurred
//     console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//     console.log("body:", body); // Print the HTML for the Google homepage.
//   }
// );

bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  console.log("msg", msg);
  console.log("match", match);

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", msg => {
  const chatId = msg.chat.id;

  console.log("message", msg);

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message");
});
