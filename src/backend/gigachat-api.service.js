import GigaChat from "gigachat";
import { Message } from "gigachat/interfaces";
import * as dotenv from 'dotenv';
import { Agent } from 'node:https';

dotenv.config();

/** @type {Message[]} */
const messageStack = [];

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
  messageStack.push({
    role: "user",
    content: message
  });

  const response = await giga.chat({
    messages: messageStack
  });
  const responseContent = response.choices[0]?.message;
  messageStack.push(
    responseContent
  );

  return responseContent.content;
}

export async function getBalance(usage = "GigaChat") {
  const response = await giga.balance();
  console.log(response);
  const chatType = response?.balance.find((v) => v.usage === usage);
  return chatType?.value ?? -1;
}