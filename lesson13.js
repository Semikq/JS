//Person Constructor
// function Person(name, surname){
//         this.name = name,
//         this.surname = surname,
//         this.getFullName = function(){
//             return `${this.name} ${this.surname} ${this.fatherName? this.fatherName + " ":""}`
//         }
// }

// const a = new Person("Vasya", "Pupkin")
// const b = new Person("Anna", "Ivanova")
// const c = new Person("Elizaveta", "Petrova")

// console.log(a.getFullName())
// a.fatherName = 'Ivanovych'    
// console.log(a.getFullName())

// console.log(b.getFullName())


//Person Prototype
// function Person(name, surname){
//     this.name = name,
//     this.surname = surname
// }

// Person.prototype.getFullName = function(){
//     return `${this.name} ${this.surname} ${this.fatherName? this.fatherName + " ":""}`
// }

// const a = new Person("Vasya", "Pupkin")
// const b = new Person("Anna", "Ivanova")
// const c = new Person("Elizaveta", "Petrova")

// console.log(a.getFullName())
// a.fatherName = 'Ivanovych'    
// console.log(a.getFullName())

// console.log(b.getFullName())


//Store
// function Store(reducer){
//     let state
//     let listeners = []

//     function getState(){
//         return state
//     }

//     function dispatch(action){
//         let newState = reducer(state, action)
//         if(newState !== state){
//             state = newState
//             for(let listener of listeners){
//                 listener()
//             }
//             document.title = `cash: ${state.cash}`
//         }
//     }

//     dispatch({})

//     function subscribe(listener){
//         listeners.push(listener)
//         return () => {
//             listeners = listeners.filter(l => l !== listener)
//         }
//     }

//     return{
//         getState,
//         dispatch,
//         subscribe
//     }
// }

// let goods = {
//     beer: {number: 100, cost: 5},
//     kvass: {number: 100, cost: 10},
//     chips: {number: 100, cost: 8}
// }

// function reducer(state = {goods , cash: 0}, {what, howMany, money}){
//     if(!state){
//         return state
//     }
//     if(state.goods[what] && state.goods[what].cost >= howMany && money >= howMany * state.goods[what].cost){
//         return {
//             ...state,
//                 goods: {
//                     ...state.goods,
//                     [what]: {
//                     ...state.goods[what],
//                     number: state.goods[what].number - howMany
//                 }
//             },
//             cash: state.cash + howMany * state.goods[what].cost
//             };
//     }
//     return state
// }

// let state = new Store(reducer)

// let kiosk = document.getElementById("kiosk")
// let select = document.getElementById("select")
// let number = document.getElementById("number")
// let money = document.getElementById("money")
// let button = document.getElementById("button")

// for(let good in state.getState().goods){
//     let div = document.createElement("div")
//     div.innerText = `${good} ${state.getState().goods[good].number}, price: ${state.getState().goods[good].cost}`
//     kiosk.append(div)
// }

// for(let good in state.getState().goods){
//     let option = document.createElement("option")
//     option.innerText = good
//     select.append(option)
// }

// state.subscribe (function (){
//     kiosk.innerText = ""
//     for(let good in state.getState().goods){
//         let div = document.createElement("div")
//         div.innerText = `${good} ${state.getState().goods[good].number}, price: ${state.getState().goods[good].cost}`
//         kiosk.append(div)
//     }
// })

// button.addEventListener("click", function(){
//     let SSelect = select.value
//     let NNumber = parseInt(number.value)
//     let MMoney = parseInt(money.value)
//     state.dispatch({what: SSelect, howMany: NNumber, money: MMoney})
// })


//Password
// function Password(parent, open) {
//     let password = document.createElement("input");
//     let button = document.createElement("button");
//     parent.append(password);
//     parent.append(button);

//     button.textContent = open ? "Hide" : "Show";

//     this.setStyle = function (style) {
//         for (const property in style) {
//             password.style[property] = style[property];
//         }
//     };

//     this.setValue = function (value) {
//         password.value = value;
//         сallback();
//     };

//     this.getValue = function () {
//         return password.value;
//     };

//     this.setOpen = function (isOpen) {
//         password.type = isOpen ? 'text' : 'password';
//         button.textContent = isOpen ? 'Hide' : 'Show';
//         if (typeof this.onOpenChange) {
//             this.onOpenChange(isOpen);
//         }
//     };

//     this.getOpen = function () {
//         return password.type;
//     };

//     function сallback() {
//         if (typeof this.onChange === 'function') {
//             this.onChange(password.value);
//         }
//     }

//     button.addEventListener('click', () => {
//         this.setOpen(password.type === 'password');
//     });
// }

// let p = new Password(document.body, true);

// p.onChange = data => console.log('onChange:', data);
// p.onOpenChange = open => console.log('onOpenChange:', open);

// p.setValue('qwerty');
// console.log('getValue:', p.getValue());

// p.setOpen(false);
// console.log('getOpen:', p.getOpen());

// p.setStyle({
//     color: 'red',
//     backgroundColor: 'lightgray'
// });


//LoginForm
// function Password(parent, open) {
//     let password = document.createElement("input");
//     parent.appendChild(password);

//     password.type = open ? 'text' : 'password';

