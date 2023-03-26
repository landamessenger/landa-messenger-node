import fetch from 'node-fetch';

export default function ChatApi() {

    const api = 'https://landamessenger.com/api';
    const endpoint = 'chat';

    this.send = async (params) => {
        /**
         * Mandatory parameters
         */
        if (params.id === undefined || typeof params.id !== 'string' || params.id.length === 0) {
            console.error('not valid id')
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
            const response = await fetch(`${api}/${endpoint}/send`, {method: 'POST', body: JSON.stringify(params)});
            const res = await response.text();
            try {
                return JSON.parse(res);
            } catch (e) {
                return res;
            }
        } catch (e) {
            console.error(e);
            return e
        }
    }
}
