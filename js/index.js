// ========================
// Задание 1

// const celsiitoFaregeit = (celsii) => {
//     return (celsii * 9 / 5) + 32;
// }

// const askQuestion = prompt('Введите значение: ');
// const isFarengeit = celsiitoFaregeit(askQuestion);

// if (!isNaN(askQuestion)) {
//     console.log(`${askQuestion} цельсий = ${isFarengeit} фаренгейт`);
// } else {
//     console.log('Введите число');
// }

// ========================
// Задание 2

// const askQuestion = prompt('Введите число: ');
// const numQuestion = parseInt(askQuestion);

// const numValidator = () => {
//     if (askQuestion === null) {
//         console.log('Вы нажали "отмена"');
//     } else if (isNaN(askQuestion)) {
//         console.log('Вы ввели не число');
//     } else if (numQuestion > 0) {
//         console.log('Вы ввели положительное число');
//     } else if (numQuestion < 0) {
//         console.log('Вы ввели отрицательное число');
//     } else if (numQuestion == 0) {
//         console.log('Вы ввели ноль');
//     } else {
//         console.log('Вы пропустили');
//     }
// }

// numValidator();

// ========================
// Задание 3

// const multiply = (num1, num2) => {
//     if (typeof num1 === 'undefined' || typeof num2 === 'undefined') {
//         return 'Оба параметра важны';
//     } 
//     return num1/(1/num2);
// }

// console.log(multiply(2, 5));
// console.log(multiply(5, 3));
// console.log(multiply(7, 2));

// ========================
// Задание 4

// const power = (base, exp = 2) => {
//     let num = 1;
//     for (let i = 0; i < exp; i++) {
//         num *= base;
//     }
//     return num;
// }

// const base = prompt('Введите число = ');
// const exp = prompt('Введите степень = ');

// if (!isNaN(base)) {
//     const res = power(base, exp);
//     console.log(`${base} в степени ${exp} = ${res}`);
// } else {
//     console.log(`${base} в квадрате = ${power(base)}`);
// }

// ========================
// Заданиe 5

