# Telegram Bot

This project integrates Gemini AI into a Telegram bot using a webhook for real-time updates. The following documentation will guide you through setting up the project locally, configuring the webhook, and ensuring seamless bot operation.

## Prerequisites

1. **Telegram Bot Token**: Obtain a bot token from Telegram's BotFather.
2. **Gemini AI API Access**: Ensure access to the Gemini AI API.
3. **Ngrok**: Install ngrok to expose your local server to the internet securely.
4. **Yarn**: Use Yarn as the package manager for the project.

## Setup Instructions

### 1. Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Thund3rHawk/Telegram-Bot.git
cd Telegram-Bot
```

### 2. Installing Dependencies

Use Yarn to install the necessary dependencies:

```bash
yarn install
```

### 3. Configuration

Create a `.env` file in the root directory to store environment variables:

```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
GEMINI_API_KEY=your_gemini_api_key
PORT=8080
```

Replace `your_telegram_bot_token` and `your_gemini_api_key` with your actual credentials.

### 4. Running the Server

Start the server using Yarn:

```bash
yarn dev
```

Your local server should now be running, listening for incoming webhook requests on the specified port.

### 5. Setting Up the Webhook

To enable your Telegram bot to receive updates via webhook:

1. **Expose your local server** using ngrok:

   ```bash
   ngrok http 8080
   ```

2. **Copy the public `https` URL** provided by ngrok. This URL will serve as the `WEBHOOK_URL`.

3. **Set the webhook URL** with Telegram:

   ```bash
   https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook?url=<WEBHOOK_URL>
   ```

   Replace `<TELEGRAM_BOT_TOKEN>` with your bot's token and `<WEBHOOK_URL>` with the URL from ngrok.

### 6. Updating the Webhook URL

Every time you restart ngrok, update the webhook URL:

1. **Restart ngrok** and copy the new URL.
2. **Re-set the webhook URL** with the new ngrok URL.

### 7. Testing the Bot

Verify the webhook setup:

- **Check webhook status**:

  ```bash
  https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/getWebhookInfo
  ```

- **Send a message** to your bot to ensure it responds correctly.

## Troubleshooting

- Ensure ngrok is running and accessible.
- Check server logs for errors in handling webhook requests.
- Verify the bot token and webhook URL format.

## Conclusion

This README covers the basic setup, configuration, and maintenance of a Gemini AI Telegram bot with a webhook. For more detailed information on the Gemini AI API and Telegram Bot API, refer to their official documentation.
