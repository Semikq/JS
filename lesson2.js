{
    var a = 5;  
    var b, c;
    b = (a * 5);  
    b = (c = (b / 2)); 
    console.log(b)
}


{
    const age = prompt("Please enter age")
    if(!isNaN(age) && age >= 0 && age <= 100){
        const year = 2024 - age
        console.log(`Your year: ${year}`)
    }else{
        console.log("ERROR")
    }
}


{
    const choice = prompt("Enter 'cel' for Celsius to Fahrenheit or 'far' for Fahrenheit to Celsius:");
    if (choice.toLowerCase() === "cel") {
        const celsius = prompt("Enter temperature in Celsius:");
        if (!isNaN(celsius)) {
            const result = (celsius * 9/5) + 32;
            console.log("Temperature in Fahrenheit:", result);
        } else {
            console.log("ERROR: Please enter a valid number for Celsius.");
        }
    } else if (choice.toLowerCase() === "far") {
        const fahrenheit = prompt("Enter temperature in Fahrenheit:");
        if (!isNaN(fahrenheit)) {
            const result = (5/9) * (fahrenheit - 32);
            console.log("Temperature in Celsius:", Math.floor(result));
        } else {
            console.log("ERROR: Please enter a valid number for Fahrenheit.");
        }
    } else {
        console.log("ERROR: Invalid choice. Please enter 'cel' or 'far'.");
    }
}


{
    const num1 = prompt()
    const num2 = prompt()
    const result = num1 / num2
    console.log(Math.floor(result))
}


{
    const dollar = prompt("Enter the amount in dollars:");
    const rate = 40;
    const result = rate * dollar;
    console.log("Converted amount:", result);
}


{
    let red = prompt("Enter red")
    let green = prompt("Enter green")
    let blue = prompt("Enter blue")
    red = (+red).toString(16).padStart(2,"0")
    green = (+green).toString(16).padStart(2,"0")
    blue = (+blue).toString(16).padStart(2,"0")
    console.log(`#${red}${green}${blue}`)
}


{
    const floors = +prompt('Enter the number of floors:');
    const apartmentsPerFloor = +prompt('Enter the number of apartments per floor:');
    const apartmentNumber = +prompt('Enter the apartment number:');
    const totalApartments = floors * apartmentsPerFloor;
    const entrance = Math.ceil(apartmentNumber / totalApartments);
    const floor = Math.ceil((apartmentNumber % totalApartments) / apartmentsPerFloor);
    alert("Apartment - " + apartmentNumber + " is located in entrance - " + entrance + ", on floor - " + floor + ".");
}

