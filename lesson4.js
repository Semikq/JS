{
    const number = prompt()
    if(!isNaN(number)){
        if(number % 2 === 0){
        console.log("The number is even")
        }else{
        console.log("The number is not even")
    }
    }else{
        console.log("This is a string")
    }
}

{
    const text = prompt("Enter your sentence")
    if(!(text.includes("word"))){
    console.log("All is well")
    }else{
    console.log("An incorrect word was found")
    }
}

{
    const one = confirm("Is the weather good today?")
    const two = confirm("Are you OK?")
    const three = confirm("Did you have a good day?")
    console.log(one,two,three)
}

{
    const gender = confirm("If you are male, click Yes, if you are female, click No.")
    if(gender === true){
    alert("You are a man")
    }else{
    alert("You are a woman")
    }
}

{
    const size = prompt()
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

{
    confirm("If you are male, click Yes, if you are female, click No.")?alert("You are a man"):alert("You are a woman")
}

{
// bool type cast
!!2 //True
!!0 //False
!!1 //True
// or
2 || 1 // 2
2 || 0 // 2
//and
2 && 1 //1
1 && 2 //2
0 && 2 //0 
// or and and difference
0 || 1 || 2 //1
0 && 1 && 2 //0
2 || 1 || 0 //2
2 && 1 && 0 //0
confirm('left') || confirm('right') //If OK, the program ends, if canceled, then correct
confirm('left') && confirm('right') //If ok - correct, if you cancel, then nothing
//null, undefined, so on
null || 2 //2
undefined && 1 //undefined
alert("Hello") && confirm('Are you sexy?'); //Hello
alert("Hello") || confirm('Are you drunk?'); //Hello, then select an answer in the confirm
//brackets and complex expressions
(undefined || 2) && (3 || 0) //3
(2 && 1) || (null && 0) //1
(2 > 1) && "greater" //"greater"
(2 < 1) && null //false
null && (2 < 1) //null
// ternary operator
1 ? "one" : "not one" //one
0 ? "zero" : "not zero" //not zero
"0" ? "\"zero\"" : "not `zero`" //zero
parseInt("0") ? 'true' : 'false' //False
("" || 2) && (3 || "3.5") || (4 && 5) //3
(-1 + 1) && "zero" //0
"-1" + 1 && "oups" //"oups"
(typeof null === 'object') ? "null is object" : "null is null" //"null is object"
// ternary && ||
Math.random() < 0.5 && 'less' || 'more' //0.6 < 0.5 =  'more', 0.4 < 0.5 = 'less'
let b = (a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a //0.6 < 0.5 = 'less: '+a
//in for array
[2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found' //prime
}

{
    const age = prompt() || null
    const result = age ? 2024 - age : null
    alert(result ? "Date of birth " + result : "You have not entered anything")
}

{
    confirm("Shopping?") || alert("You are crazy")
}

{
    if(confirm("Shopping?")){
        alert("Come on")
    }else{
        alert("You are crazy")
    }
}

{
    const name = prompt() || "Ivan"
    const surname = prompt() || "Ivanov"
    const fatherName = prompt() || "Ivanovich"
    console.log(name,surname,fatherName)
}

{
    let name = prompt() 
    let surname = prompt() 
    let fatherName = prompt()
    if(!name.trim()){
        name = "Ivan"
    }
    if(!surname.trim()){
        surname = "Ivanov"
    }
    if(!fatherName.trim()){
        fatherName = "Ivanovich"
    }
    console.log(name, surname, fatherName)
}

{
    const login = prompt("Enter your login")
        if(login === "admin"){
            const password = prompt("Enter your password")
            if(password === "qwerty"){
                alert("Welcome")
            }else{
                alert("Invalid password")
            }
        }else{
            alert("Invalid login")
        }
}

{
    const buyOrSell = confirm("buy or sell")
        if(buyOrSell){
            const currency = prompt("Choose the currency you want to buy for UAH. Choice between: usd or eur")
            if(currency.toLowerCase() === "usd"){
                const rate = prompt("Exchange rate 1 Usd = 34 UAH\nHow much do you want to buy?")
                if(!isNaN(rate) && rate !== null && rate.trim() !== ""){
                    const result = rate * 34
                    alert(result)
                }else{
                    alert("You entered wrong numbers or nothing")
                }
            }else if(currency.toLowerCase() === "eur"){
                const rate = prompt("Exchange rate 1 Eur = 38 UAH\nHow much do you want to buy?")
                if(!isNaN(rate) && rate !== null && rate.trim() !== ""){
                    const result = rate * 38
                    alert(result)
                }else{
                    alert("You entered wrong numbers or nothing")
                }
            }else{
                alert("There is no such currency")
            }
        }else{
            const currency = prompt("Choose the currency you want to sell to receive UAH.  Choice between: usd or eur")
            if(currency.toLowerCase() === "usd"){
                const rate = prompt("Exchange rate 1 Usd = 38 UAH\nDo you want to sell?")
                if(!isNaN(rate) && rate !== null && rate.trim() !== ""){
                    const result = rate * 38
                    alert(result)
                }else{
                    alert("You entered wrong numbers or nothing")
                }
            }else if(currency.toLowerCase() === "eur"){
                const rate = prompt("Exchange rate 1 Eur = 42 UAH\nDo you want to sell?")
                if(!isNaN(rate) && rate !== null && rate.trim() !== ""){
                    const result = rate * 42
                    alert(result)
                }else{
                    alert("You entered wrong numbers or nothing")
                }
            }else{
                alert("There is no such currency")
            }
        }
}

{
    const user = prompt()
        let robot = Math.ceil(Math.random() * 3)
        if(robot === 1){
            robot = "Stone"
        }else if(robot === 2){
            robot = "Paper"
        }else if(robot === 3){
            robot = "Scissors"
        }

        if(user === robot){
            alert("Draw")
        }else if((user === "Stone" && robot === "Scissors") ||(user === "Scissors" && robot === "Paper") ||(user === "Paper" && robot === "Stone")){
            alert("You win")
        }else{
            alert("Robot win")
        }
}

{
    const user = prompt()
        let robot = Math.ceil(Math.random() * 3)
        robot = (robot === 1) ? "Stone" : robot === 2 ? "Paper" : "Scissors"
        const result = (user === robot) ? "Draw" : ((user === "Stone" && robot === "Scissors") || (user === "Scissors" && robot === "Paper") || (user === "Paper" && robot === "Stone")) ? "You win" : "Robot win";
        alert(result)
}