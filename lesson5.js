let all
if(all = prompt("Обери завдання: ").toLowerCase()){

if(all === "one")
{
    alert("Confirms")
    let arr = [];
    let one = confirm("Перше питання")
    arr[0] = one
    let two = confirm("Друге питання")
    arr[1] = two
    let three = confirm("Третє питання")
    aar[2] = three
    alert(arr)
}

if(all === "two")
{
    alert("Prompts")
    let arr = []
    let one = prompt("Ви сьогодні поїли?")
    arr[0] = one
    let two = prompt("Сьогодні чудовий день?")
    arr[1] = two
    let three = prompt("Як твої справи?")
    arr[2] = three
    alert(arr)
}

if(all === "three")
{
    alert("Item access")
    num = prompt("Введіть яке слово бажаєте від 0 до 2")
    let arr = ["zero","one","two"][num]
    alert(`Ваші відповіді: ${arr}\nДовжина масиву: ${arr.length}`)
}

if(all === "four")
{
    alert("Item change")
    let arr = ["one","two","three"]
    let slov = prompt("Введіть слово")
    let index = +prompt("Введіть індекс слова")
    arr[index] = slov
    alert(`Новий масив з вашим словом: ${arr}`)
}

if(all === "five")
{
    alert("Multiply table")
    const arr = [[0,0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,4,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    console.log(arr[5][5])
}

if(all === "six")
{
    alert("Multiply table slice")
    const arr = [[0,0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,4,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    let table = arr.slice(1).map(zero => zero.slice(1))
    console.log(table)
}

if(all === "seven"){
    alert("IndexOf Word")
    const vvod = prompt("Введіть рядок із кількох слів:");
    const slovo = prompt("Введіть слово, яке ви шукаєте:");
    const vvod2 = vvod.split(" ");
    const fin = vvod2.indexOf(slovo);
    if (fin !== -1) {
        alert(`Слово "${slovo}" знаходиться на позиції ${fin + 1} у рядку.`);
    }
    else {
        alert(`Слово "${slovo}" не знайдено у рядку.`)
    }
}

if(all === "eight"){
    alert("Reverse")
    let arr = [];
    arr.push(prompt());
    arr.push(prompt());
    arr.push(prompt());
    arr.push(prompt());
    arr.push(prompt());

    console.log(arr)

    let arr2 = []

    let arr3 = arr.pop()
    arr2.push(arr3);
    arr3 = arr.pop()
    arr2.push(arr3);
    arr3 = arr.pop()
    arr2.push(arr3);
    arr3 = arr.pop()
    arr2.push(arr3);
    arr3 = arr.pop()
    arr2.push(arr3);

    console.log(arr2);
}

if(all === "nine"){
alert("Reverse 2")
let arr = [];
arr.push(prompt());
arr.push(prompt());
arr.push(prompt());
arr.push(prompt());
arr.push(prompt());

console.log(arr)

let arr2 = []

let arr3 = arr.pop()
arr2.push(arr3);
arr3 = arr.pop()
arr2.push(arr3);
arr3 = arr.pop()
arr2.push(arr3);
arr3 = arr.pop()
arr2.push(arr3);
arr3 = arr.pop()
arr2.push(arr3);

console.log(arr2);

let arr4 = []

let arr5 = arr2.shift()
arr4.unshift(arr5)
arr5 = arr2.shift()
arr4.unshift(arr5)
arr5 = arr2.shift()
arr4.unshift(arr5)
arr5 = arr2.shift()
arr4.unshift(arr5)
arr5 = arr2.shift()
arr4.unshift(arr5)

console.log(arr4)
}

if(all === "ten"){
    alert("Copy")
    const arr = [[0,0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,4,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    const copi = [...arr];
    console.log(copi);
}

if(all === "eleven"){
    alert("Deep Copy")
    const arr = [[0,0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,4,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    const mas = structuredClone(arr)
    console.log(mas)
}

if(all === "twelve"){
    alert("Array Equals")
    const arr = []
    const arr2 = arr
    console.log(arr2 === arr)
}

if(all === "thirteen"){
    alert("Flat")
    const arr = [[0,0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,4,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    const arr2 = [...arr[0],...arr[1],...arr[2],...arr[3],...arr[4],...arr[5]]
    console.log(arr2)
}

if(all === "fourteen"){
    alert("Destruct")
    const slovo = prompt("Введіть рядок:");
    const [one,,,, five,,,,nine] = slovo;
    console.log(`Перша літера: ${one}`);
    console.log(`П'ята літера: ${five}`);
    console.log(`Дев'ята літера: ${nine}`);
}

if(all === "fifteen"){
    alert("Destruct default")
    const slovo = prompt("Введіть рядок:");
    const [one='!',,,, five='!',,,,nine='!'] = slovo;
    console.log(`Перша літера: ${one}`);
    console.log(`П'ята літера: ${five}`);
    console.log(`Дев'ята літера: ${nine}`);
}

if(all === "sixteen"){
    alert("Multiply table rest")
    const table = [
        [0, 1, 2, 3, 4, 5],
        [0, 2, 4, 6, 8, 10],
        [0, 3, 6, 9, 12, 15],
        [0, 4, 8, 12, 16, 20],
        [0, 5, 10, 15, 20, 25],
      ];
      const [
        [, ...row1],
        [, ...row2],
        [, ...row3],
        [, ...row4],
        [, ...row5],
      ] = table;
      const NoZero = [...row1, ...row2, ...row3, ...row4, ...row5];
      console.log(NoZero);
}

if(all === "seventeen"){
const names = ["John", "Paul", "George", "Ringo"]
for(const name of names){
    alert(`Name: ${name}`)
}
}

if(all === "eighteen"){
const currencies = ["USD", "EUR", "GBP", "UAH"]
let   str = "<select>"
for (const currency of currencies){
    str+=`<option>${currency}</option>`
}
str+= "</select>"
document.write(str) 
}

if(all === "nineteen"){
const names = ["John", "Paul", "George", "Ringo"]
let   str = "<table><tr>"
for (const name of names){
    str+= `<td>${name}</td>`
}
str+= "</tr></table>"
document.write(str) 
}

if(all === "twelve"){
const names = ["John", "Paul", "George", "Ringo"]
let   str = "<table>"
for (const name of names){
    str+= `<tr><td>${name}</td></tr>`
}
str+= "</table>"
document.write(str)
}

if(all === "twentyOne"){
const currencies = ["USD", "EUR", "GBP", "UAH"]
let   str = "<table border=black,solid,1px>"
for (const currency of currencies){ 
    str+=`<tr>`
    console.log(currency)
    for (const letter of currency){ 
        str+=`<td>${letter}</td>`
        console.log(letter)
    }
    `</tr>`
}
str+= "</table>"
document.write(str)
}
   
if(all === "twentyTwo"){
const arr = [[0, 0, 0, 0, 0, 0],[0, 1, 2, 3, 4, 5],[0, 2, 4, 6, 8, 10],[0, 3, 6, 9, 12, 15],[0, 4, 8, 12, 16, 20],[0, 5, 10, 15, 20, 25]];
  let str = "<table>"
  for(const num of arr){
    str+= "<tr>"

    for(const number of num){
        str+=`<td>${number}</td>`
    }
    str+= "</tr>"
  }
  str+= "</table>"
  document.write(str)
}

if(all === "twentythree"){
    const capitalize = str => {
        let result = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
        return result;
      }
   console.log(capitalize("cANBerRa")) 
}

if(all === "twentyFour"){
   const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const inputString = prompt("Введіть рядок:");
  const words = inputString.split(" "); 
  const capitalizedWords = words.map(word => capitalize(word)); 
  const resultString = capitalizedWords.join(" "); 
  alert("Результат: " + resultString);
}

if(all === "twentyFive"){
const forbiddenWords = ["hz", "sho", "yakos"];
const inputString = prompt("Введіть рядок:");
const words = inputString.split(" "); 
const filteredWords = words.filter(word => {return !forbiddenWords.includes(word.toLowerCase()) });
const resultString = filteredWords.join(" "); 
alert("Результат: " + resultString);
}

if(all === "twentySix"){
const forbiddenWords = ["hz", "sho", "yakos"];
const inputString = prompt("Введіть рядок:");
const words = inputString.split(" "); 
const filteredWords = words.map(word => {
  return forbiddenWords.includes(word.toLowerCase()) ? "BEEP" : word});
const resultString = filteredWords.join(" "); 
alert("Результат: " + resultString);
}

if(all === "twentySeven"){
const currencies = ["USD", "EUR", "GBP", "UAH"];
const selectOptions = currencies.reduce((accumulator, currency) => {
return accumulator + `<option>${currency}</option>`}, "");
const str = `<select>${selectOptions}</select>`;
document.write(str);
}

if(all === "twentyEight"){
const line = prompt();
const bracketsStack = [];
let i = 0;
for (const character of line) {
  if (character === '(' || character === '[' || character === '{') {
    bracketsStack.push({ char: character, index: i });
  } else if (character === ')' || character === ']' || character === '}') {
    if (bracketsStack.length === 0) {
      console.log(`Помилка на позиції ${i}: Немає відповідної відкриваючої дужки.`);
      break;
    }
    const lastOpenBracket = bracketsStack.pop();
    if (
      (character === ')' && lastOpenBracket.char !== '(') ||
      (character === ']' && lastOpenBracket.char !== '[') ||
      (character === '}' && lastOpenBracket.char !== '{')
    ) {
      console.log(`Помилка на позиції ${i}: Дужки не відповідають одна одній.`);
      break;
    }
  }
  i++;
}

if (bracketsStack.length === 0) {
  console.log("Всі дужки в рядку відповідають одна одній.");
} else {
  console.log(`Помилка на позиції ${bracketsStack[0].index}: Немає відповідної закриваючої дужки.`);
}
}
}