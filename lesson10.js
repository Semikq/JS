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
                return `${this.name} ${this.surname} ${this.fatherName || ""}`
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
        let age = 0
        let fatherName = ""

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
            if(typeof newName === "string" && newName.slice(0,1).toUpperCase() === newName.slice(0,1) && newName.slice(1).toLowerCase() === newName.slice(1)){
                name = newName
                return name
            }else{
                return name
            }
        }

        function setSurname(newSurname){
            if(typeof news === "string" && newSurname.slice(0,1).toUpperCase() === newSurname.slice(0,1) && newSurname.slice(1).toLowerCase() === newSurname.slice(1)){
                surname = newSurname
                return surname
            }else{
                return surname
            }
        }

        function setFatherName(newFatherName){
            if(typeof newFatherName === "string" && newFatherName.slice(0,1).toUpperCase() === newFatherName.slice(0,1) && newFatherName.slice(1).toLowerCase() === newFatherName.slice(1)){
                fatherName = newFatherName
                return fatherName
            }else{
                return fatherName
            }
        }

        function setAge(newAge){
            if(typeof newAge === "number" && newAge >= 0 && newAge <= 100){
                age = newAge
                return age
            }else{
                return age
            }
        }

        function setFullName(newFullName){
            let arr = newFullName.split(" ")
            if(arr.length === 3){
                surname = setSurname(arr[0])
                name = setName(arr[1])
                fatherName = setFatherName(arr[2])
                return surname, name, fatherName
            }else{
                return surname, name, fatherName
            }
        }
        return {getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setAge, setFatherName, setFullName}
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
                return `${this.name} ${this.surname} ${this.fatherName || ""}`
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
          if(typeof newName === "string" && newName.slice(0,1).toUpperCase() === newName.slice(0,1) && newName.slice(1).toLowerCase() === newName.slice(1)){
              name = newName
              return name
          }else{
              return name
          }
      }

      function setSurname(newSurname){
          if(typeof news === "string" && newSurname.slice(0,1).toUpperCase() === newSurname.slice(0,1) && newSurname.slice(1).toLowerCase() === newSurname.slice(1)){
              surname = newSurname
              return surname
          }else{
              return surname
          }
      }

      function setFatherName(newFatherName){
          if(typeof newFatherName === "string" && newFatherName.slice(0,1).toUpperCase() === newFatherName.slice(0,1) && newFatherName.slice(1).toLowerCase() === newFatherName.slice(1)){
              fatherName = newFatherName
              return fatherName
          }else{
              return fatherName
          }
      }

      function setAge(newAge){
          if(typeof newAge === "number" && newAge >= 0 && newAge <= 100){
              age = newAge
              return age
          }else{
              return age
          }
      }

      function setFullName(newFullName){
          let arr = newFullName.split(" ")
          if(arr.length === 3){
              surname = setSurname(arr[0])
              name = setName(arr[1])
              fatherName = setFatherName(arr[2])
              return surname, name, fatherName
          }else{
              return surname, name, fatherName
          }
      }
      return {getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setAge, setFatherName, setFullName}
  }

    const a = createPersonClosureDestruct(createPerson("Vasya", "Pupkin"))
    const b = createPersonClosureDestruct({name: 'Nicholas', age: 75})
    console.log(a.getFullName())
    console.log(b.getFullName())
}

{
    function isSorted(...arr){
        if(arr.length >= 2){
            for(let i = 0;i <= arr.length; i++){
                if(arr[i] >= arr[i + 1]){
                    return false
                }else if(typeof arr[i] === "string"){
                    return "Please number"
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
    function isSorted(){
        const arr = []
        while(true){
            const num = prompt("Enter number please")
            if(Number(num)){
                arr.push(num)
                continue;
            }else if(num === null || num === ""){
                break;
            }else{
                alert("Please number")
                continue;
            }
        }
        if(arr.length >= 2){
                for(let i = 0;i <= arr.length; i++){
                    if(arr[i] >= arr[i + 1]){
                        return false
                    }
                }
                return true
            }else{
                return ""
        }
    }
    console.log(isSorted())
}

{
    function createPersonClosure(name, surname){
        let age = 0
        let fatherName = ""

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
            if(typeof newName === "string" && newName.slice(0,1).toUpperCase() === newName.slice(0,1) && newName.slice(1).toLowerCase() === newName.slice(1)){
                name = newName
                return name
            }else{
                return name
            }
        }

        function setSurname(newSurname){
            if(typeof newSurname === "string" && newSurname.slice(0,1).toUpperCase() === newSurname.slice(0,1) && newSurname.slice(1).toLowerCase() === newSurname.slice(1)){
                surname = newSurname
                return surname
            }else{
                return surname
            }
        }

        function setFatherName(newFatherName){
            if(typeof newFatherName === "string" && newFatherName.slice(0,1).toUpperCase() === newFatherName.slice(0,1) && newFatherName.slice(1).toLowerCase() === newFatherName.slice(1)){
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

        function setFullName(newFullName){
            let arr = newFullName.split(" ")
            if(arr.length === 3){
                surname = setSurname(arr[0])
                name = setName(arr[1])
                fatherName = setFatherName(arr[2])
                return getFullName()
            }else{
                return getFullName()
            }
        }
        return {getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setAge, setFatherName, setFullName}
    }

    function personForm(parent, person){
        const inputSurname = document.createElement("input")
        const inputName = document.createElement("input")
        const inputFatherName = document.createElement("input")
        const inputAge = document.createElement("input")
        const inputFullName = document.createElement("input")

        inputSurname.value = person.getSurname()
        inputName.value = person.getName()
        inputFatherName.value = person.getFatherName()
        inputAge.value = person.getAge()
        inputFullName.value = person.getFullName()

        parent.append(inputSurname, inputName, inputFatherName, inputAge, inputFullName)

        inputSurname.addEventListener("input", function(){
            if(person.setSurname(inputSurname.value)){
                inputSurname.value = person.getSurname()
                inputFullName.value = person.getFullName()
            }
        })

        inputName.addEventListener("input", function(){
            if(person.setName(inputName.value)){
                inputName.value = person.getName()
                inputFullName.value = person.getFullName()
            }
        })

        inputFatherName.addEventListener("input", function(){
            if(person.setFatherName(inputFatherName.value)){
                inputFatherName.value = person.getFatherName()
                inputFullName.value = person.getFullName()
            }
        })

        inputAge.addEventListener("input", function(){
            if(!isNaN(inputAge.value)){
                let result = person.setAge(inputAge.value)
                inputAge.value = result
            }else{
                inputAge.value = ""
            }
        })

        inputFullName.addEventListener("input", function(){
            inputFullName.value = person.setFullName(inputFullName.value)
            inputSurname.value = person.getSurname()
            inputName.value = person.getName()
            inputFatherName.value = person.getFatherName()
        })
    }

    const b = createPersonClosure("Anna", "Ivanova");
    b.setAge(12);
    b.setFullName("Petrova Anna Mykolayivna");

    const parentElement = document.getElementById('div');
    personForm(parentElement, b);
}