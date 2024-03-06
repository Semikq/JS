{
    function RGB(r = 0,g = 0,b = 0){
        return `#${r.toString(16).padStart(2,"0")}${g.toString(16).padStart(2,"0")}${b.toString(16).padStart(2,"0")}`
    }
    console.log(RGB(122,255))
}

{
    function clothes(size){
        if(+size === 38){
            alert("S")
        }else if(+size === 40){
            alert("M")
        }else if(+size === 44){
            alert("L")
        }else if(+size === 48){
            alert("XL")
        }else if(+size === 52){
            alert("XXL")
        }else{
            alert("This size does not exist")
        }
        }
        console.log(clothes(52))
}

{
    const defaultLogin = "admin"
    const defaultPassword = "qwerty"
    function loginAndPassword(defaultLogin, defaultPassword){
        while(true){
            const login = prompt("Enter login")
            if(login === defaultLogin){
                while(true){
                const password = prompt("Enter password")
                if(password === defaultPassword){
                    alert("Welcome")
                    return
                }else if(password === null){
                if(confirm("Do you want to try again or not? PP")){
                        continue;
                    }else{
                        return;
                    }
                }else{
                    continue;
                }
            }
            }else if(login === null){
                if(confirm("Do you want to try again or not? LL")){
                        continue;
                    }else{
                        break;
                    }
            }else{
                continue;
            }
        }
    }
    console.log(loginAndPassword(defaultLogin, defaultPassword))
}

{
    function multiplicationTable(size) {
        function generateTable(size) {
            let arr = [];
            if (Number(size) > 0) {
                for (let line = 1; line <= size; line++) {
                    let arr2 = [];
                    for (let element = 1; element <= size; element++) {
                        arr2.push(line * element);
                    }
                    arr.push(arr2);
                }
                return arr;
            } else {
                return null;
            }
        }
    
        function table(arr) {
            if (arr !== null) {
                let str = "<table>";
                for (const elements of arr) {
                    str += "<tr>";
                    for (const element of elements) {
                        str += `<td>${element}</td>`;
                    }
                    str += "</tr>";
                }
                str += "</table>";
                return str;
            } else {
                return "";
            }
        }
        
        return table(generateTable(size));
    }
    document.write(multiplicationTable());
}

{
    function ATM() {
        const currencyTable = () => {
            fetch('https://open.er-api.com/v6/latest/USD')
                .then(res => res.json())
                .then(data => {
                    const currency = prompt("Enter the index of the currency you want to exchange from:").toUpperCase()
                    const firstCurrency = prompt("Enter the index of the currency you want to exchange to:").toUpperCase()
                    const money = +prompt("Enter the amount of money:")
                    const course = data.rates[currency] / data.rates[firstCurrency]
                    if (confirm("Buy or sell?")) {
                        const result = money * course
                        console.log("Result:", result.toFixed(2))
                    } else {
                        const result = money / course
                        console.log("Result:", result.toFixed(2))
                    }})}
        currencyTable()}
    ATM()
}

//createPerson
function createPerson(name, surname){
    let obj = {
        name:name,
        surname:surname,
        getFullName(){
            return `${this.name} ${this.surname} ${this.fatherName? this.fatherName + " ":""}`
        }
    }
    return obj
}

const a = createPerson("Vasya", "Pupkin")
const b = createPerson("Anna", "Ivanova")
const c = createPerson("Elizaveta", "Petrova")

console.log(a.getFullName())
a.fatherName = 'Ivanovych'    
console.log(a.getFullName())

console.log(b.getFullName())


