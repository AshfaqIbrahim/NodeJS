const { Worker } = require("worker_threads");

const worker = new Worker("./Worker-thread/worker.js");

worker.on("message", (msg) => {
  console.log("Result from worker: ", msg);
});

worker.postMessage(10);
