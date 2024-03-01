{
while(!confirm()){}
}

{
const arr = []
for(;;){
    const user = prompt()
    if(user === null || user.trim() === ''){
        break;
    }else{
        arr.push(user)
    }
}
console.log(arr)
}

{
const arr = []
let index = 0
for(;;){
    const user = prompt()
    if(user === null || user.trim() === ''){
        break;
    }else{
        arr[index] = user
    }
    index ++ 
}
console.log(arr)
}

{
let index = 0
for(;;index++){
    if(Math.random() > 0.9){
        break;
    }
}
console.log(index)
}

{
while(prompt() === null){}
}

{
const user = +prompt()
let sum = 0
for(let i = 1;i < user;i += 3){
    sum += i
}
console.log(sum)
}

{
const user = +prompt()
let str = ""
for(let i = 0; i <= user; i++){
    if(i % 2 === 0){
        str += "#"
    }else{
        str += "."
    }
}
console.log(str)
}

{
let str = ''
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
    str += j
    }
    str += "\n"
}
console.log(str)
}

{
const a = +prompt()
const b = +prompt()
let str = ''
for(let i = 0; i < a; i++){
    for(let j = 0; j < b; j++){
        if(i % 2 === 0){
            str += ".#"
        }else{
            str += "#."
        }
    }
    str += "\n"
}
console.log(str)
}

{
const user = +prompt()
const arr = []
for(let i = 0; i <= user; i++){
    arr.push(Math.pow(i,3))
}
console.log(arr)
}

{
const arr = []
for(let i = 0; i <= 5; i++){
    arr[i] = []
    for(let j = 0; j <= 5; j++){
        arr[i].push(i * j)
    }
}
console.log(arr)
}

{
    const readArrayOfObjects = () => {
        const arr = []
        while (true) {
            let obj = {}
            let key = prompt("Введіть ключ")
            if(key === null){
                let choice = confirm("Хочете продовжити?")
                if(!choice){
                    break;
                }else{
                    continue;
                }
            }
            while(true){
                let value = prompt("Введіть значення")
                if(value === null){
                    break;
                }
                obj[key] = value
                key = prompt("Введіть ключ")
                if(key === null){
                    break;
                }
            }
            arr.push(obj)
        }
        return arr
    }
    console.log(readArrayOfObjects())
}




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
// console.log(result)





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