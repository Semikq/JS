let zadania
if(zadania = prompt("Обери завдання: ")){

if(zadania === "one")
{
    alert("Number: odd")
    let a = prompt("Введіть число: ")
    if(parseInt(a))
    {
    if(a % 2 === 0){
        alert("Число парне")
    }
    else{
        alert("Число непарне")
    }
    }
    else{
        alert("Число не коректне")
    }
}

if(zadania === "two")
{
    alert("String: lexics")
    let text = prompt("Введіть текст:")
    let slovo = "слово"
    
    if (text.indexOf(slovo) !== -1) {
      alert("Знайдено некоректне слово у тексті")
    } else {
      alert("Текст введено без некоректних слів")
    }
}

if(zadania === "three")
    {
        alert("Boolean")
        let a = confirm("У тебе сьогодні добрий настрій?")
        let b = confirm("Ти сьогодні поїв?")
        let c = confirm("Сьогодні був чудовий день?")
        alert(a)
        alert(b)
        alert(c)
}

if(zadania === "four")
{
    alert("Boolean: if")
    if(confirm("Вкажіть:\nТак,ви чоловік\nНі,ви жінка")){
        alert("Ви чоловік")
    }
    else{
        alert("Ви жінка")
    }
}

if(zadania === "five")
{
    alert("Comparison: sizes")
let rozmer = prompt("Введіть розмір одягу Італійська:")
let italy = {
 38: "S",
 40: "M",
 44: "L",
 48: "XL",
 52: "XXL"
}
if (italy[rozmer]) {
  alert("Розмір одягу в американській системі: " + italy[rozmer])
} else {
  alert("Такого розміру одягу немає")
}
}

if(zadania === "six")
{
    alert("Ternary")
    let a =confirm("Вкажіть:\nТак,ви чоловік\nНі,ви жінка") ? "Ви чоловік" : "Ви жінка"
    alert(a)
}

if(zadania === "seven")
{
    alert("Training")
// bool type cast
!!2 //True
!!0 //False
!!1 //True
// or
2 || 1 // 2
2 || 0 // 2
//and
2 && 1 //1
1 && 2 //2
0 && 2 //0 
// or and and difference
0 || 1 || 2 //1
0 && 1 && 2 //0
2 || 1 || 0 //2
2 && 1 && 0 //0
confirm('left') || confirm('right') //Якщо Ок - то програма закінчується, якщо скасувати то right
confirm('left') && confirm('right') //Якщо Ок - right, якщо скасувати то нічого
//null, undefined, so on
null || 2 //2
undefined && 1 //undefined
alert("Hello") && confirm('Are you sexy?'); //Hello
alert("Hello") || confirm('Are you drunk?'); //Hello,потім обираємо відповідь в confirm
//brackets and complex expressions
(undefined || 2) && (3 || 0) //3
(2 && 1) || (null && 0) //1
(2 > 1) && "greater" //"greater"
(2 < 1) && null //false
null && (2 < 1) //null
// ternary operator
1 ? "one" : "not one" //one
0 ? "zero" : "not zero" //not zero
"0" ? "\"zero\"" : "not `zero`" //zero
parseInt("0") ? 'true' : 'false' //False
("" || 2) && (3 || "3.5") || (4 && 5) //3
(-1 + 1) && "zero" //0
"-1" + 1 && "oups" //"oups"
(typeof null === 'object') ? "null is object" : "null is null" //"null is object"
// ternary && || //?
Math.random() < 0.5 && 'less' || 'more' //0.6 < 0.5 =  'more', 0.4 < 0.5 = 'less'
let b = (a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a //0.6 < 0.5 = 'less: '+a
//in for array
[2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found' //prime
}

if(zadania === "eight")
{
alert("Prompt: or");
let vik = +prompt("Введіть свій вік") || null;
let rik = vik ? 2023 - vik : null;
alert(vik ? "Ваш рік: " + rik : "Ви не ввели свій вік");
}

if(zadania === "nine")
{
    alert("Confirm: or this days")
confirm('шопінг?') || alert("ти - бяка")
}

if(zadania === "ten")
{
    alert("Confirm: if this days")
    let a = confirm('шопінг?')
    if(a === true){
    }
    else{
        alert("ти - бяка")
    }
}

if(zadania === "eleven")
{
    alert("Default: or")
    let P = prompt("Введіть прізвище:") || "Ivanov"
    let N = prompt("Введіть ім'я:") || "Ivan"
    let B = prompt("Введіть по батькові:") || "Ivanovich"
    let PI = P ? P : "Ivanov"
    let NA = N ? N : "Ivan"
    let BA = B ? B : "Ivanovich"
    alert(PI + " " + NA + " " + BA)
}

if(zadania === "twelve")
{
alert("Default: if")
let N = prompt("Введіть ім'я:");
let P = prompt("Введіть прізвище:");
let B = prompt("Введіть по батькові:");

if (N === "" || N === null) {
  N = "Ivan";
}

if (P === "" || P === null) {
  P = "Ivanov";
}

if (B === "" || B === null) {
  B = "Ivanovich";
}

alert(P + " " + N + " " + B);
}

if(zadania === "thirteen")
{
    alert("Login and password")
    let login = prompt("Введіть логін: ")
    if(login === "admin")
    {
        let password = prompt("Введіть пароль: ")
            if(password === "qwerty")
            {
                alert("Успішний вхід")
            }
            else{
                alert("Неправельний пароль")
            }
    }

    else
    {
        alert("Неправельний логін")
    }
}

if(zadania === "fourteen")
{
    alert("Currency exchange")
    let valyta 
    if(valyta = prompt("Оберіть валюту\nusd - Долари\neur - Євро\nfynt - Фунт стерлінга"))
{

    if(valyta.toLowerCase() === "usd")
    {
        let usd = prompt("Введіть Долари")
        let rate= confirm("Купити") || alert("Продати")
        if(rate === true){
            rate = usd * 2
            alert(rate)
        }
        else{
            rate = usd * 1.5
            alert(rate)
        }
    }

    if(valyta.toLowerCase() === "eur")
    {
        let eur = prompt("Введіть Євро")
        let rate = confirm("Купити") || alert("Продати")
        if(rate === true){
            rate = eur * 3
            alert(rate)
        }
        else{
            rate = eur * 2.5
            alert(rate)
        }
    }

    if(valyta.toLowerCase() === "fynt")
    {
        let fynt = prompt("Введіть Фунт стерлінга")
        let rate = confirm("Купити") || alert("Продати")
        if(rate === true){
            rate = fynt * 5
            alert(rate)
        }
        else{
            rate = fynt * 4.5
            alert(rate)
        }
    }
}
    else{
        alert("Такої валюти немає, спробуйте іншу")
    }s
}

if(zadania === "fifteen")
{
alert("Scissors")
let korus = prompt("Введіть свій вибір: камінь, ножиці чи папір").toLowerCase()

let random = Math.floor(Math.random() * 3)
let komp

if (random === 0) {
    komp = "камінь"
} else if (random === 1) {
    komp = "ножиці"
} else {
    komp = "папір"
}

alert("Вибір комп'ютера: " + komp)

if (korus === komp) {
  alert("Нічия")
} else if (
  (korus === "камінь" && komp === "ножиці") ||
  (korus === "ножиці" && komp === "папір") ||
  (korus === "папір" && komp === "камінь")
) {
  alert("Ви перемогли")
} else {
  alert("Комп'ютер переміг")
}
}
}