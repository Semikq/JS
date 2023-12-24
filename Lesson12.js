function createStore(reducer){
    let state
    let listeners = []

    function getState(){
        return state
    }

    function dispatch(action){
        let newState = reducer(state, action)
        if(newState !== state){
            state = newState
            for(let listener of listeners){
                listener()
            }
            document.title = `cash: ${state.cash}`
        }
    }

    dispatch({})

    function subscribe(listener){
        listeners.push(listener)
        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    }

    return{
        getState,
        dispatch,
        subscribe
    }
}

let goods = {
    beer: {number: 100, cost: 5},
    kvass: {number: 100, cost: 10},
    chips: {number: 100, cost: 8}
}

function reducer(state = {goods , cash: 0}, {what, howMany, money}){
    if(!state){
        return state
    }
    if(state.goods[what] && state.goods[what].cost >= howMany && money >= howMany * state.goods[what].cost){
        return {
            ...state,
                goods: {
                    ...state.goods,
                    [what]: {
                    ...state.goods[what],
                    number: state.goods[what].number - howMany
                }
            },
            cash: state.cash + howMany * state.goods[what].cost
            };
    }
    return state
}

let state = createStore(reducer)

let kiosk = document.getElementById("kiosk")
let select = document.getElementById("select")
let number = document.getElementById("number")
let money = document.getElementById("money")
let button = document.getElementById("button")

for(let good in state.getState().goods){
    let div = document.createElement("div")
    div.innerText = `${good} ${state.getState().goods[good].number}, price: ${state.getState().goods[good].cost}`
    kiosk.append(div)
}

for(let good in state.getState().goods){
    let option = document.createElement("option")
    option.innerText = good
    select.append(option)
}

state.subscribe (function (){
    kiosk.innerText = ""
    for(let good in state.getState().goods){
        let div = document.createElement("div")
        div.innerText = `${good} ${state.getState().goods[good].number}, price: ${state.getState().goods[good].cost}`
        kiosk.append(div)
    }
})

button.addEventListener("click", function(){
    let SSelect = select.value
    let NNumber = parseInt(number.value)
    let MMoney = parseInt(money.value)
    state.dispatch({what: SSelect, howMany: NNumber, money: MMoney})
})