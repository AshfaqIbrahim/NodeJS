const { parentPort } = require("worker_threads");

parentPort.on("message", (num) => {
  let result = num * 10;
  parentPort.postMessage(result);
});

