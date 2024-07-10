{
    let nextMessageId = 0;

    function jsonPost(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {method: "POST", body: JSON.stringify(data)})
                .then(result => result.json())
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    async function sendMessage(nick, message) {
        const send = await jsonPost("http://students.a-level.com.ua:10012", {func: "addMessage", nick: nick, message: message});
        nextMessageId = send.nextMessageId;
    }

    async function getMessages() {
        const response = await jsonPost("http://students.a-level.com.ua:10012", {func: 'getMessages', messageId: nextMessageId});
        const container = document.getElementById("container");
        for (const element of response.data) {
            const div = document.createElement("div");
            div.innerText = `${element.nick}: ${element.message} time: ${new Date(element.timestamp).getHours()}:${new Date(element.timestamp).getMinutes()}`;
            container.prepend(div);
        }
    }

    async function sendAndCheck() {
        const nick = document.getElementById("nick").value;
        const message = document.getElementById("message").value;
        await sendMessage(nick, message);
        await getMessages();
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function checkLoop() {
        while (true) {
            await getMessages();
            await delay(2000);
        }
    }

    checkLoop();
    getMessages();
}





// {
//     async function swapiLinks(url){
//         const response = await fetch(url)
//         const data = await response.json()

//         async function check(data){
//             const arr = []
//             for(let element in data){
//                 const value = data[element]
//                 if(value && typeof value === "string" && value.includes("http")){
//                     arr.push(
//                         fetch(value).then(result => result.json())
//                         .then(result => {data[element] = result})
//                     )
//                 }else if(value && typeof value === "object"){
//                     arr.push(check(value))
//                 }
//             }
//             await Promise.all(arr)
//         }
//         await check(data)
//         return data
//     }
    
//     swapiLinks("https://swapi.dev/api/people/20/")
//     .then(yodaWithLinks => console.log(JSON.stringify(yodaWithLinks, null, 4)))
// }

// {
//     function domEventPromise(element, eventName) {
//         function executor(resolve) {
//             function eventHandler(event) {
//                 element.removeEventListener(eventName, eventHandler);
//                 resolve(event);
//             }
//             element.addEventListener(eventName, eventHandler);
//         }
//         return new Promise(executor);
//     }

//     const button = document.getElementById('button');
//     domEventPromise(button, 'click').then(error => console.log('event click happens', error));
// }