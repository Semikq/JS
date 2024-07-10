{
    function htmlTree(parent){
        let html = ""
        for(let result of parent.children){
            let elemets = ""
            if(result.tagName){
                elemets += `<${result.tagName}`
                if(result.attrs){
                    for(let attr in result.attrs){
                        elemets += ` ${attr}="${result.attrs[attr]}"`
                    }
                }
                elemets += ">"
            }
            if(result.children){
                if(result.tagName === "span" || result.tagName === "button"){
                    for(let child of result.children){
                        elemets += `${child}`
                    }
                }
                elemets += htmlTree(result)
            }
            if(result.tagName){
                elemets += `</${result.tagName}>`
            }
            html += elemets
        }
        return html
    }

const parent = {
tagName: "body",
children: [
    {
        tagName: "div",
        children: [
            {
                tagName: "span",
                children: ["Enter a data please:"]
            },
            {
                tagName: "br"
            },
            {
                tagName: "input",
                attrs: {
                    type: "text",
                    id: "name"
                }
            },
            {
                tagName: "input",
                attrs: {
                    type: "text",
                    id: "surname"
                }
            }
        ]
    },
    {
        tagName: "div",
        children: [
            {
                tagName: "button",
                attrs: {
                    id: "ok"
                },
                children: ["OK"]
            },
            {
                tagName: "button",
                attrs: {
                    id: "cancel"
                },
                children: ["Cancel"]
            }
        ]
    }
]
}

document.write(htmlTree(parent))
}

{
function htmlTree(parent, obj){
    for(let result of obj.children){
        if(result.tagName){
            let teg = document.createElement(result.tagName)
            if(result.attrs){
                for(let attr in result.attrs){
                    teg[attr] = result.attrs[attr]
                }
            }
            if(result.children){
                if (result.tagName === "span" || result.tagName === "button"){
                    for(let child of result.children){
                        teg.textContent = child
                    }
                }
                htmlTree(teg, result)
            }
            parent.append(teg)
        }
    }
}

const parent = {
tagName: "body",
children: [
{
    tagName: "div",
    children: [
        {
            tagName: "span",
            children: ["Enter a data please:"]
        },
        {
            tagName: "br"
        },
        {
            tagName: "input",
            attrs: {
                type: "text",
                id: "name"
            }
        },
        {
            tagName: "input",
            attrs: {
                type: "text",
                id: "surname"
            }
        }
    ]
},
{
    tagName: "div",
    children: [
        {
            tagName: "button",
            attrs: {
                id: "ok"
            },
            children: ["OK"]
        },
        {
            tagName: "button",
            attrs: {
                id: "cancel"
            },
            children: ["Cancel"]
        }
    ]
}
]
}

htmlTree(document.body, parent)
}

{
function deepCopy(arr){
    if(Array.isArray(arr)){
        return arr.map(deepCopy)
    }else if(arr === "object" && arr !== null){
        let newobj = {}
        for(let key in arr){
            newobj[key] = deepCopy(arr[key])
        }
        return newobj
    }else{
        return arr
    }
}

const arr = [1,"string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
const arr2 = deepCopy(arr);
console.log(arr2);
}

{
function customStringify(obj) {
if (obj === null) {
    return 'null';
} else if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
        const elements = obj.map(element => customStringify(element));
        return `[${elements.join(',')}]`;
    }else {
    const pairs = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
        const keyStr = customStringify(key);
        const valueStr = customStringify(obj[key]);
        pairs.push(`${keyStr}:${valueStr}`);
        }
    }
        return `{${pairs.join(',')}}`;
    }
    } else if (typeof obj === 'string') {
    return `"${obj}"`;
} else {
    return String(obj);
}
}
const arr = [1, "string", null, undefined, {a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
console.log(customStringify(arr));
}

{
function getElementById(idToFind) {
    function walker(parent) {
        for(let key of parent.children){
            if(key.id === idToFind){
                return key
            }
            let result = walker(key)
            if(result){
                return result
            }
        }
        return null
    };
    return walker(document);
}
console.log(getElementById("div"))
}