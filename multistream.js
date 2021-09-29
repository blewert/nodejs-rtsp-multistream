const config = require('./config/streams.json');
const { spawn } = require('child_process');

var streamProcs = [];

for (let stream of config.streams) {
    var streamProc = spawn("node", ["stream.js", stream.port, stream.url], {
        detached: true,
        stdio: "ignore"
    });

    console.log(`> Started stream ${stream.key} on port ${stream.port}: ${stream.url}`);

    streamProc.on('exit', (code) => {
        console.log(`Stream process exited with code ${code}`);
    })

    // streamProc.stderr.on('data', (data) => {
    //     console.log(`process stderr: ${data}`);
    // })

    streamProc.on('exit', (code) => {
        console.log(`Stream process exited with code ${code}`);
    })

    streamProcs.push(streamProc);
    console.log(`node stream.js ${stream.port} ${stream.url}`);
}