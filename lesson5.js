{
   console.log([confirm(), confirm(), confirm()])
}

{
    const arr = []
    arr[0] = prompt("How are you?")
    arr[1] = prompt("What you do?")
    arr[2] = prompt("How was your day?")
    console.log(arr)
}

{
    const arr = []
    arr[0] = prompt("How are you?")
    arr[1] = prompt("What you do?")
    arr[2] = prompt("How was your day?")
    const index = arr[prompt("Please enter an index")]
    console.log(`Your index ${index}\nThe word length of your index ${index.length}`)
}

{
    const arr = ["one", "two", "three"]
    arr[prompt("Enter the index")] = prompt("Enter the word")
    console.log(arr)
}

{
    const arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    console.log(arr[3][5])
}

{
    let arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    arr = arr.slice(1).map(arr => arr.slice(1))
    console.log(arr)
}


if(all === "seven"){
    const sentence = prompt("Enter a sentence")
    const word = prompt("Enter the word you want to find")
    if(sentence.includes(word)){
        const result = sentence.split(" ").indexOf(word)
        console.log(`Your word ${result + 1}`)
    }else{
        console.log("There is no such word")
    }
}

{
  const arr = []
  const arr2 = []
  arr.push(prompt())
  arr.push(prompt())
  arr.push(prompt())
  arr.push(prompt())
  arr2.push(arr.pop())
  arr2.push(arr.pop())
  arr2.push(arr.pop())
  arr2.push(arr.pop())
  console.log(arr2)
}

{
    const arr = []
    const arr2 = []
    arr.unshift(prompt())
    arr.unshift(prompt())
    arr.unshift(prompt())
    arr.unshift(prompt())
    arr2.unshift(arr.shift())
    arr2.unshift(arr.shift())
    arr2.unshift(arr.shift())
    arr2.unshift(arr.shift())
    console.log(arr2)
}

{
    const arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    const arr2 = [...arr]
    console.log(arr2)
}

{
    const arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    const arr2 = structuredClone(arr)
    console.log(arr2)
}

{
  const arr = ["one","two","three"]
  const arr2 = arr
  console.log(arr === arr2)
}

{
  const arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
  const arr2 = [...arr[0],...arr[1],...arr[2],...arr[3],...arr[4],...arr[5]]
  console.log(arr2)
}

{
  const user = prompt()
  const [one,,,,five,,,nine] = user
  console.log(one)
  console.log(five)
  console.log(nine)
}

{
  const user = prompt()
  const [, two = "!",, four = "!", five = "!"] = user
  console.log(two)
  console.log(four)
  console.log(five)
}

{
    const arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    const [, ...arr2] = arr
    const noZero = arr2.map(row => row.slice(1))
    console.log(noZero)
}

{
  const names = ["John", "Paul", "George", "Ringo"]
  for(let name of names){
      alert(name)
  }
}

{
  const currencies = ["USD", "EUR", "GBP", "UAH"]
  let   str = "<select>"
  for (const currency of currencies){
      str += `<option>${currency}</option>`
  }
  str+= "</select>"
  document.write(str)
}

{
  const names = ["John", "Paul", "George", "Ringo"]
  let   str = "<table><tr>"
  for (const name of names){
      str += `<td>${name}</td>`
  }
  str+= "</tr></table>"
  document.write(str)
}

{
  const names = ["John", "Paul", "George", "Ringo"]
  let   str = "<table>"
  for (const name of names){
      str+= `<tr><td>${name}</td></tr>`
  }
  str+= "</table>"
  document.write(str)
}

{
  const currencies = ["USD", "EUR", "GBP", "UAH"]
  let   str = "<table>"
  for (const currency of currencies){ 
      str += "<tr>"
      console.log(currency)
      for (const letter of currency){ 
          str += `<td>${letter}</td>`
          console.log(letter)
      }
      str += "</tr>"
  }
  str+= "</table>"
  document.write(str) 
}

{
  const arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
  let   str = "<table>"
  for (const currency of arr){ 
      str += "<tr>"
      for (const letter of currency){ 
          str += letter % 2 ? `<td style = "background: red">${letter}</td>`:`<td>${letter}</td>`
      }
      str += "</tr>"
  }
  str+= "</table>"
  document.write(str) 
}

{
  const capitalize = str => {
    return result = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()}
console.log(capitalize("cANBerRa"))
}

{
  const capitalize = str => {
    return arr = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
}
const user = prompt("Enter a sentence:").split(" ")
const result = user.map(word => capitalize(word)).join(" ")
console.log(result)
}

{
  const arr = ["a", "c", "e"]
  const user = prompt('Enter a sentence:').split(" ")
  const result = user.filter(row => !arr.includes(row)).join(" ")
  console.log(result)
}

{
  const arr = ["a", "b", "c"]
  const user = prompt('Enter a sentence:').split(" ")
  const result = user.map(word => arr.includes(word) ? "BEEP" : word).join(" ")
  console.log(result)
}

{
const currencies = ["USD", "EUR", "GBP", "UAH"]
      let str = "<select>"
      str += currencies.reduce( (a,b) => a + `<option>${b}</option>`, "" )
      str += "</select>"
      document.write(str)
}

{
  const line = prompt()
  const bracketsStack = []
  let   i = 0
  for (const character of line){
      if("[,(,{".includes(character)){
          bracketsStack.push(character)
      }else if("],),}".includes(character)){
          let last = bracketsStack.pop()
          if(
          character === ")" && last === "(" ||
          character === "]" && last === "[" ||
          character === "}" && last === "{"){
              console.log("All is well")
          }else{
              console.log(`Position error ${i}`)
          }
      }else{
          console.log("These are not brackets")
      }
      i++ 
  }
}