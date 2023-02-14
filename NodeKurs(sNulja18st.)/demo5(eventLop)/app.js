const fs = require('fs');

console.log('1  Init');                                                                                // 1
                                                                                                     
setTimeout(() => {                                                                              // 2
    console.log(performance.now(), '2    Timer 0');
    }
, 100);

setImmediate(() => {                                                             // 3
    console.log( '3  Immediate ');
    }
);

fs.readFile(__filename, () => {                                                              // 4
    console.log('4 Read file');
});

setTimeout(() => {                                                    // 5 
    for (let i = 0; i < 1000000000; i++) {
        
    }
    console.log('5 Done');                                                               
    Promise.resolve().then(() => {
        console.log('6 Promise inside timeout');// 6
        }
    );
    process.nextTick(() => {                                             // 7
        console.log('7  Next tick inside timeout');
        }
    );

    }
, 100);

       
   Promise.resolve().then(() => {
    console.log('8 Promise');                                             // 8
    }
);

process.nextTick(() => {
    console.log('9 Next tick');                             // 9
    }
);


console.log('10 End');                                                 // 10





