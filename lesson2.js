{
var a = 5;  
var b, c;

b = a * 5;  //Знаходимо спочатку b
b = c = b/2; //Вираз, знаходимо потім c
alert(c)
}


{
    alert("Знаходження року за віком");
    let vik, rik;
    vik = +prompt("Введіть ваш вік");
    rik = 2023 - vik;
    alert("Ваш рік народження: " + rik);
}


{
    alert("Знаходження градусів");
    let celsia, forengeit;
    celsia = +prompt("Введіть градуси у цельсіях");
    forengeit = celsia * (9/5) + 32;
    alert("Переведені градуси у фаренгейти: " + forengeit);
}


{
    alert("Розрахунок поділу націло двох чисел");
    let num, vidpovid;
    num = +prompt("Введіть двух значне число")
    vidpovid = Math.floor(num)
    alert("Відповідь: " + vidpovid)
}


{
    alert("Обмін курсу, долар в гривні. Курс – 40грн")
    let dol, sum;
    const rate = 40;
    dol = +prompt("Введіть, скільки доларів хочете отримати");
    sum = rate * dol;
    alert("З вас: " + sum + "грн");30
}


{
    alert("Створення CSS-кольорів")
    let red = parseInt(prompt('Введіть червоний (0-255):'));
    let green = parseInt(prompt('Введіть зелений (0-255):'));
    let blue = parseInt(prompt('Введіть синій (0-255):'));

    let one = red.toString(16) .padStart(2,"0");
    let two = green.toString(16) .padStart(2,"0");
    let there = blue.toString(16) .padStart(2,"0");
    const colorHex = one + two + there;
    alert("Колір HEX: " + colorHex);
}


{
    alert("Знаходження квартири")
    const kil_poverh = parseInt(prompt('Введіть кількість поверхів:'));
    const kvartur = parseInt(prompt('Введіть кількість квартир на поверсі:'));
    const Nomerkv = parseInt(prompt('Введіть номер квартири:'));

    const kvarur_na_poversi = kil_poverh * kvartur;
    const pid = Math.ceil(Nomerkv / kvarur_na_poversi);
    const poverh = Math.ceil((Nomerkv % kvarur_na_poversi) / kvartur);
    alert("Квартира - " + Nomerkv + ", розташована в - " + pid + "-му під'їзді, на - " + poverh + "-му поверсі.");
}