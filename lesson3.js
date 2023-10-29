{
    alert("Привітання користувача")
    let korus =  prompt("Як тебе звати?")
    alert(`Вітаю тебе - ${korus}`)
}


{
    alert("Додавання блін")
    let vod = prompt("Введіть слово")
    res = vod.split(", ").join(",блін ")
    alert("Введене ваше слово: " + res)
}


{
    alert("Перетворіть рядок, введений користувачем, таким чином, щоб перша літера ставала великою, а решта - маленькими:")
    let str = prompt("Введіть слово")
    let result
    let str1 = str.slice(0,1).toUpperCase()
    let str2 = str.slice(1).toLowerCase()
    result = str1 + str2
    alert("Перша літера велика, інші маленькі: " + result)
}



{
    alert("Порахуйте кількість слів у рядку. Використовуйте розбиття за пробілами. Довжина масиву називається так само, як і довжина рядка.")
    let rech = prompt("Ваше слово");
    let slov = rech.split(' '); 
    let skiki_slov = slov.length;  
    alert("Кількість слів: " + skiki_slov);
}


{
    alert("ПІБ було з великої літери, а решта - маленькі")
    let im = prompt("Яке у тебе ім'я?");
    let pr = prompt("Яке у тебе прізвище?");
    let bat = prompt("Як тебе по-батькові?");
    let fullName;
    im,pr,bat.trim();
    im1 = im.slice(0,1).toUpperCase();
    im2 = im.slice(1).toLowerCase();
    pr1 = pr.slice(0,1).toUpperCase();
    pr2 = pr.slice(1).toLowerCase();
    bat1 = bat.slice(0,1).toUpperCase();
    bat2 = bat.slice(1).toLowerCase();
    fullName = (im1 + im2) + (pr1 + pr2) + (bat1 + bat);
    alert(fullName);
}


{
    alert("Не використовуючи .replace замініть слово пиво у рядку на слово чай")
    alert("Було жарко. Василь пив пиво вприкуску з креветками")
    let str = "Було жарко. Василь пив пиво вприкуску з креветками"
    let result
    result = str.split("пиво").join("чай")
    alert(result)
}


{
    alert("Знайдіть у рядку HTML тег. Видаліть, тобто виріжте його - створіть інший рядок, в якому будуть всі символи до тега і після нього Тег може бути будь-яким. split і join не використовуйте, натомість використовуйте indexOf і slice. .replace не використовуйте")
    let str = "якийсь текст, в якому є один тег <br/> і всяке інше";
    let result
    let teg = str.indexOf('<');
    let end = str.indexOf('>', teg);
    result = str.slice(0, teg) + str.slice(end + 1);
    alert(result); 
}

{
    alert("На основі попереднього завдання зробіть тег великими літерами. replace, split і join не використовуйте, натомість використовуйте indexOf і slice,")
let str = "якийсь текст у якому є один тег <br/> і всяке інше";
let start = str.indexOf('<');
let end = str.indexOf('>', start);
let result =(str.slice(0, start) + str.slice(start, end).toUpperCase() + str.slice(end));
alert(result);
}

{
    alert("Попросіть користувача ввести рядок черезprompt. prompt не дозволяє вводити рядкові рядки. Дамо користувачеві таку можливість - Користувач може вводити \n як маркер нового рядка.")
    let korus = prompt()
    let res = korus.split("\\n ").join("\n ")
    alert(`Ваш рядок ${res}`)
}

{
    alert("Нехай користувач введе будь-який текст із посиланням на youtube. Використовуючи регулярний вираз вийміть із посилання ідентифікатор видосу і створіть рядок із вбудованим блоком HTML.")
    const reg_sulka = (/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/)
    let korus_sulka = prompt()
    let id = korus_sulka.match(reg_sulka)[1]
    const sulka = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" ></iframe>`;
    document.write(sulka)
}



