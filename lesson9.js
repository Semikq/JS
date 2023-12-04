// while(!confirm()){}

// let arr = []
// for(;;){
//     let newArr = prompt()
//     if(newArr === null || newArr.trim() === ''){
//         break;
//     }
//     arr.push(newArr)
// }
// console.log(arr)



// let arr = []
// let index = 0
// for(;;){
//     let newArr = prompt()
//     if(newArr === null || newArr.trim() === ''){
//         break;
//     }
//     arr[index] = newArr
//     index++
// }
// console.log(arr)



// let mat
// let iterations = 0
// for(;;){
//     math = Math.random()
//     iterations++
//     if(math > 0.9){
//         break;
//     }
// }
// alert(`${iterations}, ${math.toFixed(4)}`)



// for(;;){
//     let user = prompt()
//     if (user === null) {
//     }else{
//         break;
//     }
// }



// let N = +prompt("Enter number N:");
// let sum = 0;
// for (let i = 0; i < N; i += 3) {
//     sum += i;
// }
// console.log(sum);



// let N = prompt()
// let sum = ''
// for(let i = ''; i < N; i++){
//     sum += "#"
// }
// console.log(sum)



// let result = "";
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         result += j;
//     }
//     result += "\n";
// }
// console.log(result);



// let user = prompt()
// let ss = prompt()
// let result ="";
// for(let i = 0;i<user;i++){
//     for(let j = 0;j<ss;j++){
//         result += ".#"
//     }
//     result+="\n"
// }
// console.log(result)



// let N = prompt()
// let resultArray = [];
// for (let i = 0; i < N; i++) {
//     resultArray.push(i);
// }
// console.log(resultArray);



// let one = 10
// let two = 10
// let result = []
// for(i=0; i<one; i++){
// result[i]=[]
//     for(j=0;j<two;j++){
//         result[i][j] = i * j
//     }
// }
// console.log(result[2][3])






// let size = 5;
// let result = '';
// for (let i = 0; i < size; i++) {
//     let a = "";
//     let b = "";
//     for (let k = 0; k < size - i - 1; k++) {
//         a += ".";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         b += "#";
//     }
//     result += a + b + a + "\n";
// }
// for (let i = size - 2; i >= 0; i--) {
//     let a = "";
//     let b = "";
//     for (let k = 0; k < size - i - 1; k++) {
//         a += ".";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         b += "#";
//     }
//     result += a + b + a + '\n';
// }
// console.log(result);







// const readArrayOfObjects = () => {
//     const arrayOfObjects = [];

//     while (true) {
//         const userInput = {};
//         let continueEnteringObjects;

//         while (true) {
//             let key = prompt("Enter the key for the object (or click Cancel to finish entering:)");
//             if (key === null) {
//                 continueEnteringObjects = confirm("Бажаєте продовжити введення об'єктів?");
//                 break;
//             }

//             const value = prompt(`Enter a value for the key "${key}":`);
//             userInput[key] = value;
//         }

//         arrayOfObjects.push(userInput);
//         if (!continueEnteringObjects) {
//             break;
//         }
//     }

//     return arrayOfObjects;
// };






// const resultArray = readArrayOfObjects();

// console.log(resultArray);

// Створення таблиці та елементів
// const table = document.createElement('table');
// const tbody = document.createElement('tbody');

// for (let i = 1; i <= 9; i++) {
//   const row = document.createElement('tr');

//   for (let j = 1; j <= 9; j++) {
//     const cell = document.createElement('td');
//     cell.innerText = i * j;
//     row.appendChild(cell);
//   }

//   tbody.appendChild(row);
// }

// table.appendChild(tbody);

// document.getElementById('multiplicationTable').appendChild(table);

// const table = document.createElement('table');
//   const tbody = document.createElement('tbody');

//   for (let i = 1; i <= 9; i++) {
//     const row = document.createElement('tr');

//     for (let j = 1; j <= 9; j++) {
//       const cell = document.createElement('td');
//       cell.innerText = i * j;

//       cell.addEventListener('mouseover', function () {
//         cell.style.backgroundColor = 'lightblue';
//       });

//       cell.addEventListener('mouseout', function () {
//         cell.style.backgroundColor = '';
//       });

//       row.appendChild(cell);
//     }

//     tbody.appendChild(row);
//   }

//   table.appendChild(tbody);
//   document.getElementById('multiplicationTable').appendChild(table);







// const table = document.createElement('table');
// const tbody = document.createElement('tbody');

// for (let i = 1; i <= 9; i++) {
//   const row = document.createElement('tr');

//   for (let j = 1; j <= 9; j++) {
//     const cell = document.createElement('td');
//     cell.innerText = i * j;

//     cell.addEventListener('mouseover', function () {
//       row.style.backgroundColor = 'lightblue';
//       setColumnHighlight(j, 'lightcoral');
//     });

//     cell.addEventListener('mouseout', function () {
//       row.style.backgroundColor = '';
//       setColumnHighlight(j, '');
//     });

//     row.appendChild(cell);
//   }

//   tbody.appendChild(row);
// }

// table.appendChild(tbody);
// document.getElementById('multiplicationTable').appendChild(table);

// function setColumnHighlight(columnIndex, backgroundColor) {
//   const rows = tbody.getElementsByTagName('tr');
//   for (let i = 0; i < rows.length; i++) {
//     const cells = rows[i].getElementsByTagName('td');
//     cells[columnIndex - 1].style.backgroundColor = backgroundColor;
//   }
// }