
import LandaChatNode from '../index.js';

new LandaChatNode().sendMessage({
    chat_id: '6defec5ad5a3f7955788ea92371da7c81c54a24be135724cc708af4a168356ae',
    api_key: 'b1209566c845136b70a12db9b562f093851e3bb9814302a23a73ef2be463cbea',
    title: 'Landa Messenger Development',
    body: 'Nuevo usuario registrado jujujuju',
    url: 'https://github.com/landamessenger/landa',
    image: 'https://avatars.githubusercontent.com/u/63705403?s=200&v=4',
    image_elevation: 3.0,
    background_color: '#990B5E4A',
    text_color: '#FFFFFFFF',
}).then(r => {
    console.log(r)
});
