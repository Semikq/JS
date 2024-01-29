{
    const user = prompt("What's your name?")
    alert(`Hello ${user}`)
}

{
    let user = prompt("Enter the word please")
    user = user.split(", ").join(", shit ")
    console.log(user)
}

{
    const str = "cANBerRa"
    const result = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
    console.log(result)
}

{
    let word = prompt()
    word = word.split(" ")
    console.log(word.length)
}

{
    function words(word){
        word = word.trim()
        return word = word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()
    }
    const name = words(prompt("name"))
    const surname = words(prompt("surname"))
    const fatherName = words(prompt("fatherName"))
    const fullName = `${name} ${surname} ${fatherName}`
    console.log(fullName)
}

{
    const str = "It was hot. Vasyl drank beer with shrimps"
    const result = str.split("beer").join("tea")
    console.log(result) 
}

{
    const str = "some text that has one <br/> tag and everything else"
    const result = str.slice(0,str.indexOf("<")) + str.slice(str.indexOf(">") + 2)
    console.log(result)
}

{
    const str = "some text that has one <br/> tag and everything else"
    const result = str.slice(0,str.indexOf("<")) + str.slice(str.indexOf("<"),str.indexOf(">") + 2).toUpperCase() + str.slice(str.indexOf(">") + 2)
    console.log(result)
}

{
    let user = prompt("Please enter a sentence with \\n")
    user = user.split("\\n ").join("\n")
    console.log(user)
}

{
    const regul = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
    const user = prompt()
    const id = user.match(regul)[1]
    const result = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}"></iframe>`
    document.write(res)
}