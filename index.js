// Пролистывание картинок item-image
const imageContainers = document.querySelectorAll(".item-images");

imageContainers.forEach(im => {
    const images = im.querySelectorAll(".item-image");
    im.currentImage = 0;
    for (let i = 0; i < images.length; i++) {
        images[i].style.left = `${i*250}px`
    }
    im.onmouseenter = function() {
        this.timer = setInterval(() => {
            this.currentImage = (this.currentImage + 1) % this.children.length;
            for (let i = 0; i < images.length; i++) {
                images[i].style.left = `${i*250-250*this.currentImage}px`
            }
        }, 2000);
    }
    im.onmouseout = function() {
        this.currentImage = 0;
        for (let i = 0; i < images.length; i++) {
            images[i].style.left = `${i*250}px`
        }
        clearInterval(this.timer)
    }
});

// Отсчет времени до конца акции
// Получение из документа всех элементов с классом "digit"
const d1 = document.getElementById("digit1");
const d2 = document.getElementById("digit2");
const d3 = document.getElementById("digit3");
const d4 = document.getElementById("digit4");
const d5 = document.getElementById("digit5");
const d6 = document.getElementById("digit6");
const d7 = document.getElementById("digit7");
const d8 = document.getElementById("digit8");
// Установка конечной даты акции
const endTime = new Date(2024, 4, 29, 17, 30, 0);

function updateCountdown() {
    /**
     * Данная функция вызывается каждую секунду для обновления времени до конца
     * акции. В каждую из ранее полученных элементов записывается
     * соответствующая цифра.
     */
    const timeLeft = endTime - Date.now();
    const totalSeconds = Math.floor(timeLeft / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const seconds = totalSeconds % 60;
    const minutes = totalMinutes % 60;
    const hours = totalHours % 24;
    const days = totalDays % 100;
    // Обновление цифр по очереди
    d1.innerText = Math.floor(days / 10);
    d2.innerText = days % 10;
    d3.innerText = Math.floor(hours / 10);
    d4.innerText = hours % 10;
    d5.innerText = Math.floor(minutes / 10);
    d6.innerText = minutes % 10;
    d7.innerText = Math.floor(seconds / 10);
    d8.innerText = seconds % 10;
}
const countdown = setInterval(updateCountdown, 1000);
// Конец отсчета времени до конца акции

// Плавная прокрутка до нужного пункта меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Предотвращаем стандартное поведение браузера в виде перехода по ссылке
        e.preventDefault();
        // Прокручиваем страницу до нужного пункта меню
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Конец плавной прокрутки до нужного пункта меню

// Скроллинг стрелками по горизонтали
const leftArrow1 = document.getElementById("cont3-scroll-left");
const rightArrow1 = document.getElementById("cont3-scroll-right");
const leftArrow2 = document.getElementById("cont4-scroll-left");
const rightArrow2 = document.getElementById("cont4-scroll-right");

leftArrow1.addEventListener("click", () => {
    document.getElementById("cont3-subcont").scrollLeft -= 200;
});
rightArrow1.addEventListener("click", () => {
    document.getElementById("cont3-subcont").scrollLeft += 200;
});
leftArrow2.addEventListener("click", () => {
    document.getElementById("cont4-subcont").scrollLeft -= 200;
});
rightArrow2.addEventListener("click", () => {
    document.getElementById("cont4-subcont").scrollLeft += 200;
});
// Конец скроллинга стрелками по горизонтали

// Кнопка "наверх" и скрытие/показ меню при скролле страницы
window.onscroll = scrollFunction;
let oldScroll = 0;

/**
 * Функция-обработчик скроллинга страницы.
 * Отвечает за отображение/скрытие кнопки "наверх",
 * а также скрытие/показ меню при скролле страницы
 */
function scrollFunction() {
    const newScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const scrolledDown = newScroll > oldScroll;
    oldScroll = newScroll;
    if (scrolledDown) {
        document.getElementById("menu").style.opacity = "0.1";
    }
    else {
        document.getElementById("menu").style.opacity = "1";
    }

    const notOnTop = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
    mybutton.style.display = notOnTop ? "block" : "none";
}
/**
 * Функция-обработчик нажатия кнопки "наверх".
 * Отвечает за прокручивание страницы вверх.
 */
function topFunction() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

const mybutton = document.getElementById("up-button");
mybutton.onclick = topFunction;
// Конец кнопки "наверх"

// Копирование текста с помощью кнопок
const contacts = document.querySelectorAll(".contact");

contacts.forEach(contact => {
    const button = contact.querySelector(".copy-button");
    button.addEventListener("click", () => {
        const text = contact.querySelector("p").innerHTML;
        navigator.clipboard.writeText(text);
    })
})
// Конец копирования текста с помощью кнопок

// Анимация стрелок "схемы работы"
const arrows = document.querySelectorAll(".arrow");
let currentArrow = 0;
const cycle = setInterval(() => {
    arrows[currentArrow].classList.toggle("arrow-active");
    currentArrow = (currentArrow + 1) % arrows.length;
}, 250);