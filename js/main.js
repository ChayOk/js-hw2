//1
let namePersone = prompt('Введите имя');
let age = prompt('Введите возраст');
let city = prompt('Введите город проживания');
let phone = prompt('Введите номер телефона');
let email = prompt('Введите Email');
let company = prompt('Введите название компании');

document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">1.</p>' + 'Меня зовут ' + namePersone + '. Мне ' + age +' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.');

// //2
document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">2.</p>' + namePersone + ' родился в ' + (2022 - age) + ' году.');

//3
let string = '123321';
// let string = prompt('Веедите 6 цифр');
let sum1 = Number(string[0]) + Number(string[1]) + Number(string[2]);
let sum2 = Number(string[3]) + Number(string[4]) + Number(string[5]);
if (sum1 == sum2){
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">3.</p>' + 'Сумма первых 3-х чисел ровняется сумме вторых 3-х чисел');
} else {
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">3.</p>' + 'Сумма не равна');
}

//4
let x = prompt('Введите любое число');
(x > 0) ? document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">4.</p>' + 'Верно, число > 0') : document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">4.</p>' + 'Неверно, число < 0');

//5
let a = 10,
b = 2;
document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">5.</p>' + 'Сумма:' + (a - b)+ '<br>'+ 'Разность:'+ (a - b)+ '<br>'+ 'Произведение:'+ (a * b)+ '<br>'+ 'Частное:'+ (a / b)+ '<br>');

if ((a + b) > 1) {
    document.write('Сумма > 1:' +  Math.pow((a + b), 2)); 
}

//6
if ((2 < a < 11) && (6 <= b < 14)) {
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">6.</p>' + 'Верно');
} else {
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">6.</p>' + 'Неверно');
}

//7
let n = prompt('Введите число от 0 до 59');
if ((n >= 0) && (n <= 15)) {
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">7.</p>' + n + '- Это первая четверть часа')
} else if ((n >= 16) && (n <= 30)){
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">7.</p>' + n + '- Это вторая четверть часа')
} else if ((n >= 31) && (n <= 45)){
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">7.</p>' + n + '- Это третья четверть часа')
} else if ((n >= 46) && (n <= 59)){
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">7.</p>' + n + '- Это четвертая четверть часа')
} else{
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">7.</p>' + n + '- Введено неверное число')
}

//8
let day = prompt('Введите число от 1 до 31');
if ((day > 0) && (day <= 10)) {
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">8.</p>' + day + '- Это первая декада месяца')
} else if ((day >= 11) && (day <= 20)){
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">8.</p>' + day + '- Это вторая декада месяца')
} else if ((day >= 21) && (day <= 31)){
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">8.</p>' + day + '- Это третья четверть часа')
} else{
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">8.</p>' + day + '- Введено неверное число')
}

//9
let dayConversion = prompt('Введите количество дней');
let year = Math.floor(dayConversion / 365);
let month = Math.floor(dayConversion / 31);
let week = Math.floor(dayConversion / 7);
let hour = dayConversion * 24;
let minute = hour * 60;
let second = minute * 60;

if (week < 1) {
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">9.</p>' + 'Меньше недели'+ '<br>'+ hour+ ' часов'+ '<br>'+ minute+ ' минут'+ '<br>'+ second+ ' секунд');
} else if (month < 1) {
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">9.</p>' + 'Меньше месяца'+ '<br>'+ week+ ' недель'+ '<br>'+ hour+ ' часов'+ '<br>'+ minute+ ' минут'+ '<br>'+ second+ ' секунд');
} else if (year < 1) {
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">9.</p>' + 'Меньше года'+ '<br>'+ month+ ' месяцев'+ '<br>'+ week+ ' недель'+ '<br>'+ hour+ ' часов'+ '<br>'+ minute+ ' минут'+ '<br>'+ second+ ' секунд');
} else {
    document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">9.</p>' + year + ' лет' + '<br>'+ month+ ' месяцев'+ '<br>'+ week+ ' недель'+ '<br>'+ hour+ ' часов'+ '<br>'+ minute+ ' минут'+ '<br>'+ second+ ' секунд');
}

//10
let timeOfYear = prompt('Введите число от 1 до 365');

switch (true) {
    case (timeOfYear <= 31):
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Январь <br> Пора года: зима')
        break;
    case (timeOfYear <= 59):
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Февраль <br> Пора года: зима')
        break;
    case (timeOfYear <= 90):
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Март <br> Пора года: весна')
        break;
    case (timeOfYear <= 120):
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Апрель <br> Пора года: весна')
        break;
    case (timeOfYear <= 151):
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Май <br> Пора года: весна')
        break;
    case (timeOfYear <= 181):
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Июнь <br> Пора года: лето')
        break;
    case (timeOfYear <= 212):
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Июль <br> Пора года: лето')
        break; 
    case (timeOfYear <= 243):
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Август <br> Пора года: лето')
        break;
    case (timeOfYear <= 273):
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Сентябрь <br> Пора года: осень')
        break;
    case (timeOfYear <= 304):
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Октябрь <br> Пора года: осень')
        break;
    case (timeOfYear <= 334):
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Ноябрь <br> Пора года: осень')
        break;
    case (timeOfYear <= 3365):
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Декабрь <br> Пора года: зима')
        break;                                       
    default:
        document.write('<p style="font-size: 28px; font-weight: 600; margin-top: 20px">10.</p>' + timeOfYear + '- Число не входит в диапазон')
        break;
}