document.addEventListener('DOMContentLoaded', function() {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const slides = document.querySelectorAll('.gallery-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slideWidth = slides[0].offsetWidth; // Ширина каждого слайда, включая отступы

    let currentSlide = Math.floor(slides.length / 2); // Стартовый активный слайд: центральный

    function updateSlides() {
        const offset = -1 * currentSlide * slideWidth + (galleryWrapper.offsetWidth / 2 - slideWidth / 2);

        galleryWrapper.style.transform = 'translateX(' + offset + 'px)';

        // Убираем класс active у всех слайдов
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });

        // Добавляем класс active только к текущему центральному слайду
        slides[currentSlide].classList.add('active');
    }

    // Инициализация: показываем активный слайд в центре
    updateSlides();

    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    });

    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    });
});




// Получаем ссылки на элементы, с которыми будем взаимодействовать
const kzLink = document.getElementById('kz-link');
const ruLink = document.getElementById('ru-link');

// Находим все элементы, которые нужно изменить
const elementsToTranslate = document.querySelectorAll('[data-lang]');
const elementsOriginalTexts = {}; // Объект для хранения исходных текстов элементов

// Запоминаем исходные тексты элементов
elementsToTranslate.forEach(element => {
    const langId = element.getAttribute('data-lang-id');
    elementsOriginalTexts[langId] = element.textContent;
});

// Обработчик для переключения на казахский
kzLink.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    elementsToTranslate.forEach(element => {
        const textKz = element.dataset.langKz; // Получаем текст на казахском из data-lang-kz
        element.textContent = textKz; // Устанавливаем текст на казахском
    });
});

// Обработчик для сброса на русский и перезагрузки страницы
ruLink.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    // Восстанавливаем исходные тексты
    elementsToTranslate.forEach(element => {
        const langId = element.getAttribute('data-lang-id');
        element.textContent = elementsOriginalTexts[langId];
    });

    // Перезагружаем страницу
    location.reload();
});



document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.querySelector('nav ul.menu');
    menu.classList.toggle('open');
});