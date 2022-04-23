import fetch from 'node-fetch';

export default function LandaChatNode(config) {

    const entry_point = 'https://landamessenger.com/api/v1/integrations/sendBotMessage';
    let _object = this;
    this.config = config;

    this.sendMessage = async (params) => {
        if (_object.config && _object.config.debug) {
            console.log(`Sending message to Landa Messenger`);
            console.log(`chat_id: ${params.chat_id}`);
            console.log(`api_key: ${params.api_key}`);
            console.log(`title: ${params.title}`);
            console.log(`body: ${params.body}`);
            console.log(`url: ${params.url}`);
            console.log(`image: ${params.image}`);
            console.log(`image_elevation: ${params.image_elevation}`);
            console.log(`background_color: ${params.background_color}`);
            console.log(`text_color: ${params.text_color}`);
        }

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
