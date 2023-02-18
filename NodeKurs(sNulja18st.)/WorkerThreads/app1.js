const factorial = require('./factorial');



const compute = (array) => {
    const  arr= [];
    for (let i = 0; i < 100000000; i++) {
        arr.push(i*i);
    }
    return array.map((el) => factorial(el));
}

const main = () => {
    performance.mark('start');
    const result = [
        compute([25,20,19,48,30,50]),
        compute([25,20,19,48,30,50]),
        compute([25,20,19,48,30,50]),
        compute([25,20,19,48,30,50]),
    ]
console.log(result);

    performance.mark('end');
    performance.measure('main', 'start', 'end');
    console.log(performance.getEntriesByName('main').pop());
}

setTimeout(() => {
    console.log('timeout');
}, 1000);
main();

//-----------------------------------------------------------------------------------------------------------------


const {exec} = require('child_process');

const childProcess = exec('dir', (err, stdout, stderr) => {
    if (err) {
        console.log(err.message);
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});


childProcess.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
});
//-----------------------------------------------------------------------------------------------------------------


const {fork} = require('child_process');

const forkProcess = fork('./fork.js');

forkProcess.on('message', (msg) => {
    console.log(`Polucil msg:${msg}`);
});

forkProcess.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
});

forkProcess.send('Hello from parent');
forkProcess.send('disconnect');

