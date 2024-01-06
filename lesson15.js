//fetch basic
// function Luke(DOM, data){
//   let table = document.createElement("table")
//   table.style.border = "solid 1px black"

//   for(let key in data){
//     let tr = document.createElement("tr")

//     let tdKey = document.createElement('td')
//     tdKey.innerText = key
//     tdKey.style.border = "solid 1px black"
//     tr.appendChild(tdKey)

//     let tdValue = document.createElement("td")
//     tdValue.innerText = data[key]
//     tdValue.style.border = "solid 1px black"
//     tr.appendChild(tdValue)

//     table.appendChild(tr)
//   }
//   DOM.appendChild(table)
// }

// fetch('https://swapi.dev/api/people/1/')
// .then(result => result.json())
// .then(luke => Luke(document.body, luke))


//fetch improved
// function Luke(DOM, data) {
//   let table = document.createElement("table");
//   table.style.border = "solid 1px black";
//   DOM.innerText = ""
//   for (let key in data) {
//     let tr = document.createElement("tr");

//     let tdKey = document.createElement('td');
//     tdKey.innerText = key;
//     tdKey.style.border = "solid 1px black";
//     tr.appendChild(tdKey);

//     let tdValue = document.createElement("td");
//     tdValue.innerText = data[key];
//     tdValue.style.border = "solid 1px black";
//     tr.appendChild(tdValue);

//     table.appendChild(tr);

//     if (typeof data[key] === "string" && data[key].includes(`https://swapi.dev/api/`)) {
//       let button = document.createElement("button");
//       button.innerText = "click";
//       tr.appendChild(button);
//       button.addEventListener("click", () => {
//         fetch(data[key])
//           .then(result => result.json())
//           .then(data => Luke(DOM, data));
//       });
//     }

//     if(Array.isArray(data[key])){
//       for(let element of data[key]){
//         if (typeof element === "string" && element.includes(`https://swapi.dev/api/`)) {
//       let button = document.createElement("button");
//       button.innerText = "click";
//       tr.appendChild(button);
//       button.addEventListener("click", () => {
//         fetch(element)
//           .then(result => result.json())
//           .then(data => Luke(DOM, data));
//       });
//     }
//     }
//   }
//   }
//   DOM.appendChild(table);
// }

// fetch(`https://swapi.dev/api/people/1/`)
//   .then(result => result.json())
//   .then(luke => Luke(document.body, luke));


//race
// let url = `https://swapi.dev/api/people/1/`
// let ms = 1000

// function swapi(url){
//   return fetch(url).then(result => result.json())
// }

// function delay(ms){
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// Promise.race([swapi(url), delay(ms)])
// .then(result => console.log(result))


//Promisify: confirm
// function confirmPromise(text){
//   return new Promise((resolve, reject) => {
//     let result = confirm(text)
//     if(result){
//       resolve()
//     }else{
//       reject()
//     }
//   })
// }

// confirmPromise('Проміси це складно?').then(() => console.log('не так вже й складно'),
//                                          () => console.log('respect за посидючість і уважність'))


//Promisify: prompt
// function promptPromise(text){
//   return new Promise((resolve, reject) => {
//     let result = prompt(text)
//     if(result){
//       resolve(result)
//     }else{
//       reject()
//     }
//     let name = result
//   })
// }
// promptPromise("Як тебе звуть?").then(name => console.log(`Тебе звуть ${name}`),
//                                     () => console.log('Ну навіщо морозитися, нормально ж спілкувалися'))


//Promisify: LoginForm
// function Password(parent, open) {
//   let password = document.createElement("input");
//   parent.appendChild(password)
//   password.type = open ? 'text' : 'password'

//   this.setStyle = function (style) {
//       for (const property in style) {
//           password.style[property] = style[property]
//       }
//   };

//   this.setValue = function (value) {
//       password.value = value
//       triggerChangeCallback()
//   };

//   this.getValue = function () {
//       return password.value
//   };

//   this.setOpen = function (isOpen) {
//       password.type = isOpen ? 'text' : 'password'
//       button.textContent = isOpen ? 'Hide' : 'Show'
//       if (typeof this.onOpenChange === 'function') {
//           this.onOpenChange(isOpen)
//       }
//   };

//   this.getOpen = function () {
//       return password.type === 'text'
//   };

//   this.setOnChangeCallback = function (callback) {
//       this.onChange = callback
//   };

//   this.setOnOpenChangeCallback = function (callback) {
//       this.onOpenChange = callback
//   };

//   function triggerChangeCallback() {
//       if (typeof this.onChange === 'function') {
//           this.onChange(password.value)
//       }
//   }

//   password.addEventListener('input', triggerChangeCallback.bind(this))
// }

// function LoginForm(parent) {
//   let login = new Password(parent, true)
//   let passwordField = new Password(parent, true)

//   let button = document.createElement("button")
//   parent.appendChild(button)
//   button.innerHTML = "Enter"
//   button.disabled = true

//   function check() {
//       button.disabled = !login.getValue() || !passwordField.getValue()
//   }

//   let resolveFunction;

//   button.addEventListener("click", function () {
//       resolveFunction({
//           login: login.getValue(),
//           password: passwordField.getValue()
//       });
//   });

//   login.setOnChangeCallback(check)
//   passwordField.setOnChangeCallback(check)

//   const executor = (resolve, reject) => {
//       resolveFunction = resolve
//   };

//   return new Promise(executor)
// }

// function loginPromise(parent) {
//   return new LoginForm(parent)
// }
// loginPromise(document.body).then(({ login, password }) => console.log(`Ви ввели ${login} та ${password}`))