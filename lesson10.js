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

{
    function createPerson(name, surname){
        return {
            name,
            surname,
            getFullName(){
                if(this.fatherName){
                    return `${this.name} ${this.surname} ${this.fatherName}`
                }else{
                    return `${this.name} ${this.surname}`
                }
            }
        }
    }

    const a = createPerson("Vasya", "Pupkin")
    const b = createPerson("Anna", "Ivanova")
    console.log(a.getFullName())
    a.fatherName = 'Ivanovych'    
    console.log(a.getFullName())
    console.log(b.getFullName())
}

{
    function createPersonClosure(name, surname){
        let age = ''
        let fatherName = ''
        function getName(){
            return name
        }
        function getSurname(){
            return surname
        }
        function getFatherName(){
            return fatherName
        }
        function getAge(){
            return age
        }
        function getFullName(){
            return `${surname} ${name} ${fatherName}`
        }

        function setName(newName){
            if(newName.slice(0,1).toUpperCase() === newName.slice(0,1) && newName.slice(1).toLowerCase() === newName.slice(1)){
                name = newName
                return name
            }else{
                return name
            }
        }
        function setSurname(newSurname){
            if(newSurname.slice(0,1).toUpperCase() === newSurname.slice(0,1) && newSurname.slice(1).toLowerCase() === newSurname.slice(1)){
                surname = newSurname
                return surname
            }else{
                return surname
            }
        }
        function setFatherName(newFatherName){
            if(newFatherName.slice(0,1).toUpperCase() === newFatherName.slice(0,1) && newFatherName.slice(1).toLowerCase() === newFatherName.slice(1)){
                fatherName = newFatherName
                return fatherName
            }else{
                return fatherName
            }
        }
        function setAge(newAge){
            if(Number(newAge) && newAge >= 0 && newAge <= 100){
                return age = newAge
            }else{
                return age
            }
        }
        function setFullName(newFullName){
            newFullName = newFullName.split(" ")
            if(newFullName.length === 3){
                surname = setSurname(newFullName[0])
                name = setName(newFullName[1])
                fatherName = setFatherName(newFullName[2])
                return surname, name, fatherName
            }else{
                return surname, name, fatherName
            }
        }
        return {getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setFatherName, setAge, setFullName}
    }

    const a = createPersonClosure("Vasya", "Pupkin")
    const b = createPersonClosure("Anna", "Ivanova")
    console.log(a.getName())
    console.log(a.setAge(15))
    console.log(a.setAge(150))
    b.setFullName("Petrova Anna Mykolaivna")
    console.log(b.getFatherName())
}

{
    function createPerson(name = '', surname = '', fatherName = '', age = 0){
        return {
        name,
        surname,
        fatherName,
        age,
        getFullName(){
            if(this.fatherName){
                return `${this.name} ${this.surname} ${this.fatherName}`
            }else{
                return `${this.name} ${this.surname}`
            }
        }
    }
}

    function createPersonClosureDestruct({name = '', surname = '', fatherName = '', age = 0}){
        function getName(){
            return name
        }
        function getSurname(){
            return surname
        }
        function getFatherName(){
            return fatherName
        }
        function getAge(){
            return age
        }
        function getFullName(){
            return `${surname} ${name} ${fatherName}`
        }

        function setName(newName){
            if(newName.slice(0,1).toUpperCase() === newName.slice(0,1) && newName.slice(1).toLowerCase() === newName.slice(1)){
                name = newName
                return name
            }else{
                return name
            }
        }
        function setSurname(newSurname){
            if(newSurname.slice(0,1).toUpperCase() === newSurname.slice(0,1) && newSurname.slice(1).toLowerCase() === newSurname.slice(1)){
                surname = newSurname
                return surname
            }else{
                return surname
            }
        }
        function setFatherName(newFatherName){
            if(newFatherName.slice(0,1).toUpperCase() === newFatherName.slice(0,1) && newFatherName.slice(1).toLowerCase() === newFatherName.slice(1)){
                fatherName = newFatherName
                return fatherName
            }else{
                return fatherName
            }
        }
        function setAge(newAge){
            if(Number(newAge) && newAge >= 0 && newAge <= 100){
                return age = newAge
            }else{
                return age
            }
        }
        function setFullName(newFullName){
            newFullName = newFullName.split(" ")
            if(newFullName.length === 3){
                surname = setSurname(newFullName[0])
                name = setName(newFullName[1])
                fatherName = setFatherName(newFullName[2])
                return surname, name, fatherName
            }else{
                return surname, name, fatherName
            }
        }
        return {getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setFatherName, setAge, setFullName}
    }

    const a = createPersonClosureDestruct(createPerson("Vasya", "Pupkin"))
    const b = createPersonClosureDestruct({name: 'Nicholas', age: 75})
    console.log(a.getFullName())
    console.log(b.getFullName())
}

