
import LandaMessengerAPI from "../index.js";

const api = new LandaMessengerAPI();
api.chat.send({
    id: '1cdd952f044d54cbaa8b6d582640348d5647bfc4babf46709c549fddbbe8c630',
    api_key: 'c9fe244f8bf09760e959149921e845d6bf1473e6916e45db214d01df8d4ce95a',
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