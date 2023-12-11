//Arrow to Functions
function capitalize () {
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

alert("ATM")
function course(usd){
let rate = confirm("buy") || alert("Sell")
if(rate === true){
    rate = usd * 2
    alert(rate)
}
else{
    rate = usd * 1.5
    alert(rate)
}
}
course(prompt("Enter Dollars"))


alert("Adding spaces")
function text(user){const result = user.split("\\n ").join("\n");
return result;};
console.log(text(prompt()));


function f(message){;
const rik = message;
const end = rik ? 2023 - rik : "No";
return end
}
console.log(f(prompt()));


const arr = [[0, 0, 0, 0, 0, 0],[0, 1, 2, 3, 4, 5],[0, 2, 4, 6, 8, 10],[0, 3, 6, 9, 12, 15],[0, 4, 8, 12, 16, 20],[0, 5, 10, 15, 20, 25]];
function table (arr) {
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