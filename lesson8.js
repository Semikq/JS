let all = prompt()
if(all === "blocks"){
let a = 10
{
    let b = 20
    {
        let c = 30
        // What will be the values of the variables here a, b, c, d
        // here a = 10, b = 20, c = 30, d = nothing
        b++
        a *= 10
    }
    {
        let c = 50
        // What will be the values of the variables here a, b, c, d
        // here a = 100, b = 21, c = 50, d = nothing
        b += 500
    }
    {
        const a = 100500
        const d = "value"
        // What will be the values of the variables here a, b, c, d
        // here a = 100500, b = 521, c = nothing, d = "value"
        {
            let a = -50
            b     = 1000
            // What will be the values of the variables here a, b, c, d
            // here a = -50, b = 1000, c = nothing, d = "value"
        }
        // What will be the values of the variables here a, b, c, d
        // here a = 100500, b = 1000, c = nothing, d = "value"
    }
    // What will be the values of the variables here a, b, c, d
    // here a = 100, b = 1000, c = nothing, d = nothing
}
// What will be the values of the variables here a, b, c, d
// here a = 100, b = nothing, c = nothing, d = nothing
}

if(all === "comparison if"){
var age = + prompt ("How old are you?");
if (age < 0) 
    alert("Haven't you been born yet?");
else if (age <= 18) 
    alert("Schoolboy");
else if (age <= 30)
    alert("Youth");
else if (age <= 45)
    alert("Maturity");
else if (age <= 60)
    alert("Sunset");
else if (age >= 60) 
    alert("How is the pension?");
else 
    alert("Or a cyborg, or KERNESS");
}

if(all === "switch: sizes"){
const size = prompt("Enter clothing size Italian:");
switch (size) {
    case "38":
        alert("American size - S");
        break;
    case "40":
        alert("American size - M");
        break;
    case "44":
        alert("American size - L");
        break;
    case "48":
        alert("American size - XL");
        break;
    case "52":
        alert("American size - XXL");
        break;
    default:
        alert('There is no such thing');
}
}

if(all === "switch: if"){
let color = prompt("Enter a color","");
if (color === "red"){
     document.write("<div style='background-color: red;'>red</div>");
     document.write("<div style='background-color: black; color: white;'>black</div>");
}else if (color === "black"){
     document.write("<div style='background-color: black; color: white;'>black</div>");
}
else if (color === "blue"){
     document.write("<div style='background-color: blue;'>blue</div>");
     document.write("<div style='background-color: green;'>green</div>");
}
else if (color === "green"){
     document.write("<div style='background-color: green;'>green</div>");
}
else {
     document.write("<div style='background-color: gray;'>I do not understand</div>");
}
}

if(all === "noswitch"){
const noSwitch = (key, cases, defaultKey='default') => {
    if(cases[key]){
        cases[key]()
    }else{
        cases[defaultKey]()
    }
}
const drink = prompt("What do you like to drink?");
noSwitch(drink, {
    water: () => console.log('The healthiest choice!'),
    tea: function () {
        console.log("Tasty and useful thing. Don't overdo it with sugar");
    },
    "beer": () => console.log('Good in summer, but in moderation'),
    whiskey: function () {
        console.log("But you, father, are an esthete! Don't forget the ice and the cigar");
    },
    default: () => console.log("that I didn't understand"),
}) ;
}

if(all === "closure calc"){
fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        let buttonContainer = document.getElementById('buttonContainer');
        for (let currency in data.rates) {
            let currencyButton = document.createElement('button');
            currencyButton.innerText = currency;
            currencyButton.onclick = () => {
                let amount = prompt(`Enter the amount in ${currency}:`);

                let usdAmount = amount * data.rates[currency];

                alert(`${amount} ${currency} is approximately ${usdAmount.toFixed(2)} USD`);
            };
            buttonContainer.append(currencyButton);
        }
    })
}

if(all === "closure calc 2"){
fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
           let form = document.getElementById("from")
           let to = document.getElementById("to")
           const amount = document.getElementById('amount');
           for(let a in data.rates){
            let option = document.createElement("option");
            option.text = a;
            form.append(option);

            let optionto = document.createElement("option");
            optionto.text = a;
           to.append(optionto);
           }

           const updateConversion = () => {
            const fromCurrency = from.value;
            const toCurrency = to.value;
            const conversionRate = data.rates[toCurrency] / data.rates[fromCurrency];

            document.getElementById('rate').innerHTML = `Exchange rate: 1 ${fromCurrency} = ${conversionRate} ${toCurrency}`;

            const resultDiv = document.getElementById('result');
            const amountValue = amount.value;
            const resultAmount = amountValue * conversionRate;
            resultDiv.innerHTML = `Result: ${resultAmount.toFixed(2)} ${toCurrency}`;
        };

        from.addEventListener('change', updateConversion);
        to.addEventListener('change', updateConversion);
        amount.addEventListener('input', updateConversion);
    });
}

if(all === "countries and cities"){
fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
  .then(res => res.json())
  .then(data => {
    const countriesSelect = document.getElementById('countries');
    for(let a in data){
        let option = document.createElement("option")
        option.text = a
        countriesSelect.append(option)
    }
    countriesSelect.addEventListener('change', (event) => {
        const selectedCountry = event.target.value;
        const citiesSelect = document.getElementById('cities');
      
        citiesSelect.innerHTML = '';
      
        if (selectedCountry) {
          const cities = data[selectedCountry];
          for (let i = 0; i < cities.length; i++) {
            const city = cities[i];
            const option = new Option(city, city);
            citiesSelect.append(option);
          }
        }
    });
  })
}