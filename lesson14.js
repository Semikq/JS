//HTML tree
// const table = {
//     tagName: 'table',
//     attrs: {
//         border: "1",
//     },
//     children: [
//         {
//             tagName: 'tr',
//             children: [
//                 {
//                     tagName: "td",
//                     children: ["1x1"],
//                 },
//                 {
//                     tagName: "td",
//                     children: ["1x2"],
//                 },
//             ]
//         },
//         {
//             tagName: 'tr',
//             children: [
//                 {
//                     tagName: "td",
//                     children: ["2x1"],
//                 },
//                 {
//                     tagName: "td",
//                     children: ["2x2"],
//                 },
//             ]
//         }
//     ]
// };

// function htmlTree(element){
//     let html = ""
//     html += ` <${element.tagName}`
//     if(element.attrs){
//         for(let ats in element.attrs){
//             html += ` ${ats}`
//         }
//     }
//     html += `>`
//     if(element.children){
//         for(let child of element.children){
//             if(typeof child === "string"){
//                 html += child
//             }else{
//                 html += htmlTree(child)
//             }
//         }
//     }
//     html += `</${element.tagName}>`
//     return html
//     }
// document.write(htmlTree(table))


//DOM tree
// const object = {
//     tagName: "body",
//     children: [
//         {
//             tagName: "div",
//             children: [
//                 {
//                     tagName: "span",
//                     children: ["Enter a data please:"]
//                 },
//                 {
//                     tagName: "br"
//                 },
//                 {
//                     tagName: "input",
//                     attrs: {
//                         type: "text",
//                         id: "name"
//                     }
//                 },
//                 {
//                     tagName: "input",
//                     attrs: {
//                         type: "text",
//                         id: "surname"
//                     }
//                 }
//             ]
//         },
//         {
//             tagName: "div",
//             children: [
//                 {
//                     tagName: "button",
//                     attrs: {
//                         id: "ok"
//                     },
//                     children: ["OK"]
//                 },
//                 {
//                     tagName: "button",
//                     attrs: {
//                         id: "cancel"
//                     },
//                     children: ["Cancel"]
//                 }
//             ]
//         }
//     ]
// };

// function htmlDOM(parent, obj){
//     if(typeof obj === "string"){
//         parent.innerHTML = obj
//     }

//     const {tagName,attrs,children} = obj
//     let div = document.createElement(tagName)

//     if(attrs){
//         for(let attrsKey in attrs){
//             let attrsValue = attrs[attrsKey]
//             div[attrsKey] = attrsValue
//         }
//     }
//     parent.append(div)

//     if(children){
//         for(let child of children){
//             htmlDOM(div,child)
//         }
//     }
// }
// document.write = (htmlDOM(document.body, object))


//Deep Copy
// function deepCopy(obj){
//     let copy
//     if(obj === undefined || obj === null || obj !== "Object"){
//         return obj
//     }

//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             copy[key] = deepCopy(obj[key])
//         }
//     }
//     return copy
// }
// const arr = [1, "string", null, undefined, {a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
// const arr2 = deepCopy(arr);
// console.log(arr2);


//My Stringify
// function customStringify(obj) {
//     if (obj === null) {
//       return 'null';
//     } else if (typeof obj === 'object') {
//       if (Array.isArray(obj)) {
//         const elements = obj.map(element => customStringify(element));
//         return `[${elements.join(',')}]`;
//       } else {
//         const pairs = [];
//         for (const key in obj) {
//           if (obj.hasOwnProperty(key)) {
//             const keyStr = customStringify(key);
//             const valueStr = customStringify(obj[key]);
//             pairs.push(`${keyStr}:${valueStr}`);
//           }
//         }
//         return `{${pairs.join(',')}}`;
//       }
//     } else if (typeof obj === 'string') {
//       return `"${obj}"`;
//     } else {
//       return String(obj);
//     }
//   }
//   const arr = [1, "string", null, undefined, {a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
//   console.log(customStringify(arr));


// getElementById throw
// function getElementById(idToFind) {
//     function walker(parent) {
//         for(let key of parent.children){
//             if(key.id === idToFind){
//                 return key;
//             };
//             let result = walker(key);
//             if(result){
//                 return result;
//             };
//         };
//         return null;
//     };
//     return walker(document);
// };