{
    function isSorted(...arr){
        if(arr.length > 0){
            for(let i = 0; i < arr.length - 1; i++){
                if(Number(arr[i]) && arr[i] > arr[i + 1]){
                    return false
                }
            }
            return true
        }else{
            return ""
        }
    }
    console.log(isSorted(1,2,3,4))
}

{
    function number(){
        const arr = []
        while(true){
            const num = prompt("Enter number please")
            if(Number(num)){
                arr.push(num)
                continue;
            }else if(num === null){
                break;
            }else{
                alert("Please number!")
                continue;
            }
        }
        return arr
    }

    function isSorted(arr){
        if(arr.length > 0){
            for(let i = 0; i < arr.length - 1; i++){
                if(Number(arr[i]) && arr[i] > arr[i + 1]){
                    return false
                }
            }
            return true
        }else{
            return ""
        }
    }
    console.log(isSorted(number()))
}

{
    function createPersonClosure(name, surname){
        let age = ''
        let fatherName = ''
        function getName(){
            return name
        }
        function getSurname(){
            return surname
        }
        function getFatherName(){
            return fatherName
        }
        function getAge(){
            return age
        }
        function getFullName(){
            return `${surname} ${name} ${fatherName}`
        }

        function setName(newName){
            if(newName.slice(0,1).toUpperCase() === newName.slice(0,1) && newName.slice(1).toLowerCase() === newName.slice(1)){
                name = newName
                return name
            }else{
                return name
            }
        }
        function setSurname(newSurname){
            if(newSurname.slice(0,1).toUpperCase() === newSurname.slice(0,1) && newSurname.slice(1).toLowerCase() === newSurname.slice(1)){
                surname = newSurname
                return surname
            }else{
                return surname
            }
        }
        function setFatherName(newFatherName){
            if(newFatherName.slice(0,1).toUpperCase() === newFatherName.slice(0,1) && newFatherName.slice(1).toLowerCase() === newFatherName.slice(1)){
                fatherName = newFatherName
                return fatherName
            }else{
                return fatherName
            }
        }
        function setAge(newAge){
            
            if(newAge >= 0 && newAge <= 100){
                age = newAge
                return age
            }else{
                return age
            }
        }
        function setFullName(newFullName) {
        newFullName = newFullName.split(" ");
        if (newFullName.length === 3) {
            surname = setSurname(newFullName[0]);
            name = setName(newFullName[1]);
            fatherName = setFatherName(newFullName[2]);
            return getFullName(); 
        } else {
            return getFullName(); 
        }
    }

        return {getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setFatherName, setAge, setFullName}
    }



    function personForm(parent, person){

    const surnameInput = document.createElement("input")
    const nameInput = document.createElement("input")
    const fatherNameInput = document.createElement("input")
    const ageInput = document.createElement("input")
    const fullNameInput = document.createElement("input")

    surnameInput.value = person.getSurname()
    nameInput.value = person.getName()
    fatherNameInput.value = person.getFatherName()
    ageInput.value = person.getAge()
    fullNameInput.value = person.getFullName()

    parent.append(surnameInput,nameInput,fatherNameInput,ageInput,fullNameInput)

    surnameInput.addEventListener("input", function(){
        let result = person.setSurname(surnameInput.value)
        if(result){
            surnameInput.value = person.getSurname()
            fullNameInput.value = person.getFullName()
        }
    })

    nameInput.addEventListener("input", function(){
        let result = person.setName(nameInput.value)
        if(result){
            nameInput.value = person.getName()
            fullNameInput.value = person.getFullName()
        }
    })

    fatherNameInput.addEventListener("input", function(){
        let result = person.setFatherName(fatherNameInput.value)
        if(result){
            fatherNameInput.value = person.getFatherName()
            fullNameInput.value = person.getFullName()
        }
    })

    ageInput.addEventListener("input", function(){
        if(!isNaN(ageInput.value)){
            let result = person.setAge(ageInput.value)
            ageInput.value = result
        }else{
            ageInput.value = ""
        }
    })

    fullNameInput.addEventListener("input", function(){
        fullNameInput.value = person.setFullName(fullNameInput.value)
        surnameInput.value = person.getSurname()
        nameInput.value = person.getName()
        fatherNameInput.value = person.getFatherName()
    })
    }

    const b = createPersonClosure("Anna", "Ivanova");
    b.setAge(12);
    b.setFullName("Petrova Anna Mykolayivna");

    const parentElement = document.getElementById('div');
    personForm(parentElement, b);
}