{
     const km = prompt("Enter kilometers:"); 
    const days = prompt("Enter number of days:"); 
    if(km < 0 || days < 0) {
        console.log("Invalid input. Please enter positive numbers.");
    }else if (!isNaN(km) && !isNaN(days)) {
        const result = km * days;
        console.log("Result:", result);
    }else {
        console.log("Invalid input. Please enter valid numbers.");
    }
}
{
    const credentials = {
        login: 'admin',
        password: 'qwerty',
    };

    let inputLogin = document.createElement("input");
    inputLogin.placeholder = "Enter login";
    document.body.append(inputLogin);

    let inputPassword = document.createElement("input");
    inputPassword.placeholder = "Enter password";
    inputPassword.type = "password";  // Make it a password input
    document.body.append(inputPassword);

    let button = document.createElement("button");
    button.textContent = "Click";
    document.body.append(button);

    button.addEventListener("click", function () {
        let login = inputLogin.value;
        let password = inputPassword.value;

        if (login === credentials.login && password === credentials.password) {
            alert("Welcome");
        } else {
            alert("Invalid login or password");
        }
    });
}