//     this.setStyle = function (style) {
//         for (const property in style) {
//             password.style[property] = style[property];
//         }
//     };

//     this.setValue = function (value) {
//         password.value = value;
//         triggerChangeCallback();
//     };

//     this.getValue = function () {
//         return password.value;
//     };

//     this.setOpen = function (isOpen) {
//         password.type = isOpen ? 'text' : 'password';
//         button.textContent = isOpen ? 'Hide' : 'Show';
//         if (typeof this.onOpenChange === 'function') {
//             this.onOpenChange(isOpen);
//         }
//     };

//     this.getOpen = function () {
//         return password.type === 'text';
//     };

//     this.setOnChangeCallback = function (callback) {
//         this.onChange = callback;
//     };

//     this.setOnOpenChangeCallback = function (callback) {
//         this.onOpenChange = callback;
//     };

//     function triggerChangeCallback() {
//         if (typeof this.onChange === 'function') {
//             this.onChange(password.value);
//         }
//     }

//     password.addEventListener('input', triggerChangeCallback.bind(this));

// }

// let form = document.createElement("form");
// document.body.appendChild(form);

// let login = new Password(form, true);
// let passwordField = new Password(form, true);

// let button = document.createElement("button");
// document.body.appendChild(button);
// button.innerHTML = "Enter";
// button.disabled = true;

// button.addEventListener("click", function () {
//     alert("Successfully");
// });

// login.setOnChangeCallback(check);
// passwordField.setOnChangeCallback(check);

// function check() {
//     button.disabled = !login.getValue() || !passwordField.getValue();
// }


//LoginForm Constructor
// function Password(parent, open) {
//     let password = document.createElement("input");
//     parent.appendChild(password);

//     password.type = open ? 'text' : 'password';

//     this.setStyle = function (style) {
//         for (const property in style) {
//             password.style[property] = style[property];
//         }
//     };

//     this.setValue = function (value) {
//         password.value = value;
//         triggerChangeCallback();
//     };

//     this.getValue = function () {
//         return password.value;
//     };

//     this.setOpen = function (isOpen) {
//         password.type = isOpen ? 'text' : 'password';
//         if (typeof this.onOpenChange === 'function') {
//             this.onOpenChange(isOpen);
//         }
//     };

//     this.getOpen = function () {
//         return password.type === 'text';
//     };

//     this.setOnChangeCallback = function (callback) {
//         this.onChange = callback;
//     };

//     this.setOnOpenChangeCallback = function (callback) {
//         this.onOpenChange = callback;
//     };

//     function triggerChangeCallback() {
//         if (typeof this.onChange === 'function') {
//             this.onChange(password.value);
//         }
//     }
//     password.addEventListener('input', triggerChangeCallback.bind(this));
// }

// function createButton(text, parent, onClickCallback) {
//     let button = document.createElement("button");
//     parent.appendChild(button);
//     button.innerHTML = text;
//     button.addEventListener("click", onClickCallback);
//     return button;
// }

// let form = document.createElement("form");
// document.body.appendChild(form);

// let login = new Password(form, true);
// let passwordField = new Password(form, true);

// let button = createButton("Enter", document.body, function () {
//     alert("Successfully");
// });

// button.disabled = true;

// login.setOnChangeCallback(check);
// passwordField.setOnChangeCallback(check);

// function check() {
//     button.disabled = !login.getValue() || !passwordField.getValue();
// }


//Password Verify
// function Password(parent, open) {
//     let password = document.createElement("input");
//     let button = document.createElement("button");
//     parent.append(password);
//     parent.append(button);

//     button.textContent = open ? "Hide" : "Show";

//     this.setStyle = function (style) {
//         for (const property in style) {
//             password.style[property] = style[property];
//         }
//     };

//     this.setDisabled = function (isDisabled) {
//         password.disabled = isDisabled;
//     };

//     this.setValue = function (value) {
//         password.value = value;
//         callback();
//     };

//     this.getValue = function () {
//         return password.value;
//     };

//     this.setOpen = function (isOpen) {
//         password.type = isOpen ? 'text' : 'password';
//         button.textContent = isOpen ? 'Hide' : 'Show';
//         if (typeof this.onOpenChange === 'function') {
//             this.onOpenChange(isOpen);
//         }
//     };

//     this.getOpen = function () {
//         return password.type;
//     };

//     function callback() {
//         if (typeof this.onChange === 'function') {
//             this.onChange(password.value);
//         }
//     }

//     button.addEventListener('click', () => {
//         this.setOpen(password.type === 'password');
//     });
// }

// function check() {
//     button.disabled = !password1.getValue() || !password2.getValue();
// }
//     const container = document.getElementById('passwordContainer');

//     const password1 = new Password(container, true);
//     const password2 = new Password(container, false);

//     password1.onOpenChange = function (isOpen) {
//         password2.setDisabled(!isOpen);
//     };

//     password2.onOpenChange = function () {
//         if (password1.getValue() !== password2.getValue()) {
//             password1.setStyle({ border: '2px solid red' });
//             password2.setStyle({ border: '2px solid red' });
//         } else {
//             password1.setStyle({ border: 'none' });
//             password2.setStyle({ border: 'none' });
//         }
//     };