let all = prompt().toLowerCase()
if(all === "one"){
  const PC = {
    cpu: 'Ryzen 5',
    memory: '16GB',
    motherboard: 'Gigabyte',
    videoCard: 'RTX2060'
  }
}

if(all === "two"){
  const obj = {
    [prompt()]:prompt(),
    [prompt()]:prompt()
    }
    console.log(obj)
}

if(all === "three"){
  const obj = {
    [prompt()]:prompt(),
    [prompt()]:prompt()
    }

    const newObj = {...obj,[prompt()]:prompt()}

    console.log(newObj)
}

if(all === "four"){
const parent = {
  tagName: "body",
  children:
  [
    {
      tagName: "div",
      children:[
        {
          tagName: "span",
          children: ["Enter a data please:"]
        },
        {
          tagName: "br/"
        },
        {
          tagName: "input",
          attrs:{
            type: "text",
            id: "name"
          }
        },
        {
          tagName: "input",
          attrs:{
            type: "text",
            id: "surname"
          }
        }
      ]
    },
    {
      tagName: "div",
      children: [
        {
          tagName: "button",
          attrs:{
            id: "ok"
          },
          children:["OK"]
        },
        {
          tagName: "button",
          attrs:{
            id: "cancel"
          },
          children:["Cancel"]
        }
      ]
    }
  ]
}

console.log(parent.children[1].children[1].children[0]);
console.log(parent.children[0].children[3].attrs.id)
}

if(all === "five"){
const parent = {
  tagName: "body",
  children:
  [
    {
      tagName: "div",
      children:[
        {
          tagName: "span",
          children: ["Enter a data please:"]
        },
        {
          tagName: "br/"
        },
        {
          tagName: "input",
          attrs:{
            type: "text",
            id: "name"
          }
        },
        {
          tagName: "input",
          attrs:{
            type: "text",
            id: "surname"
          }
        }
      ]
    },
    {
      tagName: "div",
      children: [
        {
          tagName: "button",
          attrs:{
            id: "ok"
          },
          children:["OK"]
        },
        {
          tagName: "button",
          attrs:{
            id: "cancel"
          },
          children:["Cancel"]
        }
      ]
    }
  ]
}

parent.children[0].parent = parent;

parent.children[0].children[0].parent = parent;
parent.children[0].children[1].parent = parent;
parent.children[0].children[2].parent = parent;
parent.children[0].children[3].parent = parent;

parent.children[1].parent = parent;
parent.children[1].children[0].parent = parent;
parent.children[1].children[1].parent = parent;

console.log(parent);
}

if(all === "six"){
const parent = {
  tagName: "body",
    children:
    [
      {
        tagName: "div",
        children:[
          {
            tagName: "span",
            children: ["Enter a data please:"]
          },
          {
            tagName: "br/"
          },
          {
            tagName: "input",
            attrs:{
              type: "text",
              id: "name"
            }
          },
          {
            tagName: "input",
            attrs:{
              type: "text",
              id: "surname"
            }
          }
        ]
      },
      {
        tagName: "div",
        children: [
          {
            tagName: "button",
            attrs:{
              id: "ok"
            },
            children:["OK"]
          },
          {
            tagName: "button",
            attrs:{
              id: "cancel"
            },
            children:["Cancel"]
          }
        ]
      }
    ]
}

const user = prompt();
parent.children[1].children[0].attrs.id = user;
console.log(parent.children[1].children[0]);
}

if(all === "seven"){
const parent = {
  tagName: "body",
    children:
    [
      {
        tagName: "div",
        children:[
          {
            tagName: "span",
            children: ["Enter a data please:"]
          },
          {
            tagName: "br/"
          },
          {
            tagName: "input",
            attrs:{
              type: "text",
              id: "name"
            }
          },
          {
            tagName: "input",
            attrs:{
              type: "text",
              id: "surname"
            }
          }
        ]
      },
      {
        tagName: "div",
        children: [
          {
            tagName: "button",
            attrs:{
              id: "ok"
            },
            children:["OK"]
          },
          {
            tagName: "button",
            attrs:{
              id: "cancel"
            },
            children:["Cancel"]
          }
        ]
      }
    ]
}

const [{children:[{children:[span]}]}] = parent.children;
const [,{children:[,{children:[cancel]}]}] = parent.children;
const [{children:[,,,{attrs:{id}}]}] = parent.children;
console.log(span);
console.log(cancel);
console.log(id);
}

