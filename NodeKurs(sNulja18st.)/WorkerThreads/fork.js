process.on('message', (msg) => {
    if (msg == 'disconnect') {
        process.disconnect();
        return;
    }
    console.log(`Polucil msg:${msg}`);
    process.send('Pong!');
    process.disconnect();
});

