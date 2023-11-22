let all = prompt()
if(all === "one"){
const temp = (celsia) => celsia* (9/5) + 32;
}

if(all === "two"){
const RGB = (r,g,b) => `#${r.toString(16).padStart(2,"0")}${g.toString(16) .padStart(2,"0")}${b.toString(16) .padStart(2,"0")}`;
}

if(all === "three"){
const Number_floor = +prompt('Enter the number of floors:');
const number_of_apartments = +prompt('Enter the number of apartments on the floor:');
const apartment_number = +prompt('Enter apartment number:');

const dom = (Number_floor, number_of_apartments, apartment_number) => {
const apartments_per_floor = Number_floor * number_of_apartments;
const entrance = Math.ceil(apartment_number / apartments_per_floor);
const floor = Math.ceil((apartment_number % apartments_per_floor) / number_of_apartments);
return { entrance, floor };};

const result = dom(Number_floor, number_of_apartments, apartment_number);

console.log(`entrance - ${result.entrance}, floor - ${result.floor}`);
}

if(all === "four"){
const capitalize = () => {
const names = prompt("Name")
const surnames = prompt("Surname")
const fatherNames = prompt("FatherNames")

const name =  names.charAt(0).toUpperCase() + names.slice(1).toLowerCase();
const surname = surnames.charAt(0).toUpperCase() + surnames.slice(1).toLowerCase();
const fatherName = fatherNames.charAt(0).toUpperCase() + fatherNames.slice(1).toLowerCase();
const fullName = `${name} ${surname} ${fatherName}`
return{name,surname,fatherName,fullName}
}
console.log(capitalize())
}

if(all === "five"){
const user = prompt("Your word through: ");
const text = (user) => {const result = user.split("\\n ").join("\n");
return result;};
console.log(text(user));
}

if(all === "six"){
const f = (message) => prompt(message);
const rik = f("Enter your age");
const end = rik ? 2023 - rik : "No";
console.log(end);
}

if(all === "seven"){
const b = () => {
    const a = (message) => prompt(message);
    const login = a("Enter your login");
    if(login === "admin"){
        const password = a("Enter your password");
        if(password === "qwerty"){
            alert("Welcome");
            return true;
        }else{
            alert("Incorrect password");
            return false;
        }
    }else{
        alert("Incorrect login");
        return false;
    }
}
console.log(b());
}

if(all === "eight"){
const arr = [[0, 0, 0, 0, 0, 0],[0, 1, 2, 3, 4, 5],[0, 2, 4, 6, 8, 10],[0, 3, 6, 9, 12, 15],[0, 4, 8, 12, 16, 20],[0, 5, 10, 15, 20, 25]];
const table = (arr) => {
    let str = "<table>";
    for(const tr of arr){
        str += `<tr></tr>`;
        for(const td of tr){
            str+=`<td>${td}</td>`;
        }
    }
    str += "</table>";
    return str;
}
document.write(table(arr));
}

if(all === "nine"){
const f = () => {
    const usern = (message) => prompt(message);
    const words = usern("Enter words").split(" ");
    const needlessWord = usern("Enter needless word").split(" ");
    const transformedWord = words.filter(word => !needlessWord.includes(word.toLowerCase()));
    const end = transformedWord.join(" ");
    return end
}
console.log(f());
}

if(all === "ten"){
const a = (cai) => {
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            const rates = data["rates"];
            const currencies = Object.keys(rates);
            let tableHeader = [["aaaa", ...currencies]];
            let tableData = "";

            for (const rate in rates) {
                tableData += `<tr><td>${rate}</td>`;
                for(const currency of currencies){
                    tableData+= `<td>${rates[rate] / rates[currency]}</td>`;
                }
                tableData += "</tr>";
            }

            cai(tableHeader, tableData);
        });
}
}

if(all === "eleven"){
const table = (arr, data) => {
    let str = "<table>";
    for (const tr of arr) {
        str += "<tr>";
        for (const td of tr) {
            str += `<td>${td}</td>`;
        }
        str += "</tr>";
    }
    str += data;
    str += "</table>";

    document.write(str);
}
a(table);
}

if(all === "twelve"){
const f = (car) => {
let form = '<form>';
Object.keys(car).forEach(key => {
form += `<label>${key}: <input type="${key === 'in_production' ? 'checkbox' : 'text'}" value="${car[key]}"/></label>`;});
form += '</form>';
return form;
}
const car = {
"Name": "chevrolet chevelle malibu",
"Cylinders": 8,
"Displacement": 307,
"Horsepower": 130,
"Weight_in_lbs": 3504,
"Origin": "USA",
"in_production": false
};
document.write(f(car));
}

if(all === "thirteen"){
    var persons = [
        {name: "Ivan", age: 17},
        {name: "Mary", age: 35},
        {name: "Alexei", age: 73},
        {name: "Jacob", age: 12},
    ]
    
    const all = (arr, sortBy,ascending = true) => {
        const copy = [...arr];
        if (sortBy === "name") {
            return copy.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
            });
        } else if (sortBy === "age") {
            return copy.sort((a, b) => {return ascending ? a.age - b.age : b.age - a.age;});
        }
    };
    
    
    console.log(all(persons, "name"));
    console.log(all(persons, "age", false));
}

if(all === "fourteen"){
const car = {
    "Name": "chevrolet chevelle malibu",
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Origin": "USA",
    "in_production": false
  };
  const table = (arr, sortBy, sortOrder) => {
      const sortedArray = [...arr];
      sortedArray.sort((a, b) => {
          const aValue = typeof a[sortBy] === 'string' ? a[sortBy].toLowerCase() : a[sortBy];
          const bValue = typeof b[sortBy] === 'string' ? b[sortBy].toLowerCase() : b[sortBy];
  
          if (sortOrder === 'asc') {
              return aValue > bValue ? 1 : -1;
          } else {
              return aValue < bValue ? 1 : -1;
          }
      });
      let str = "<table>";
      for (const obj of sortedArray) {
          str += "<tr>";
          for (const key in obj) {
              str += `<td>${obj[key]}</td>`;
          }
          str += "</tr>";
      }
      str += "</table>";
      document.write(str);
  };

  table([car, car, car], 'Name', 'asc');
}

if(all === "fifteen"){
const a = prompt();
const b = prompt();

const f = (a,b) =>{
    const Zag_km = a * b
    return Zag_km
}

console.log(f(a,b))
}
  
  