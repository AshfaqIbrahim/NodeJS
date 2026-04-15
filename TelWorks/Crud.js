const fs = require("fs");

// 1.Write File
//Sync
fs.writeFileSync("./TelWorks/test.txt", "Hey Iam Synchronous");

//Async
fs.writeFile("./TelWorks/test.txt", "Hello, This is a test", (err) => {});

// 2.Read File
//Sync
const result = fs.readFileSync("./TelWorks/contacts.txt", "utf-8");
console.log(result);

//Async
fs.readFile("./TelWorks/contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log(result);
  }
});

// 3.Apending File
//Sync
fs.appendFileSync("./TelWorks/test.txt", "\nHey there I got appended");

//Async
fs.appendFile(
  "./TelWorks/test.txt",
  "\nHey there I got appended and Im Asynchronous",
  (err) => {},
);

//4. Delete File
fs.unlinkSync("./TelWorks/todelete.txt"); //todelete.txt file is deleted
