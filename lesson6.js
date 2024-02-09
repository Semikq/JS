{
  const dog = {
    eyes: "blue",
    gender: "boy",
    breed: "corgi",
    name: "dream"
}
console.log(dog)
}

{
  let obj = prompt("What do you want to call the object?")
  obj = {
      [prompt("First Key")]: prompt("First value"),
      [prompt("Second key")]: prompt("Second value")
  }
  console.log(obj)
}

{
  const obj = {
    [prompt("First Key")]: prompt("First value"),
    [prompt("Second key")]: prompt("Second value")
  };
  const obj2 = {
      ...obj, 
      [prompt("Third key")]: prompt("Third value")
  };
  console.log(obj2);
}

{
  const parent = {
    tagName: "body",
    children: [{
        tagName: "div",
        children: 
        [{
            tagName: "span",
            children: ["Enter a data please:"]
        },
        {
            tagName: "br"
        },
        {
            tagName: "input",
            attrs: {
                type: "text",
                id: "name"
            }
        },
        {
            tagName: "input",
            attrs: {
                type: "text",
                id: "surname"
            }
        }]
    },
    {
        tagName: "div",
        children: 
        [{
            tagName: "button",
            attrs: {
                id: "ok"
            },
            children: ["OK"]
        },
        {
            tagName: "button",
            attrs: {
                id: "cancel"
            },
            children: ["Cancel"]
        }]
    }]
}
console.log(parent.children[1].children[1].children[0])
console.log(parent.children[0].children[3].attrs.id)
}

{
  const parent = {
    tagName: "body",
    children: [{
        tagName: "div",
        children: 
        [{
            tagName: "span",
            children: ["Enter a data please:"]
        },
        {
            tagName: "br"
        },
        {
            tagName: "input",
            attrs: {
                type: "text",
                id: "name"
            }
        },
        {
            tagName: "input",
            attrs: {
                type: "text",
                id: "surname"
            }
        }]
    },
    {
        tagName: "div",
        children: 
        [{
            tagName: "button",
            attrs: {
                id: "ok"
            },
            children: ["OK"]
        },
        {
            tagName: "button",
            attrs: {
                id: "cancel"
            },
            children: ["Cancel"]
        }]
    }]
}
parent.children[0].parent = parent
parent.children[0].children[0].parent = parent
parent.children[0].children[1].parent = parent
parent.children[0].children[2].parent = parent
parent.children[0].children[3].parent = parent

parent.children[1].parent = parent
parent.children[1].children[0] = parent
parent.children[1].children[1] = parent
console.log(parent.children[0])
}

{
  const parent = {
    tagName: "body",
    children: [{
        tagName: "div",
        children: 
        [{
            tagName: "span",
            children: ["Enter a data please:"]
        },
        {
            tagName: "br"
        },
        {
            tagName: "input",
            attrs: {
                type: "text",
                id: "name"
            }
        },
        {
            tagName: "input",
            attrs: {
                type: "text",
                id: "surname"
            }
        }]
    },
    {
        tagName: "div",
        children: 
        [{
            tagName: "button",
            attrs: {
                id: "ok"
            },
            children: ["OK"]
        },
        {
            tagName: "button",
            attrs: {
                id: "cancel"
            },
            children: ["Cancel"]
        }]
    }]
}
parent.children[1].children[0].attrs[prompt("Enter key")] = prompt("Enter value")
console.log(parent.children[1].children[0].attrs)
}

{
  const parent = {
    tagName: "body",
    children: [{
        tagName: "div",
        children: 
        [{
            tagName: "span",
            children: ["Enter a data please:"]
        },
        {
            tagName: "br"
        },
        {
            tagName: "input",
            attrs: {
                type: "text",
                id: "name"
            }
        },
        {
            tagName: "input",
            attrs: {
                type: "text",
                id: "surname"
            }
        }]
    },
    {
        tagName: "div",
        children: 
        [{
            tagName: "button",
            attrs: {
                id: "ok"
            },
            children: ["OK"]
        },
        {
            tagName: "button",
            attrs: {
                id: "cancel"
            },
            children: ["Cancel"]
        }]
    }]
}
const {children: [{children: [{tagName}]}]} = parent
const {children: [, {children: [, {children: [cancel]}]}]} = parent
const {children: [{children: [,,,{attrs: {id}}]}]} = parent
const {children: [{children: [,,{attrs: {type}}]}]} = parent
console.log(tagName)
console.log(cancel)
console.log(id)
console.log(type)
}

