# NodeJS Server for Multiple Streams

## What is this?
This is a small repository which serves multiple RTSP streams on different ports. The ports, URLs and virtual key can all be specified in `config/streams.json`. An example is shipped with this repository in `config/streams-example.json`.

## Installation
To install, clone or download a copy of this repo. Then:

1) Run `npm install`
2) Copy `config/streams-example.json` to `config/streams.json` and modify with the details of the streams you wish to serve.
3) Run with `node multistream.js`
4) Connect to the served streams with the `jsmpeg` library, in html or whatever you like.


## Files in this repo
There are two main files in this repository. The first is `stream.js`, which takes two command-line arguments: the port to serve the stream to `jsmpeg` on, and the url. You can invoke this, for example, like so:

```sh
node stream.js 9977 rtsp://somestreamhere.com/whatever
```

There is also `multistream.js`, which can be invoked simply as `node multistream.js`. This will read the stream details from `config/streams.json` and create `n` amount of child processes, one for each stream. These processes are detached from the original process, so make sure to kill them on restart.