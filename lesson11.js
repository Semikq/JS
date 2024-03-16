{
  function makeProfileTimer(){
    return function(){
        return performance.now().toFixed()
    }
}

const timer = makeProfileTimer();
alert('Measuring the execution time of this alert');
alert(timer());
const timer2 = makeProfileTimer();
prompt('');
alert(`The execution time of two alerts and one prompt is ${timer()}`);
alert(`The execution time of a prompt and the previous alert is ${timer2()}`);
}

{
  function makeSaver(math){
    let result
    return function(){
        if(result === undefined){
            result = math() || "Anon"
        }
        return result
    }
}
let saver = makeSaver(Math.random);
let value1 = saver();
let value2 = saver();
alert(`Random: ${value1} === ${value2}`);

let saver2 = makeSaver(() => {
    console.log('saved function called');
    return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)];
});
let value3 = saver2();
let value4 = saver2();
alert(value3 === value4);

let namePrompt = prompt.bind(window, 'What is your name?');
let nameSaver = makeSaver(namePrompt);
alert(`Hello! Prompt hasn't appeared yet!`);
alert(`Hello ${nameSaver()}. The prompt just appeared, first and last time.`);
alert(`Listen, ${nameSaver()}, let's go drink beer. Because the prompt only appeared once.`);
}

{
function myBind(math,arr){
  return function(...num){
      let result = []
      let defaultParamsIndex = 0
      for(let i = 0; i < arr.length; i++){
          if(arr[i] !== undefined){
              result.push(arr[i])
          }else{
              result.push(num[defaultParamsIndex])
              defaultParamsIndex++
          }
      }
      return math(...result)
  }
}
let pow5 = myBind(Math.pow, [, 5])
let cube = myBind(Math.pow, [, 3])

console.log(pow5(2))
console.log(pow5(4))
console.log(cube(3))

let chessMin = myBind(Math.min, [, 4, , 5,, 8,, 9])
console.log(chessMin(-1,-5,3,15))

let zeroPrompt = myBind(prompt, [undefined, "0"])
zeroPrompt("Enter a number")

const bindedJoiner = myBind((...params) => params.join(''), [, 'b', , , 'e', 'f'])
console.log(bindedJoiner('a','c','d') === 'abcdef')
console.log(bindedJoiner('1','2','3') === '1b23ef')
}

{
function checkResult(original, validator) {
  function wrapper(...params) {
      let result;
      do {
          result = original.apply(this, params);
      } while (!validator(result));
      return result;
  }
  return wrapper;
}
const RandomHigh = checkResult(() => Math.random(), x => x >= 0.5 && x <= 1);
console.log(RandomHigh())
const AlwaysSayYes = checkResult(
  () => confirm("Press OK to continue"),
  x => x === true
);
console.log(AlwaysSayYes())
const numberPrompt = checkResult(prompt, x => !isNaN(+x));
let number = +numberPrompt("Enter a number", "0");
const gamePrompt = checkResult(prompt, x => ['rock', 'scissors', 'paper'].includes(x.toLowerCase()));
const turn = gamePrompt("Enter something from the list: 'rock', 'scissors', 'paper'");
const randomValue = RandomHigh();
const alwaysYes = AlwaysSayYes();
}