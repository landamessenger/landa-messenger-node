# landa-messenger-node

Landa Messenger JavaScript API for sending messages to chats.

```bash
npm install @landamessenger/landa-messenger-api --save
```

Check the documentation and test the integration from any chat access page in [Landa Messenger](https://landamessenger.com/).

```js
import LandaMessengerAPI from "@landamessenger/landa-messenger-api";

const api = new LandaMessengerAPI();
api.chat.send({
    id: '6defec5ad5a3f7955788eaceaae617c81c54a24be135724cc708af4a168356ae',
    api_key: 'b1209566c845136b70a12db9b562f0a6658e3bb9814302a23a73ef2be463cbea',
    title: 'Test Node Title',
    body: 'Test Node Body',
    url: 'https://github.com/landamessenger/landa-messenger-node',
    image: 'https://avatars.githubusercontent.com/u/63705403?s=200&v=4',
    image_elevation: 3.0,
    background_color: '#990B5E4A',
    text_color: '#FFFFFFFF',
}).then(r => {
    console.log(r)
});
```

Success response:

```json
{
  "response": {
    "message_id": "bdcd418cd984aa552586d7394009cb5aa44a543218643063f63a5b158ac63c78",
    "response": "work_done"
  }
}
```