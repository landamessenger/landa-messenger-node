#!/usr/bin/env node

import args from 'args'
import ChatApi from "./src/chat_api.js";

export default function LandaMessengerAPI() {
    this.chat = new ChatApi()
}

args
    .option('chat_id', 'Chat ID', '', true)
    .option('api_key', 'Chat access key', '', true,)
    .option('title', 'Message\'s title', '', true,)
    .option('body', 'Message\'s body', '', true)
    .option('url', 'Url to open when pressing a message', '', false)
    .option('image', 'Message\'s image icon', '', false)
    .option('image_elevation', 'Message\'s image icon elevation', 0, false)
    .option('background_color', 'Message\'s background color', '', false)
    .option('text_color', 'Message\'s text color', '', false)
    .command('chat-send', 'Send message', (name, sub, options) => {
        const api = new LandaMessengerAPI();
        api.chat.send({
            chat_id: options.chatId,
            api_key: options.apiKey,
            title: options.title,
            body: options.body,
            url: options.url.length > 0 ? options.url : undefined,
            image: options.image.length > 0 ? options.image : undefined,
            image_elevation: options.imageElevation,
            background_color: options.backgroundColor.length > 0 ? options.backgroundColor : undefined,
            text_color: options.textColor.length > 0 ? options.textColor : undefined,
        }).then(r => {
            console.log(r)
        });
    }, ['s'])

const flags = args.parse(process.argv)



