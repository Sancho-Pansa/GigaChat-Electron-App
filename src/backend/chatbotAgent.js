import GigaChat from "gigachat";
import * as dotenv from 'dotenv';
import { Agent } from 'node:https';

dotenv.config();

const httpsAgent = new Agent({
  rejectUnauthorized: false
});

const client = new GigaChat({
  timeout: 600,
  model: "GigaChat",
  credentials: process.env.AUTH_KEY,
  httpsAgent: httpsAgent
});

export default async function sendResponse(message) {
  const response = await client.chat({
    messages: [
      {
        role: "user",
        content: message
      }
    ]
  });
  return response.choices[0]?.message.content;
}