if (process.argv.length <= 3) {
    console.log("not enough args: port & url");
    process.exit(1);
}

let port = process.argv[2];
let url = process.argv[3];

Stream = require('node-rtsp-stream');

stream = new Stream
    ({
        name: `stream (${url})`,
        streamUrl: url,
        wsPort: port,
        ffmpegOptions: { // options ffmpeg flags
            '-stats': '', // an option with no neccessary value uses a blank string
            '-r': 30 // options with required values specify the value after the key
        }
    });