#!/usr/bin/env node

import fetch from 'node-fetch';
import args from 'args'

export default function LandaMessengerNode() {

    const entry_point = 'https://landamessenger.com/api/v1/integrations/sendBotMessage';

    this.sendMessage = async (params) => {
        /**
         * Mandatory parameters
         */
        if (params.chat_id === undefined || typeof params.chat_id !== 'string' || params.chat_id.length === 0) {
            console.error('not valid chat_id')
            return
        } else if (params.api_key === undefined || typeof params.api_key !== 'string' || params.api_key.length === 0) {
            console.error('not valid api_key')
            return
        } else if (params.title === undefined || typeof params.title !== 'string' || params.title.length === 0) {
            console.error('not valid title')
            return
        } else if (params.body === undefined || typeof params.body !== 'string' || params.body.length === 0) {
            console.error('not valid body')
            return
        }

        /**
         * Optional parameters
         */
        if (params.url !== undefined && (typeof params.url !== 'string' || params.url.length === 0)) {
            console.error('not valid url')
            return
        } else if (params.image !== undefined && (typeof params.image !== 'string' || params.image.length === 0)) {
            console.error('not valid image')
            return
        }

        try {
            const response = await fetch(entry_point, {method: 'POST', body: JSON.stringify(params)});
            return await response.json();
        } catch (e) {
            console.error(e);
            return e
        }
    }
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
    .command('send', 'Send message', (name, sub, options) => {
        new LandaMessengerNode().sendMessage({
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



