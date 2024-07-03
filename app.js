let userName = prompt("Введіть ваше ім'я:");
console.log(`Привіт, ${userName}!`);

const currentYear = 2024;
let birthYear = parseInt(prompt("Введіть ваш рік народження:"));
let age = currentYear - birthYear;
console.log(`Вам ${age} років.`);


let sideLength = parseFloat(prompt("Введіть довжину сторони квадрата:"));
let perimeter = 4 * sideLength;
console.log(`Периметр квадрата: ${perimeter}`);


let radius = parseFloat(prompt("Введіть радіус кола:"));
let area = Math.PI * radius * radius;
console.log(`Площа кола: ${area}`);


let distance = parseFloat(prompt("Введіть відстань між двома містами (у кілометрах):"));
let time = parseFloat(prompt("За скільки годин ви хочете дістатися:"));
let speed = distance / time;
console.log(`Вам потрібно рухатися зі швидкістю: ${speed} км/год, щоб встигнути вчасно.`);


const exchangeRate = 0.85; 
let dollars = parseFloat(prompt("Введіть суму в доларах:"));
let euros = dollars * exchangeRate;
console.log(`Сума в євро: ${euros}`);


let flashDriveSizeGB = parseFloat(prompt("Введіть обсяг флешки у ГБ:"));
const fileSizeMB = 820; 
let flashDriveSizeMB = flashDriveSizeGB * 1024;
let numberOfFiles = Math.floor(flashDriveSizeMB / fileSizeMB);
console.log(`На флешку вміститься ${numberOfFiles} файлів розміром 820 МБ.`);
