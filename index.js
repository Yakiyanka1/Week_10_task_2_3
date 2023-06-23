//Создайте страницу, подключите скрипт. Создайте функцию, которая выведет сообщение в консоли «Я учу JavaScript!».
let getMessage = () => {
    return 'Я учу JavaScript!';
};

console.log(getMessage());

const images = [
    "/assets/1.png",
    "/assets/2.png",
    "/assets/3.png",
    "/assets/4.png",
    "/assets/5.png",
];

const gallery = document.querySelector('.cat__gallery');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let currentImage = 0;

function showImage() {
    gallery.innerHTML = `<img src="${images[currentImage]}" alt="Image ${currentImage + 1}">`;
}

showImage();

prevBtn.addEventListener('click', () => {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    showImage();
});

nextBtn.addEventListener('click', () => {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    showImage();
});