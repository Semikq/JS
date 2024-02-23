{
    const celsius = celsius => (celsius * 9/5) + 32
    const fahrenheit = fahrenheit => (5/9) * (fahrenheit - 32)
}

{
    const RGB = (r,g,b) => "#"+r.toString(16).padStart(2,"0") + g.toString(16).padStart(2,"0") + b.toString(16).padStart(2,"0")
}

{
    const floors = +prompt('Enter the number of floors:');
    const apartmentsPerFloor = +prompt('Enter the number of apartments per floor:');
    const apartmentNumber = +prompt('Enter the apartment number:');
    const house = (floors, apartmentsPerFloor,apartmentNumber) => {
        totalApartments = floors * apartmentsPerFloor
        entrance = Math.ceil(apartmentNumber / totalApartments)
        floor = Math.ceil((apartmentNumber % totalApartments) / apartmentsPerFloor)
        return {entrance,floor}
    };
    const result = house(floors,apartmentsPerFloor,apartmentNumber)
    console.log(`entrance - ${result.entrance}, floor - ${result.floor}`)
}

{
    const credentials = () => {
        const capitalize = (str) => str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()

        const name = capitalize(prompt().trim())
        const surname = capitalize(prompt().trim())
        const fatherName = capitalize(prompt().trim())
        const fullName = `${name} ${surname} ${fatherName}`

        return {name,surname,fatherName,fullName}
    }
    console.log(credentials())
}

{
    const user = prompt("Your word through: ")
    const result = (text) => text.split("\\n").join("\n")
    console.log(result(user))
}

{
    const user = prompt("How old are you?")
    const promptOR = (user) => +user || alert("ERROR")
    const result = 2024 - promptOR(user)
    console.log(`Your year of birth ${result}`)
}

{
    const inputLogin = prompt()
    const inputPassword = prompt()
    const loginAndPassword = ((inputLogin, inputPassword) =>{
        const login = "admin"
        const password = "qwerty"
        if(inputLogin === login){
            if(inputPassword === password){
                alert("Welcome")
            }else{
                alert("Wrong password")
            }
        }else{
            alert("Wrong login")
        }
    })(inputLogin, inputPassword)
}

{
    const arr = [[0,0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    const forTable = (arr) =>{
        let str = "<table border>"
        for(const elements of arr){
            str += "<tr>"
            for(const element of elements){
                str += `<td>${element}</td>`
            }
            str += "</tr>"
        }
        str += "</table>"
        return str
    }
    document.write(forTable(arr))
}

{
    const user = prompt().split(", " && " ")
    const errorWords = prompt().split(", " && " ")
    const filterLexics = (user, errorWords) => user.filter(word => !errorWords.includes(word)).join(" ")
    console.log(filterLexics(user,errorWords))
}

{
    const currencyTable = () => {
        fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
         .then(data => {
            const rate = Object.keys(data.rates)
            const tableAll = [[" ", ...rate]]
            for(const elements of rate){
                tableRow = [elements]
                    for(const element of rate){
                        tableRow.push(elements === element? 1: (data.rates[elements]/data.rates[element]).toFixed(2))
                    }
                tableAll.push(tableRow)
            }
            document.write(forTable(tableAll))
        })}
    
        const forTable = (arr) => {
            let str = "<table border>"
            for(const elements of arr){
                str += `<tr>`
                    for(const element of elements){
                        str += `<td>${element}</td>`
                    }
                str += "</tr>"
            }
            str += "</table>"
            return str
        }
        currencyTable()
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

  const forms = (obj) => {
    let str = "<form>"
        for(const element in obj){
            str += `<label>${element}: <input type="${typeof obj[element] === "boolean"? "checkbox": "text"}" value="${obj[element]}"></label>`
        }
    str += "</form>"
    return str
  }
  document.write(forms(car))
}

{
    var persons = [
        {name: "Ivan", age: 17},
        {name: "Maria", age: 35},
        {name: "Oleksiy", age: 73},
        {name: "Yakiv", age: 12},
    ]
    
    const sort = (arr, sortBy, ascending = true) =>{
        const copy = [...arr]
        if(sortBy === "name"){
            return copy.sort((a,b) => ascending? 1: -1)
        }else if(sortBy === "age"){
            return copy.sort((a,b) => ascending? a.age - b.age: b.age - a.age)
        }
    }
    
    console.log(sort(persons, "name", false))
    console.log(sort(persons, "age"))
}
   
const persons = [
    {
        name: 'Maria',
        fatherName: 'Ivanovna',
        surname: 'Ivanova',
        sex: 'female'
    },
    {
        name: 'Nikolay',
        fatherName: 'Ivanovich',
        surname: 'Ivanov',
        age: 15
    },
    {
        name: 'Peter',
        fatherName: 'Ivanovich',
        surname: 'Ivanov',
        married: true
    }
]

const table = (arr, sortBy, sortOrder = true) => {
const copy = [...arr]

copy.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) return sortOrder ? 1 : -1;
    if (a[sortBy] < b[sortBy]) return sortOrder ? -1 : 1;
    return 0;
});

const table = () => {
    const columns = []
        for(const elements of copy){
            for(const element in elements){
                if(!columns.includes(element)){
                    columns.push(element)
                }
            }
        }

    let str = "<table><tr>"
    for(const result of columns){
        str += `<td>${result}</td>`
    }
    str += "</tr>"
    for(const result of copy){
        str += "<tr>"
        for(const colum of columns){
            str += `<td>${result[colum] === undefined? "": result[colum]}</td>`
        }
        str += "</tr>"
    }
    str += "</table>"
    return str
}
return table()
}
document.write(table(persons,"name"))

{
    const firstNumber = document.createElement("input")
    const secondNumber = document.createElement("input")
    const divisionResult = document.createElement("div")
    firstNumber.type = "number"
    secondNumber.type = "number"
    document.body.append(firstNumber,secondNumber,divisionResult)

    const calcResult = () => {
        divisionResult.innerText = Math.floor(+firstNumber.value/+secondNumber.value)
    }
    firstNumber.oninput = secondNumber.oninput = calcResult
}

{
    const km = prompt("Enter kilometers:"); 
    const days = prompt("Enter number of days:"); 
    const calculation = (km, days) => {
        if (!isNaN(km) && !isNaN(days)) {
            const result = km * days;
            console.log("Result:", result);
        }else {
            console.log("Invalid input. Please enter valid numbers.");
        }
    }
    calculation(km,days)
}

{
    const km = document.createElement("input")
    const days = document.createElement("input")
    const divisionResult = document.createElement("div")
    km.type = "number"
    days.type = "number"
    document.body.append(km,days,divisionResult)

    const calculation = () => {
        divisionResult.innerText = km.value * days.value
    }
    km.addEventListener("input", calculation)
    days.addEventListener("input", calculation)
}