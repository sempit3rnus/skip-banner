
let banner = document.querySelector('.banner img');
let imagens = [
    'img/comida1.jpg', 
    'img/comida2.jpg',
    'img/comida3.jpg',
    'img/comida4.jpg',
    'img/comida5.jpg'
];
let trocarImg = 1;


function mudar(){
    banner.src = imagens[trocarImg];
    trocarImg++;

    if(trocarImg == imagens.length){
        trocarImg = 0;
    }
};