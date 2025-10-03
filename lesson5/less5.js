// Общие данные проекта 
let titleProject = 'проект 4-го урока';
let screenPrice = 5000;
let service1 = 'Анимация';
let servicePrice1 = 1000;
let service2 = 'SEO';
let servicePrice2 = 3000;
let partnerPercent = 0.1; // 10%

// Function expression
const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
}
let allServicePrices = getAllServicePrices();


// Function declaration
function getFullPrice() {
    return screenPrice + allServicePrices;
}
let fullPrice = getFullPrice();

// Функция формотирования названия проекта
function getTitle() {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}
titleProject = getTitle();

// Сумма прибыли 
function getServicePercentPrices() {
    return Math.ceil(fullPrice - fullPrice * partnerPercent);
}
let srvicePercentPrice = getServicePercentPrices();

// Функция со скидками 
function getRollbackMessage() {
    if (fullPrice > 50000) {
        console.log('Даем скидку в 10%');
    } else if (fullPrice > 20000 && fullPrice <= 50000) {
        console.log('Даем скидку в 5%');
    } else if (fullPrice > 0 && fullPrice <= 20000) {
        console.log('Скидка не предусмотрена');
    } else if (fullPrice <= 0) {
        console.log('Что-то пошло не так');
    }
}
getRollbackMessage();

// Результаты
console.log('Название проекта:', titleProject);
console.log('Стоимость всех услуг:', allServicePrices);
console.log('Полная стоимость проекта:', fullPrice);
console.log('Сумма после выплаты партнеру:', srvicePercentPrice);