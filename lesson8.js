{
    let a = 10
    {
        let b = 20
        {
            let c = 30
            b++
            a *= 10
            //a = 100,b = 21,c = 30,d = undefined
        }
        {
            let c = 50
            b += 500
            //a = 100, b = 521,c = 50,d = undefined
        }
        {
            const a = 100500
            const d = "value"
            //a = 100500, b = 521,c = undefined,d = "value"
            {
                let a = -50
                b     = 1000
                //a = -50, b = 1000,c = undefined,d = "value"
            }
            //a = 100500, b = 1000,c = undefined,d = "value"
        }
        //a = 10, b = 1000,c = undefined,d = undefined
    }
    //a = 10, b = undefined,c = undefined,d = undefined    
}

{
    var age = +prompt("How old are you?");
    if(age <= 0 || isNaN(age)) alert("Error")
    else if (age <= 18) alert("schoolchild")
    else if (age <= 30) alert("youth")
    else if (age <= 45) alert("maturity")
    else if (age <= 60) alert("sunset years")
    else if (age >= 60 && age <= 100) alert("how's retirement?")
    else if(age >= 100) alert("Are you a cyborg or KERNESS?")
}

{
    const size = +prompt("Enter your clothing size")
    switch (size){
        case 38: alert("S"); break;
        case 40: alert("M"); break;
        case 44: alert("L"); break;
        case 48: alert("XL"); break;
        case 52: alert("XXL"); break;
        default: alert("This size does not exist");
    }
}

{
    const color = prompt("Enter color").toLowerCase();
        if(color === "red"){
            document.write("<div style='background-color: red;'>red</div>");
            document.write("<div style='background-color: black; color: white;'>black</div>");
        }else if(color === "black"){
            document.write("<div style='background-color: black; color: white;'>black</div>");
        }else if(color === "blue"){
            document.write("<div style='background-color: blue;'>blue</div>");
            document.write("<div style='background-color: green;'>green</div>");
        }else if(color === "green"){
            document.write("<div style='background-color: green;'>green</div>");
        }else{
            document.write("<div style='background-color: gray;'>I don't understand</div>");
        }
}

{
    const noSwitch = (key, cases, defaultKey='default') => {
        cases[key]? cases[key](): cases[defaultKey]()
    }
    const drink = prompt("What do you like to drink?");
    noSwitch(drink, {
        water: () => console.log('Healthiest choice!'),
        tea: () => console.log('Tasty and healthy option. Don\'t overdo it with sugar.'),
        beer: () => console.log('Great for summer, and in moderation.'),
        whisky: function() { console.log('You, my friend, have taste! Don\'t forget the ice and cigar.') },
        default: () => console.log('Sorry, I didn\'t get that.')
    })
}

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
        for(const element in data.rates){
            const button = document.createElement("button")
            button.innerText = element
            button.onclick = () => {
                console.log((+prompt() * data.rates[element]).toFixed(2))
            }
            document.body.append(button)
        }
       })
}

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
        const from = document.createElement("select")
        const to = document.createElement("select")
        const rate = document.createElement("div")
        const input = document.createElement("input")
        const result = document.createElement("div")
        for(const element in data.rates){
            const optionOne = document.createElement("option")
            const optionTwo = document.createElement("option")
            optionOne.innerText = element
            optionOne.value = data.rates[element]
            optionTwo.innerText = element
            optionTwo.value = data.rates[element]
            from.append(optionOne)
            to.append(optionTwo)
        }

        const update = () => {
            rate.innerText = (from.value / to.value).toFixed(2)
            result.innerText = ((from.value / to.value) * input.value).toFixed(2)
        }

        from.addEventListener("change", update)
        to.addEventListener("change", update)
        input.addEventListener("input", update)

        document.body.append(from, to, rate, input, result)
        })
}

{
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
    .then(data => {
       const selectOne = document.createElement("select")
       const selectTwo = document.createElement("select")
       for(const element in data){
           const option = document.createElement("option")
           option.innerHTML = element
           selectOne.append(option)
       }
       
       const сity = () => {
           selectTwo.innerText = ""
           for(const element of data[selectOne.value]){
               const option = document.createElement("option")
               option.innerText = element
               selectTwo.append(option)
           }
       }
       сity()
       selectOne.onchange = сity
       document.body.append(selectOne, selectTwo)
    })
}