if(all === "eight"){
let arr = [1,2,3,4,5, "a", "b", "c"]
const [odd1,even1,odd2,even2,odd3,string1,string2,string3] = arr
console.log(`odd - ${odd1},${odd2},${odd3}`)
console.log(`even - ${even1},${even2}`)
console.log(`string - ${string1},${string2},${string3}`)
}

if(all === "nine"){
let arr = [1, "abc"];
const [number, letter] = arr;
console.log("Number - ", number);
console.log("letter -", letter[0]);
console.log("letter -", letter[1]);
console.log("letter -", letter[2]);
}

if(all === "ten"){
let obj = {name: 'Ivan', surname: 'Petrov', children: [{name: 'Maria'}, {name: 'Nikolay'}]};
const {children:[{name:name1},{name:name2}]} = obj;
console.log(name1);
console.log(name2);
}

if(all === "eleven"){
let arr = [1,2,3,4, 5,6,7,10]
const [a,b,...arrNew] = arr
console.log(a,b)
console.log(arrNew.length)
}

if(all === "twelve"){
const PC = {
cpu: 'Ryzen 5',
memory: '16GB',
motherboard: 'Gigabyte',
videoCard: 'RTX2060'
}
const {[prompt()]:key,...newPC} = PC
console.log(newPC)
}

if(all === "thirteen"){
fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
.then(data => {
const rates = data['rates']
const fromCurrency = prompt("Please enter your source currency: ").toUpperCase();
const toCurrency = prompt("Please enter the target currency for conversion: ").toUpperCase();
const money = +prompt("Enter the amount in the source currency: ");

if(!(fromCurrency in rates) || !(toCurrency in rates)){
  alert("Invalid currencies entered")
  return;
}
const one = rates[fromCurrency]
const two = rates[toCurrency]
const SumMoney = (money/one)*two
alert(`Your money in ${toCurrency} - ${SumMoney.toFixed(2)}`)
})
}

if(all === "fourteen"){
fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
.then(data => {
const rates = data["rates"];
let str = "<select>";
for(const key of Object.keys(rates)){
  str+=`<option>${key}</option>`
}
str+="</select>";
document.write(str);
});
}

if(all === "fifteen"){
fetch('https://open.er-api.com/v6/latest/USD')
.then(res => res.json())
.then(data => {
const rates = data["rates"];
const currencies = Object.keys(rates);
let tableHeader = `<table border="1"><tr><td>${"Currency"}</td>`;
for (const currency of currencies) {
    tableHeader += `<td>${currency}</td>`;
}
tableHeader += "</tr>";
let tableData = "";
for (const rate in rates) {
    tableData += `<tr><td>${rate}</td>`;
    for (const currency of currencies) {
        tableData += `<td>${rates[rate] / rates[currency]}</td>`;
    }
    tableData += "</tr>";
}
tableData += "</table>";
document.write(`${tableHeader} ${tableData}`);
})
}
 
if(all === "sixteen"){
const car = {
  "Name": "chevrolet chevelle malibu",
  "Cylinders": 8,
  "Displacement": 307,
  "Horsepower": 130,
  "Weight_in_lbs": 3504,
  "Origin": "USA",
  "in_production": false
};
let form = '<form>';
Object.keys(car).forEach(key => {
form += `<label>${key}: <input type="${key === 'in_production' ? 'checkbox' : 'text'}" value="${car[key]}"/></label>`;
});
form += '</form>';
document.write(form);
}

if(all === "seventeen"){
const persons = [
{
  name: 'Марія',
  fatherName: 'Іванівна',
  surname: 'Іванова',
  sex: 'female'
},
{
  name: 'Миколай',
  fatherName: 'Іванович',
  surname: 'Іванов',
  age: 15
},
{
  name: 'Петро',
  fatherName: 'Іванович',
  surname: 'Іванов',
  married: true
},
]

const columns = [];
persons.forEach(person => {
Object.keys(person).forEach(key => {
if (!columns.includes(key)) {
  columns.push(key);
}
});
});

let table = '<table border="1">';

table += '<tr>';
columns.forEach(column => table += `<th>${column}</th>`);
table += '</tr>';

persons.forEach(person => {table += '<tr>';
columns.forEach(column => {table += `<td>${person[column] || ''}</td>`});
table += '</tr>';});
table += '</table>';
document.write(table);
}