{
  const arr = [1,2,3,4,5, "a", "b", "c"]
  const [odd1,even1,odd2,even2,odd3,letter1,letter2,letter3] = arr 
  console.log(`Odd numbers: ${odd1},${odd2},${odd3}\nEven numbers: ${even1},${even2}\nLetters: ${letter1},${letter2},${letter3}`)
}

{
  const arr = [1, "abc"]
  const [number, letter] = arr
  const [s1, s2, s3] = letter.split("")
  console.log(number, s1, s2, s3)
}

{
  const obj = {name: 'Ivan',
  surname: 'Petrov',
  children: [{name: 'Maria'}, {name: 'Nikolay'}]}
  const {children: [{name:name1},{name:name2}]} = obj
  console.log(name1, name2)
}

{
    const arr = [1,2,3,4, 5,6,7,10]
    let {0:a, 1:b, length} = arr
    console.log(a, b, length)
}

{
  const dog = {
    eyes: "blue",
    gender: "boy",
    breed: "corgi",
    name: "dream"
}
const {[prompt()]:key, ...dog2} = dog
console.log(dog2)
}

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
       const inputCurrency = prompt("Please enter your source currency:").toUpperCase()
       const converration = prompt("Please enter the target currency for conversion: ").toUpperCase()
       if(inputCurrency in data.rates && converration in data.rates){
           const money = prompt("Enter the amount in the source currency: ")
           if(!isNaN(money)){
               const sum = (money/data.rates[converration]) * data.rates[inputCurrency]
               console.log(sum.toFixed(2))
           }else{
               console.log("You didn't enter a number")
           }
       }else{
           console.log("There is no such currency")
       }
        })
}

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
    let str = ''
    str = "<select>"
    for(const rate in data.rates){
        str += `<option>${rate}</option>`
    }
    str += "</select>"
    document.write(str)
    })
}

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
       let str = `<table><tr><td></td>`
       for(const rate in data.rates){
           str += `<td>${rate}</td>`
       }
       str += `</tr>`
       for(const rate in data.rates){
           str += `<tr><td>${rate}</td>`
           for(const currency in data.rates){
               str += `<td>${rate === currency ? "1" :(data.rates[currency]/data.rates[rate]).toFixed(2)}</td>`
           }
           str += `</tr>`
       }
       str += `</table>`
           document.write(str)
        })
}

{
    const car = {
        "Name":"chevrolet chevelle malibu",
        "Cylinders":8,
        "Displacement":307,
        "Horsepower":130,
        "Weight_in_lbs":3504,
        "Origin":"USA",
        "in_production": false
    }
    let str = '<form>'
    for(const detail in car){
        str += `<label>${detail}: <input type="${typeof car[detail] === "boolean" ? "checkbox" : "text"}" value="${car[detail]}"></label>`
    }
    str += '</form>'
    document.write(str)
}

{
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
        }]
    const arr = []
    for(const obj of persons){
        for(const title in obj){
            if(!arr.includes(title)){
                arr.push(title)
            }
        }
    }
    let str = `<table border="1"><tr>`
    for(const elementHead of arr){
        str += `<td>${elementHead}</td>`
    }
    str += "</tr>"
    for(const obj of persons){
        str += "<tr>"
        for(const elementBody of arr){
            str += `<td>${obj[elementBody] !== undefined ? obj[elementBody] : ""}</td>`
        }
        str += "</tr>"
    }
    str += "</table>"
    document.write(str)
}