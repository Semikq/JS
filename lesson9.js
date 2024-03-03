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
    const readArrayOfObjects = (() => {
        const arr = []
        let obj = {}
        while(true){
            const key = prompt("Enter key")
            if(key === null){
                if(confirm("Create a new object or exit?")){
                    arr.push(obj)
                    obj = {}
                    continue
                }else{
                    arr.push(obj)
                    break
                }
            }
            const value = prompt("Enter value")
            if(value === null){
                if(confirm("Create a new object or exit?")){
                    arr.push(obj)
                    obj = {}
                    continue;
                }else{
                    arr.push(obj)
                    break
                }
            }
            obj[key] = value
        }
        console.log(arr)
    })()
}

{
let size = prompt()
let result = '';
for (let i = 0; i < size; i++) {
    let a = "";
    let b = "";
    for (let k = 0; k < size - i - 1; k++) {
        a += ".";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        b += "#";
    }
    result += a + b + a + "\n";
}

for (let i = size - 2; i >= 0; i--) {
    let a = "";
    let b = "";
    for (let k = 0; k < size - i - 1; k++) {
        a += ".";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        b += "#";
    }
    result += a + b + a + "\n";
}
console.log(result);
}

{
const table = document.createElement("table")
for(let i = 0; i < 9; i++){
    const tr = document.createElement("tr")
    for(let j = 0; j < 9; j++){
        const td = document.createElement('td')
        if(i === 0 && j === 0){
            td.innerText = "0"
        }else if(i === 0){
            td.innerText = j
        }else if(j === 0){
            td.innerText = i
        }else{
            td.innerText = i * j
        }
        tr.append(td)
    }
    table.append(tr)
}
document.body.append(table)
}

{
const table = document.createElement("table")
for(let i = 0; i < 9; i++){
    const tr = document.createElement("tr")
    for(let j = 0; j < 9; j++){
        const td = document.createElement('td')
        if(i === 0 && j === 0){
            td.innerText = "0"
        }else if(i === 0){
            td.innerText = j
        }else if(j === 0){
            td.innerText = i
        }else{
            td.innerText = i * j
        }
        tr.append(td)
    }
        tr.addEventListener("mouseover", function(){
            tr.style.background = "red"
        })
        tr.addEventListener("mouseout", function(){
            tr.style.background = ""
        })
    table.append(tr)
}
document.body.append(table)
}