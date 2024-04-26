{
function createJSON(DOM, file){
    let table = document.createElement("table")
    table.style.border = "solid 1px black"
    for(let key in file){
        let tr = document.createElement("tr")
        let keyTd = document.createElement("td")
        let valueTd = document.createElement("td")

        keyTd.innerText = key
        keyTd.style.border = "solid 1px black"
        valueTd.innerText = file[key]
        valueTd.style.border = "solid 1px black"

        tr.append(keyTd)
        tr.append(valueTd)
        table.append(tr)
    }
    DOM.append(table)
}

fetch('https://worldtimeapi.org/api/ip')
.then(res => res.json())
.then(file => createJSON(document.body, file))
}

{
function Luke(DOM, data) {
  let table = document.createElement("table");
  table.style.border = "solid 1px black";
  DOM.innerText = ""
  for (let key in data) {
    let tr = document.createElement("tr");

    let tdKey = document.createElement('td');
    tdKey.innerText = key;
    tdKey.style.border = "solid 1px black";
    tr.appendChild(tdKey);

    let tdValue = document.createElement("td");
    tdValue.innerText = data[key];
    tdValue.style.border = "solid 1px black";
    tr.appendChild(tdValue);

    table.appendChild(tr);

    if (typeof data[key] === "string" && data[key].includes(`https://worldtimeapi.org/api/ip`)) {
      let button = document.createElement("button");
      button.innerText = "click";
      tr.appendChild(button);
      button.addEventListener("click", () => {
        fetch(data[key])
          .then(result => result.json())
          .then(data => Luke(DOM, data));
      });
    }

    if(Array.isArray(data[key])){
      for(let element of data[key]){
        if (typeof element === "string" && element.includes(`https://worldtimeapi.org/api/ip`)) {
      let button = document.createElement("button");
      button.innerText = "click";
      tr.appendChild(button);
      button.addEventListener("click", () => {
        fetch(element)
          .then(result => result.json())
          .then(data => Luke(DOM, data));
      });
    }
    }
  }
  }
  DOM.appendChild(table);
}

fetch(`https://worldtimeapi.org/api/ip`)
  .then(result => result.json())
  .then(luke => Luke(document.body, luke));
}

{
let url = `https://worldtimeapi.org/api/ip`
let ms = 1000

function link(url){
    return fetch(url).then(result => result.json())
}

function check(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

Promise.race([link(url), check(ms)]).then(result => console.log(result))
}

{
function confirmPromise(text) {
    return new Promise((fulfilled, reject) => {
        let result = confirm(text);
        if (result) {
            fulfilled();
        } else {
            reject();
        }
    });
}

confirmPromise('Проміси це складно?')
    .then(() => console.log('не так вже й складно'))
    .catch(() => console.log('respect за посидючість і уважність'));
}

{
function confirmPromise(text) {
    return new Promise((fulfilled, reject) => {
        let result = prompt(text);
        if (result) {
            fulfilled();
        } else {
            reject();
        }
    });
}

confirmPromise('Проміси це складно?')
    .then(() => console.log('не так вже й складно'))
    .catch(() => console.log('respect за посидючість і уважність'));
}

{
function LoginForm(parent, open) {
    const input = document.createElement("input");
    input.type = open ? "text" : "password";

    this.setValue = function(text) {
        input.value = text;
    };

    this.getValue = function() {
        return input.value;
    };

    this.setOpen = function(isOpen) {
        input.type = isOpen ? "text" : "password";
        if (this.onOpenChange) {
            this.onOpenChange(isOpen);
        }
    };

    this.getOpen = function() {
        return input.type === "text";
    };

    input.oninput = () => {
        if (this.onChange) {
            this.onChange();
        }
    };

    parent.appendChild(input);
}

function loginPromise(parent) {
    function executor(resolve, reject) {
        const form = document.createElement("form");
        const loginInput = new LoginForm(form, true);
        const passwordInput = new LoginForm(form, false);
        const button = document.createElement("button");
        button.innerText = "...Login";
        button.disabled = true
        form.appendChild(button);

        function check(){
            if(loginInput.getValue() && passwordInput.getValue()){
                button.disabled = false
            }
        }

        button.addEventListener("click", () => {
            event.preventDefault();
            resolve({
                login: loginInput.getValue(),
                password: passwordInput.getValue()
            });
        });

        loginInput.onChange = passwordInput.onChange = check
        parent.appendChild(form);
    }
    return new Promise(executor);
}
loginPromise(document.body).then(({ login, password }) => {
    console.log(`Ви ввели ${login} та ${password}`);
});
}