//createPersonClosure
function createPersonClosure(name, surname) {
    let age = 0;
    let fatherName = '';
    let fullName = '';

    function getName() {
        return name
    }

    function getSurname() {
        return surname
    }

    function getFatherName() {
        return fatherName;
    }

    function getAge() {
        return age;
    }

    function getFullName() {
        return fullName;
    }

    function setName(newName) {
        if (newName.charAt(0).toUpperCase() === newName.charAt(0) && newName.slice(1).toLowerCase() === newName.slice(1)) {
            name = newName;
            return true;
        } else {
            return false;
        }
    }

    function setSurname(newSurname) {
        if (newSurname.charAt(0).toUpperCase() === newSurname.charAt(0) && newSurname.slice(1).toLowerCase() === newSurname.slice(1)) {
            surname = newSurname;
            return true;
        } else {
            return false;
        }
    }

    function setFatherName(newFatherName) {
        if (newFatherName.charAt(0).toUpperCase() === newFatherName.charAt(0) && newFatherName.slice(1).toLowerCase() === newFatherName.slice(1)) {
            fatherName = newFatherName;
            return true;
        } else {
            return false;
        }
    }

    function setAge(newAge) {
        if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
            age = newAge;
            return `Check is successful: ${age}`;
        } else {
            return `Failed to check: ${newAge}`;
        }
    }

    function setFullName(newFullName) {
        const parts = newFullName.split(' ');
        if (parts.length === 3) {
            setName(parts[0]);
            setSurname(parts[1]);
            setFatherName(parts[2]);
            fullName = newFullName;
            return fullName;
        } else {
            return newFullName;
        }
    }

    return {
        getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setFatherName, setAge, setFullName,
    };
}

const a = createPersonClosure("Vasya", "Pupkin");
const b = createPersonClosure("Anna", "Ivanova");

console.log(a.getName());

console.log(a.setAge(15));
console.log(a.setAge(150));

console.log(b.setFullName("Petrova Anna Mykolayivna"));
console.log(b.getFatherName());


//createPersonClosureDestruct
function createPerson(name, surname) {
    return { name, surname };
}

function createPersonClosureDestruct({ name = '', surname = '', age = 0, fatherName = '', fullName = ''}) {

    function getName() {
        return name
    }

    function getSurname() {
        return surname
    }

    function getFatherName() {
        return fatherName;
    }

    function getAge() {
        return age;
    }

    function getFullName() {
        return fullName;
    }

    function setName(newName) {
        if (newName.charAt(0).toUpperCase() === newName.charAt(0) && newName.slice(1).toLowerCase() === newName.slice(1)) {
            name = newName;
            return true;
        } else {
            return false;
        }
    }

    function setSurname(newSurname) {
        if (newSurname.charAt(0).toUpperCase() === newSurname.charAt(0) && newSurname.slice(1).toLowerCase() === newSurname.slice(1)) {
            surname = newSurname;
            return true;
        } else {
            return false;
        }
    }

    function setFatherName(newFatherName) {
        if (newFatherName.charAt(0).toUpperCase() === newFatherName.charAt(0) && newFatherName.slice(1).toLowerCase() === newFatherName.slice(1)) {
            fatherName = newFatherName;
            return true;
        } else {
            return false;
        }
    }

    function setAge(newAge) {
        if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
            age = newAge;
            return `Check is successful: ${age}`;
        } else {
            return `Failed to check: ${newAge}`;
        }
    }

    function setFullName(newFullName) {
        const [newSurname, newName, newFatherName] = newFullName.split(' ');
        if (newSurname && newName && newFatherName) {
            setSurname(newSurname);
            setName(newName);
            setFatherName(newFatherName);
            fullName = newFullName;
            return fullName;
        } else {
            return newFullName;
        }
    }

    return {
        createPerson, getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setFatherName, setAge, setFullName,
    };
}
const a = createPersonClosureDestruct(createPerson("Vasya", "Pupkin"));
const b = createPersonClosureDestruct({ name: 'Nicholas', age: 75 });


//isSorted
function inSorted(...num){
    for(let i = 0; i<num.length; i++){
        if(isNaN(num[i]) && num[i] <= num[i-1]){
            return false
        }
    }
    return true
}
console.log(inSorted(1,2,2,4,5,6))


