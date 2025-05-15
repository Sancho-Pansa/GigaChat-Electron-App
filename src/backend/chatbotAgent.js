import GigaChat from "gigachat";
import * as dotenv from 'dotenv';
import { Agent } from 'node:https';

dotenv.config();

const httpsAgent = new Agent({
  rejectUnauthorized: false
});

const giga = new GigaChat({
  timeout: 600,
  model: "GigaChat",
  credentials: process.env.AUTH_KEY,
  httpsAgent: httpsAgent
});

export async function sendResponse(message) {
  const response = await giga.chat({
    messages: [
      {
        role: "user",
        content: message
      }
    ]
  });
  return response.choices[0]?.message.content;
}

export async function getBalance(usage = "GigaChat") {
  const response = await giga.balance();
  console.log(response);
  const chatType = response?.balance.find((v) => v.usage === usage);
  return chatType?.value;
}