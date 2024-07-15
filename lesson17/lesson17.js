// Traffic Light
{
const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

async function trafficLight(greenLight, yellowLight, redLight){
    const green = document.getElementById("green")
    const yellow = document.getElementById("yellow")
    const red = document.getElementById("red")
    while (true){
        red.style.background = "slategrey"
        red.innerText = ""
        green.style.background = "green"
        await time(green, greenLight)
        green.style.background = "slategrey"
        green.innerText = ""
        yellow.style.background = "yellow"
        await time(yellow, yellowLight)
        yellow.style.background = "slategrey"
        yellow.innerText = ""
        red.style.background = "red"
        await time(red, redLight)
    }
}

async function time(element, time){
    for(let i = time/1000; i > 0; i -= 0.1){
        element.innerText = i.toFixed(1)
        await delay(100)
    }
}
trafficLight(1500, 500, 2000)
}


// PedestrianTrafficLight
{
    const delay = ms => new Promise(ok => setTimeout(ok, ms));
    const button = document.getElementById("button");
    let flagLight = false;
    
    function domEventPromise(element, event) {
        return new Promise(resolve => {
            element.addEventListener(event, () => {
                flagLight = true;
                resolve();
            });
        });
    }
    
    async function trafficLight(greenLightTime, redLightTime) {
        const green = document.getElementById("green");
        const red = document.getElementById("red");
        let canPressButton = true;
    
        while (true) {
            red.style.background = "slategrey";
            red.innerText = "";
            green.style.background = "green";
            await time(green, greenLightTime);
    
            green.style.background = "slategrey";
            green.innerText = "";
            red.style.background = "red";
            flagLight = false;
    
            const redTimer = time(red, redLightTime);
    
            if (canPressButton) {
                await Promise.race([
                    redTimer,
                    domEventPromise(button, "click")
                ]);
                if (flagLight) {
                    canPressButton = false;
                    red.style.background = "slategrey";
                    green.style.background = "green";
                    await delay(greenLightTime);
                    canPressButton = true;
                }
            }
        }
    }
    
    async function time(element, time) {
        for (let i = time / 1000; i > 0; i -= 0.1) {
            if (flagLight) {
                break;
            }
            element.innerText = i.toFixed(1);
            await delay(100);
        }
        element.innerText = "";
    }
    
    trafficLight(2000, 3000);
}


// speedtest
{
const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

async function speedtest(getPromise, count,parallel=1){
    const arrSpeed = []
    const startTime = performance.now()

    for(let i = 0; i < count; i++){
        for(let y = 0; y < parallel; y++){
            arrSpeed.push(getPromise())
        }
        await Promise.all(arrSpeed)
    }

    const endTime = performance.now()
    const duration = endTime - startTime
    const querySpeed = count / duration;
    const queryDuration = duration / count;
    const parallelSpeed = (count * parallel) / duration;
    const parallelDuration = duration / (count * parallel)

        return {
            duration,
            querySpeed,
            queryDuration,
            parallelSpeed,
            parallelDuration
        }
    }
    
    // speedtest(() => delay(1000), 10, 10 ).then(result => console.log(result))
    speedtest(() => fetch('http://swapi.dev/api/people/1').then(res => res.json()).then(result => console.log(result)), 10, 5).then(time => console.log(time))
}


// gql
{
    async function gql(endPoint, query, variables){
        try{
            const response = await fetch(endPoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({query, variables}),
            })
        
            if(!response.ok){
                throw new Error("Network response was not ok");
            }else{
                return response.json()
            }

        }catch (error){
            return Promise.reject(error);
        }
    }

    ;(async () => {
        const catQuery = `query cats($q: String){
                                            CategoryFind(query: $q){
                                                _id name
                                            }
                                        }`
        const cats = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql",  catQuery,  {q: "[{}]"})
        console.log(cats)
        
        const loginQuery = `query login($login:String, $password:String){
                                    login(login:$login, password:$password)
                            }`
        
        const token = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", loginQuery ,{login: "test457", password: "123123"})
        console.log(token)
    })()
}


// jwtDecode
{
    function jwtDecode(token){
        try{
            if(!token){
                return undefined
            }

            const parts = token.split(".")
            if(parts.length !== 3){
                return undefined
            }

            const transcript = atob(parts[1])
            return JSON.parse(transcript)

        }catch(e){
            return undefined
        }
    }

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw"
    console.log(jwtDecode(token)) 
    //{
    //  "sub": {
    //    "id": "632205aeb74e1f5f2ec1a320",
    //    "login": "test457",
    //    "acl": [
    //      "632205aeb74e1f5f2ec1a320",
    //      "user"
    //    ]
    //  },
    //  "iat": 1668272163
    //}

    try {
        console.log(jwtDecode())         //undefined
        console.log(jwtDecode("дічь"))   //undefined
        console.log(jwtDecode("ey.ey.ey"))   //undefined
        
        console.log('до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором')
    }
    finally{
        console.log('ДЗ, мабуть, закінчено')
    }
}