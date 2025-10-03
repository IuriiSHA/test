// Название проекта
let titleProject = prompt('Название проекта?');

// Строка с названиями экранов через запятую
let screensValue = prompt('Типы экранов?' , 'шаблонные, с уникальным дизайном, с анимациями');

// Цена реализации одного экрана (любое число)
let screenPrice = 5000;

// Адаптивность (булевое значение: true/false)
let responsive = confirm('Нужен ли респонсивный сайт?');

// Дополнительные сервисы
let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');

let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');

// Желаемая сумма заработка с проекта
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Процент отката подрядчику (от 1 до 100)
let partnerPercent = 0.1; // 10%
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * partnerPercent));

// Условия по скидкам 
if (fullPrice > 50000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice > 0 && fullPrice < 20000) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('Особый случай: цена =', fullPrice);
} else {
    console.log('Что-то пошло не так');
}

console.log('Название проекта:', titleProject);
console.log('Типы экранов:', screensValue);
console.log('Цена реализации одного экрана:', screenPrice);
console.log('Сумма после выплаты партнеру:', servicePercentPrice);
console.log('Общая стоимость проекта:', fullPrice);
console.log('Нужен ли респонсивный сайт:', responsive);
console.log('Сервис1:', service1);
console.log('Стоимость сервиса1:', servicePrice1);
console.log('Сервис2:', service2);
console.log('Стоимость сервиса2:', servicePrice2);

