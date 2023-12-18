// function makeProfileTimer(){
//    return function(){
//     return performance.now();
//   };
// };

// const timer = makeProfileTimer() ;
// alert('Вимiрюємо час роботи цього alert');
// alert(timer());
// const timer2 = makeProfileTimer();
// prompt('');
// alert(`Час роботи двух аlert та одного prompt ${timer()}`);
// alert(`Час роботи prompt та попереднього alert ${timer2()}`);



// function makeSaver(fn){
//   let result
//   return function(){
//     if(result === undefined){
//       result = fn()
//     }
//     return result
//   }
// }

// let saver = makeSaver(Math.random) 
// let value1 = saver()  
// let value2 = saver()              
// alert(`Random: ${value1} === ${value2}`)
// let saver2 = makeSaver(() => {
// console.log('saved function called');
// return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random()*6)]
// })
// let value3 = saver2()
// let value4 = saver2()
// alert(value3 === value4)
// let namePrompt = prompt.bind(window, 'Як тебе звуть?')
// let nameSaver = makeSaver(namePrompt)
// alert(`Привіт! Prompt ще не було!`)
// alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
// alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`)





// function myBind(fn, thisArg, argDefaults) {
//   return function (...params) {
//     for (let i = 0; i < argDefaults.length; i++) {
//       if (i >= params.length || params[i] === undefined) {
//         params[i] = argDefaults[i];
//       }
//     }
//     const filteredParams = params.filter(param => param !== undefined);
//     return fn.apply(thisArg, filteredParams);
//   };
// }


// let pow5 = myBind(Math.pow, Math, [, 5]);
// let cube = myBind(Math.pow, Math, [, 3]);

// console.log(pow5(2)); // 32
// console.log(pow5(4)); // 1024
// console.log(cube(3)); // 27

// let chessMin = myBind(Math.min, Math, [, 4, , 5, , 8, , 9]);
// console.log(chessMin(-1, -5, 3, 15)); // -5

// let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
// console.log(zeroPrompt("Введіть число")); // 0

// const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f']);
// console.log(bindedJoiner('a','c','d')); // abcdef
// console.log(bindedJoiner('1','2','3')); // 1b23ef



// function checkResult(original, validator) {
//   function wrapper(...params) {
//       let result;
//       do {
//           result = original.apply(this, params);
//       } while (!validator(result));
//       return result;
//   }
//   return wrapper;
// }


// const RandomHigh = checkResult(() => Math.random(), x => x >= 0.5 && x <= 1);
// console.log(RandomHigh())

// const AlwaysSayYes = checkResult(
//   () => confirm("Press OK to continue"),
//   x => x === true
// );
// console.log(AlwaysSayYes())

// const numberPrompt = checkResult(prompt, x => !isNaN(+x));
// let number = +numberPrompt("Введіть число", "0");

// const gamePrompt = checkResult(prompt, x => ['камень', 'ножиці', 'папір'].includes(x.toLowerCase()));
// const turn = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'");

// const randomValue = RandomHigh();

// const alwaysYes = AlwaysSayYes();