//Test isSorted
function number(){
let arr = [];
for (;;) {
  let input = prompt("Enter a number:");
  if (input === null || input.trim() === "") {
    break;
  }
  arr.push(input);
}
return arr
}

function inSorted(arr){
    for(let i = 0; i<arr.length; i++){
        if(isNaN(arr[i]) || arr[i] <= arr[i-1]){
            return false
        }
    }
return true
}
console.log(inSorted(number()))


//personForm
function createPersonClosure(name, surname) {
    let age = 0;
    let fatherName = '';
    let fullName = '';

    function getName() {
        return name;
    }

    function getSurname() {
        return surname;
    }

    function getFatherName() {
        return fatherName;
    }

    function getAge() {
        return age;
    }

    function getFullName() {
        return fullName;
    }

    function setName(newName) {
        if (newName.charAt(0).toUpperCase() === newName.charAt(0) && newName.slice(1).toLowerCase() === newName.slice(1)) {
            name = newName;
            return true;
        } else {
            return false;
        }
    }

    function setSurname(newSurname) {
        if (newSurname.charAt(0).toUpperCase() === newSurname.charAt(0) && newSurname.slice(1).toLowerCase() === newSurname.slice(1)) {
            surname = newSurname;
            return true;
        } else {
            return false;
        }
    }

    function setFatherName(newFatherName) {
        if (newFatherName.charAt(0).toUpperCase() === newFatherName.charAt(0) && newFatherName.slice(1).toLowerCase() === newFatherName.slice(1)) {
            fatherName = newFatherName;
        }
        return fatherName;
    } 

    function setAge(newAge) {
        if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
                age = newAge;
                return age;

        } else {
            return age;
        }
    }

    function setFullName(newFullName) {
        const parts = newFullName.split(' ');
        if (parts.length === 3) {
            setName(parts[0]);
            setSurname(parts[1]);
            setFatherName(parts[2]);
            fullName = newFullName;
            return fullName;
        } else {
            return newFullName;
        }
    }

    return {
        getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setFatherName, setAge, setFullName,
    };
}


function personForm(parent, person) {
    let nameInput = document.createElement("input")
    let surnameInput = document.createElement("input")
    let fatherNameInput = document.createElement("input")
    let ageInput = document.createElement("input")
    let fullNameInput = document.createElement("input")


    parent.append(nameInput)
    parent.append(surnameInput)
    parent.append(fatherNameInput)
    parent.append(ageInput)
    parent.append(fullNameInput)

    nameInput.value = person.getName()
    surnameInput.value = person.getSurname()
    fatherNameInput.value = person.getFatherName()
    ageInput.value = person.getAge()
    fullNameInput.value = person.getFullName()


    nameInput.oninput = () => {
        const result = person.setName(nameInput.value);
        if (result) {
            nameInput.value = person.getName();
            nameInput.value = person.getFullName();
        }
    };
    surnameInput.oninput = () => {
        const result = person.setSurname(surnameInput.value);
        if (result) {
            surnameInput.value = person.getSurname();
            surnameInput.value = person.getFullName();
        }
    };
    
    fatherNameInput.oninput = () => {
        const result = person.setFatherName(fatherNameInput.value);
        if (result) {
            fatherNameInput.value = person.getFatherName();
            fatherNameInput.value = person.getFullName();
        }
    };
        ageInput.oninput = () => {
            const newAge = parseInt(ageInput.value);
            if (!isNaN(newAge)) {
                const result = person.setAge(newAge);
                ageInput.value = isNaN(result) ? '' : result;
            }
        };
        fullNameInput.oninput = () => {
            fullNameInput.value = person.setFullName(fullNameInput.value);
            nameInput.value = person.getName();
            surnameInput.value = person.getSurname();
            fatherNameInput.value = person.getFatherName();
        };
}

const b = createPersonClosure("Anna", "Ivanova");
b.setAge(12);
b.setFullName("Anna Petrova Mykolayivna");

const parentElement = document.getElementById('one');
personForm(parentElement, b);