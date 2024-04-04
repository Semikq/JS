{
function Person(name, surname){
    this.name = name
    this.surname = surname
    this.getFullName = function(){
        return `${this.name} ${this.surname} ${this.fatherName || ""}`
    }
}

const a = new Person("Vasya", "Pupkin")
const b = new Person("Hanna", "Ivanova")
const c = new Person("Yelizaveta", "Petrova")

console.log(a.getFullName())
a.fatherName = 'Ivanovich'
console.log(a.getFullName())
console.log(b.getFullName())
}

{
function Person(name, surname){
    this.name = name
    this.surname = surname
}

Person.prototype.getFullName = function(){
    return `${this.name} ${this.surname} ${this.fatherName || ""}`
}

const a = new Person("Vasya", "Pupkin")
const b = new Person("Hanna", "Ivanova")
const c = new Person("Yelizaveta", "Petrova")

console.log(a.getFullName())
a.fatherName = 'Ivanovich'
console.log(a.getFullName())
console.log(b.getFullName())
}

{
const goods = document.getElementById("goods")
const yourMoney = document.getElementById("yourMoney")
const select = document.getElementById("select")
const amount = document.getElementById("amount")
const moneys = document.getElementById("money")
const button = document.getElementById("button")

function reducer(state, { type, what, HowMany, money}) {
    if (!state) {
        return {
            beer: {quantity: 100, cost: 6},
            chips: {quantity: 100, cost: 4},
            cola: {quantity: 100, cost: 3},
            salad: {quantity: 100, cost: 8}
        }
    }

    if (type === "buy") {
        const totalCost = HowMany * state[what].cost
        if(state[what].quantity - HowMany >= 0 && state[what].cost <= money && totalCost <= money && userMoney - totalCost >= 0){
            casa += totalCost
            userMoney -= totalCost
            return {
                    ...state,
                    [what]: {
                            quantity: state[what].quantity - HowMany,
                            cost: state[what].cost
                        }
                }
            }
        }
    return state;
}

function Store(reducer) {
    let store = reducer(undefined, {})
    let cbs = [];

    this.getState = () => store
    this.subscribe = cb => {
        cbs.push(cb)
        return () => {
            cbs = cbs.filter(c => c !== cb)
        };
    };

    this.dispatch = action => {
        const newStore = reducer(store, action)
        if (newStore !== store) {
            store = newStore
            document.title = `Casa: ${casa}`
            yourMoney.value = userMoney
            for (let cb of cbs) cb()
        }
    };
}

let casa = 0
let userMoney

let store = new Store(reducer)

function update(){
    goods.innerText = ""
    for(let item in store.getState()){
        const {quantity, cost} = store.getState()[item]
        const div = document.createElement("div")
        div.innerText = `${item}: quantity - ${quantity}, cost - ${cost}`
        goods.append(div)
    }
}
store.subscribe(update)

for(let item in store.getState()){
    const option = document.createElement("option")
    option.value = item
    option.innerText = item
    select.append(option)
}

button.addEventListener("click", function(){
    store.dispatch({type: "buy", what: select.value, HowMany: amount.value, money: moneys.value})
    yourMoney.disabled = true
    userMoney = yourMoney.value || 100
})
update()
}

{
    function Password(parent, open) {
        const input = document.createElement("input");
        const button = document.createElement("button");
        input.type = open ? "text" : "password";
        button.innerText = open ? "Hide" : "Show";
    
        this.setStyle = function(color){
            input.style.backgroundColor = color
        }
    
        this.setValue = function(text) {
            input.value = text;
        };
    
        this.getValue = function() {
            return input.value;
        };
    
        this.setOpen = function(isOpen) {
            input.type = isOpen ? "text" : "password";
            button.innerText = isOpen ? "Hide" : "Show";
            if (this.onOpenChange) {
                this.onOpenChange(isOpen);
            }
        };
    
        this.getOpen = function() {
            return input.type === "text";
        };
    
        button.onclick = () => {
            this.setOpen(input.type === "password");
        };
    
        input.oninput = () => {
            this.onOpenChange(input.value)
        }
    
        parent.append(input, button);
    }
    
    let p = new Password(document.body, true);
    
    p.onChange = data => console.log(data);
    p.onOpenChange = open => console.log(open);
    
    p.setValue('qwerty');
    console.log(p.getValue());
    
    p.setOpen(false);
    console.log(p.getOpen());
    
    p.setStyle("red")
}

{
function Password(parent, open) {
    const input = document.createElement("input");
    input.type = open ? "text" : "password";

    this.setStyle = function(color){
        input.style.backgroundColor = color;
    };

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

    parent.append(input);
}

let form = document.createElement("form");
document.body.append(form);

let login = new Password(form, true);
let password = new Password(form, true);

const button = document.createElement("button");
button.disabled = true;
form.append(button);

function check() {
    if (login.getValue() && password.getValue()) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

login.onChange = password.onChange = check;

login.onChange = data => console.log(data);
login.onOpenChange = open => console.log(open);
}


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
//     }