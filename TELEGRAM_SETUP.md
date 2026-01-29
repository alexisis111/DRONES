# Telegram Integration Setup

To enable sending form submissions to Telegram, follow these steps:

## 1. Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat with BotFather and use the `/newbot` command
3. Follow the prompts to create your bot and get the API token

## 2. Get Your Chat ID

1. Send any message to your newly created bot
2. Visit the following URL in your browser:
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
3. Find the `"id"` field under the `"chat"` object in the response - this is your chat ID

## 3. Configure Environment Variables in Netlify

1. Go to your Netlify dashboard
2. Select your site
3. Go to "Site settings" → "Build & deploy" → "Environment"
4. Add these variables:
   - `TELEGRAM_BOT_TOKEN`: Your bot's API token
   - `TELEGRAM_CHAT_ID`: Your chat ID

## 4. Redeploy Your Site

After adding the environment variables, redeploy your site for the changes to take effect.

## How It Works

When someone submits the contact form:
1. The form data is sent to the Netlify function `telegram-webhook.js`
2. The function forwards the data to your Telegram bot
3. Your bot sends the message to your chat
4. The original Netlify form submission still works for storing submissions