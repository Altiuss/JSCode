// const start = performance.now();
// setTimeout(() => {
//     console.log(performance.now() - start);
//     console.log('setTimeout');
//     }, 2000);

// function myFunction(arg) {
//     console.log(`Arg => ${arg}`);
// }

// setTimeout(myFunction, 2000, 'Hello World');

// const timerId = setTimeout(() => {
//     console.log('Booooom');
//     }, 5000);

//     setTimeout(() => {
//    clearTimeout(timerId)
//    console.log('Clearing timer');
//     }, 1000);

// const intervalId = setInterval(() => {
//     console.log(performance.now() );
//     }, 100);

//     setTimeout(() => {
//     clearInterval(intervalId)
//     console.log('Clearing interval');
//     }, 5000);

// console.log('Start');

// setImmediate(() => {
//     console.log('Immediate');
// });

// console.log('End');

const timerId = setTimeout(() => {
    console.log('Booooom');
    }, 5000);

   timerId.unref();

   setImmediate(() => {
   timerId.ref();
   
    });